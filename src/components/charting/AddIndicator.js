import React from 'react'

import Button from '@material-ui/core/Button';

export default function AddIndicator(props) {
    const { addIndicator } = props;
    return (
        <div>
            <Button 
              variant="contained"
              onClick={addIndicator}
            >
              Change Something
            </Button>
        </div>
    )
}
