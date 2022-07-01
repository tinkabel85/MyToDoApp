import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Item = ({ value, isDone, id, visible, onClickDone, onClickDelete }) => {
  const [isEditing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const onClickEdit = value => {
    setEditing(true);
    console.log('edits');
  }

  const onClickEditDone = event => {
    console.log('editing is done');
    if (event.keyCode === 13) { //submit
      setEditing(false);
    }
  }
  const onClickEditChange = event => {
    const changedInput = event.target.value;
    console.log(event.target.value);
    console.log('edit saved');
    setInputValue(changedInput);
  }

  let viewMode = {}
  let editMode = {}

  if (isEditing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none'
  }

  return (
    <div className={styles.wrap}>
      <div style={viewMode} >
        <Checkbox
          color="default"
          checked={isDone}
          inputProps={{ 'aria-label': 'checkbox with default color' }}
          onClick={() => onClickDone(id)}
        />
        <span className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })
        }
          onDoubleClick={() => onClickEdit(value)}>
          {inputValue}
        </span>
        <DeleteOutlinedIcon className={styles.btn} color="disabled"
          onClick={() => onClickDelete(id)} />

      </div>

      <input type='text'
        onKeyDown={(event) => onClickEditDone(event)}
        onChange={(event) => onClickEditChange(event)}
        style={editMode}
        value={inputValue} />
    </div>

  );
}
Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}
export default Item;
