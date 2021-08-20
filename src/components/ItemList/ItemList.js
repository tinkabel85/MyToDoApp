import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';


const Itemlist = ({items, onClickDone, onClickDelete }) =>
(<div className={styles.wrap}>
      {items.map(item => <Item key={item.id}
          Item
          value={item.value}
          isDone={item.isDone}
          id={item.id}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
          />
        )}
  </div>);

  export default Itemlist;
