import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import CustomizedInput from '../InputItem/InputItem';

class App extends React.Component {
    state = {
          items: [
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
              isDone: false
            }
          ],

          filter: [
            {
              isActive: true,
              value: 'All',
            },
            {
              isActive: false,
              value: 'Active',
            },
            {
            isActive: false,
            value: 'Completed',
            }
          ]
    };

    onClickDone = isDone => console.log(isDone);
  
  render() {

    return (
    <div className={styles.wrap}>
        <h1 className={styles.title}>todos</h1>
        <div className={styles.main}>
        <InputItem />
        <ItemList items = {this.state.items} onClickDone={this.onClickDone}/>
        <Footer count ={3} btn={this.state.filter}/>
        </div>
    </div>);
  }
};

    export default App;
