import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

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
    <div>
        <h1>Important Tasks</h1>
        <InputItem />
        <ItemList items = {items} />
        <Footer count ={3} />
    </div>);
    }

    export default App;
