import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Item = ({value, isDone, id, visible, onClickDone, onClickDelete}) => (
  <div className={styles.wrap}>
      <Checkbox
          color="default"
          checked={isDone}
          inputProps={{ 'aria-label': 'checkbox with default color' }}
          onClick={()=>onClickDone(id)}
        />
  <span className={
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
    }>
      {value}
  </span>
         <DeleteOutlinedIcon className={styles.btn} color="disabled"
         onClick={()=> onClickDelete(id)} />

 </div>
);

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}
export default Item;
