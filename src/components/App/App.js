import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


const todoItem = 'Create a new app';

const App = () => {
    const items = [
        {
          value: 'Create a new app',
          isDone: true
        },
        {
          value: 'Add props',
          isDone: false
        },
        {
          value: 'Finish all tasks',
          isDone: true
        }
    ]
    return (
    <div className={styles.wrap}>
        <h1 className={styles.title}>Important Tasks</h1>
        <InputItem />
        <ItemList items = {items} />
        <Footer count ={3} />
    </div>);
    }

    export default App;
