import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles, fade } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';


import searchSuggestions from './searchSuggestions'


const companies = searchSuggestions.companylist


function renderInput(inputProps) {
  const { InputProps, classes, ...other } = inputProps;
  return (
    <TextField
        id="outlined-search"
        type="search"
        // className={classes.search}
        margin="normal"
        variant='outlined'
        disableunderline= 'true'
        fullWidth
        InputProps={{
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput,
          },
          ...InputProps,
        }}
        {...other}
    />
  );
}

renderInput.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
};

function renderSuggestion(suggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.name) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.name}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.name}
    </MenuItem>
  );
}

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.number]).isRequired,
  index: PropTypes.number.isRequired,
  itemProps: PropTypes.object.isRequired,
  selectedItem: PropTypes.string.isRequired,
  suggestion: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function getSuggestions(value, { showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : companies.filter(company => {
        const keep =
          count < 10 && (company.symbol.slice(0, inputLength).toLowerCase() === inputValue ||company.name.slice(0, inputLength).toLowerCase() === inputValue );

        if (keep) {
          count += 1;
        }

        return keep;
      });
};


const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    zIndex: 5,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  search: {
    flexGrow: 1,
    color:'primary',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    flexGrow:1,
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));


export default function SearchBar(props) {
  const classes = useStyles();
  const { onUpdateSymbol} = props;
  return (
    <div>
      <Downshift onChange={selection => {
        let c = companies.filter(company => {return company.name === selection});
        onUpdateSymbol(c[0].symbol);
      }}>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
        }) => {
          const {...inputProps } = getInputProps({
          });

          return (
              <div className={classes.search}>
                {renderInput({
                  classes,
                  InputLabelProps: getLabelProps({ shrink: true }),
                  InputProps: {
                    placeholder: 'Search',
                  },
                  inputProps,
                })}

                <div {...getMenuProps()}>
                  {isOpen ? (
                    <Paper className={classes.paper} square>
                      {getSuggestions(inputValue).map((suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({ item: suggestion.name }),
                          highlightedIndex,
                          selectedItem,
                        }),
                      )}
                    </Paper>
                  ) : null}
                </div>
              </div>
          );
        }}
      </Downshift>
    </div>
  );
}
