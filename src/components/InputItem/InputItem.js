import React, { useState} from 'react';
// import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const InputItem = ({onClickAdd}) => {
    const [inputValue, setInputValue] = useState('');
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);

    const onButtonClick = () => {
      if (inputValue === '') {
        setHelperText('Required field');
        setError(true);
      } else {
        setInputValue('');
        onClickAdd(inputValue);
      }
    }
   return ( <Grid>
       <TextField
           id = "standard-full-width"
           style = {{margin: 8}}
           label = "What needs to be done?"
           fullWidth
           margin = "normal"
           value={inputValue}
           error={error}
           helperText={helperText}
           onChange={event=>
               setInputValue(event.target.value.toUpperCase())}
          onFocus={event=>{
               setHelperText('')
               setError(false)}
             }
       />

       <Button
         variant="contained"
         color="primary"
         fullWidth
         onClick={onButtonClick} >
            Add task
        </Button>
     </Grid>);
   };

   InputItem.propTypes = {
     onClickAdd: PropTypes.func.isRequired
   };

export default InputItem;
