import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';


const Itemlist = ({items, onClickDone }) =>
(<div className={styles.wrap}>
      {items.map(item =>
        <Item key={item.value}
          Item value={item.value}
          isDone={item.isDone} onClickDone={onClickDone} />
        )}
  </div>);

  export default Itemlist;
