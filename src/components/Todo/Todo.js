import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import PropTypes from 'prop-types';


const Todo = ()=> {
      const [items, setItems] = useState([
                { value: 'Create a new app', isDone: false, id: 1 },
                { value: 'Add props', isDone: false, id: 2 },
                { value: 'Finish all tasks', isDone: false, id: 3 }
              ]);
      const [filter, setFilter] = useState([
              { isActive: true, value: 'All' },
              { isActive: false, value: 'Active' },
              { isActive: false, value: 'Completed' }
      ]);
      const [count, setCount] = useState(3);

  useEffect( () => {
    console.log('componentDidMount');
  }, []);

  useEffect( ()=> {
    console.log('componentDidUpdate');
  },[items]);

    const onClickDone = id => {
      const newItemList = items.map(item => {
        const newItem = {...item};

          if (item.id === id) {
            newItem.isDone = !item.isDone;
          }

          return newItem;
      });
      setItems(newItemList);
    };

    const onClickDelete = id => {
      const newItemList = items.filter(item => item.id !== id );
        setItems(newItemList);
        setCount(count -1);
      };

    const onClickDeleteAll = isDone => {
      const newItemList = items.filter(item => item.isDone !== true);
      setItems(newItemList);
      const newList = items.filter(item => item.isDone == true);
      setCount(count-newList.length);
    };

    const onClickAdd = value => {
      let maxId = 0;
      items.forEach(item => {
        if(item.id >maxId){
          maxId = item.id;
        }
      });
      const newItemList = [
        ...items,
        { value, isDone: false, id: maxId + 1}
      ];
      setItems(newItemList);
      setCount(count +1);
    };


    return (
    <div className={styles.main}>
        <h1 className={styles.title}>todos</h1>
        <InputItem onClickAdd={onClickAdd}/>
        <ItemList
        items = {items}
        onClickDone={onClickDone}
        onClickDelete= {onClickDelete}
        />
        <Footer count={count}
        onClickDeleteAll= {onClickDeleteAll}
        btn={filter}/>
    </div>);

};

Todo.propTypes = {
  items: PropTypes.array,
  filter: PropTypes.array,
};

export default Todo;
