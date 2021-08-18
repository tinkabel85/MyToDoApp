import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Item = ({value, isDone, onClickDone, id}) => (
  <div className={styles.wrap}>
      <Checkbox
          color="default"
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
         <DeleteOutlinedIcon className={styles.btn} color="disabled" />

 </div>
);


export default Item;
