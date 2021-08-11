import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
    <TextField
      label="Add a new task"
      id="margin-dense"
      defaultValue="Default Value"
      helperText="Please try to keep it precise and short"
      margin="dense"
    />
  </div>);
export default InputItem;
