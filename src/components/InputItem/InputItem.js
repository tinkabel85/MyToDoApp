import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class InputItem extends React.Component {
    state = {
        inputValue: ''
    };

    onButtonClick = () => {
      if (this.state.inputValue !== '') {
        this.setState({
            inputValue: ''
        });
        this.props.onClickAdd(this.state.inputValue);
    } else {
      this.setState({
        helperText: 'Required field',
        error: true
      });
    }
  }

      render() {
        const {onClickAdd} = this.props;


          return ( <Grid>
              <TextField
                  id = "standard-full-width"
                  style = {{margin: 8}}
                  label = "What needs to be done?"
                  fullWidth
                  margin = "normal"
                  value={this.state.inputValue}
                  error={this.state.error}
                  helperText={this.state.helperText}
                  onChange={event=>
                    this.setState({
                      inputValue: event.target.value.toUpperCase()
                    })
                  }
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={this.onButtonClick}
              >
                   Add task
               </Button>
            </Grid>);
      }
}

export default InputItem;
