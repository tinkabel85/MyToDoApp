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
              isDone: false,
              id: 1
            },
            {
              value: 'Add props',
              isDone: false,
              id: 2
            },
            {
              value: 'Finish all tasks',
              isDone: false,
              id: 3
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
          ],
          count: 6
    };

    onClickDone = id => {
      const newItemList = this.state.items.map(item => {
        const newItem = {...item};

          if (item.id == id) {
            newItem.isDone = !item.isDone;
          }

          return newItem;
      })
      this.setState({items: newItemList });
    };

  render() {

    return (
    <div className={styles.wrap}>
        <h1 className={styles.title}>todos</h1>
        <div className={styles.main}>
        <InputItem />
        <ItemList items = {this.state.items} onClickDone={this.onClickDone}/>
        <Footer count ={this.state.count} onClickFooter={this.onClickFooter} btn={this.state.filter}/>
        </div>
    </div>);
  }
};

    export default App;
