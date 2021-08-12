import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& label': {
      color: '#e3d8d8',
      letterSpacing: '5px',
      fontSize: '20px',
    },
    '& .MuiInput-underline:after': {
        borderColor: '#c4c4c4',
      },
    '& label.Mui-focused': {
      color: '#c4c4c4',
    },
    '&:hover' : {
      backgroundColor: '#fcfcfb',
    },
  },
});

export default function CustomizedInput() {
  const classes = useStyles();
  return ( <div className = {classes.root}>
    <TextField id = "standard-full-width"
    style = {{margin: 8}}
    label = "What needs to be done?"
    fullWidth
    margin = "normal"
    />
    </div>
  );
}
