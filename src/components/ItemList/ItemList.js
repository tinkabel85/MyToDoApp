import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';


const ItemList = ({items, onClickDone, onClickDelete }) =>{
  const visibleItems = items.filter(item => item.visible === true);

 return (<div className={styles.wrap}>
      {visibleItems.map(item => <Item key={item.id} className={styles.item}
          Item
          value={item.value}
          isDone={item.isDone}
          visible={item.visible}
          id={item.id}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
          />
        )}
  </div>);
  };

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

  export default ItemList;
