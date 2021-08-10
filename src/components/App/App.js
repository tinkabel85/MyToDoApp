import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Create a new app';

const App = () => {
    const items = [
        {
          value: 'Create a new app'
        },
        {
          value: 'Add props'
        },
        {
          value: 'Finish all tasks'
        }
    ]
    return (
    <div className='wrap'>
        <h1 className='wrap__title'>Important Tasks</h1>
        <InputItem />
        <ItemList items = {items} />
        <Footer count ={3} />
    </div>);
    }

    export default App;
