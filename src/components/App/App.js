import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Todo from '../Todo/Todo';
import About from '../About/About';
// import AboutMe from '../About/AboutMe';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';


const App = () =>
    (<div className={styles.app}>
      <Router>
          <div className={styles.wrap}>

            <div className={styles.sidebar}>
                <MenuList>
                     <Link to='/' className={styles.link}><MenuItem>About me</MenuItem></Link>
                     <Link to='/todo' className={styles.link}><MenuItem>Tasks</MenuItem></Link>
                     <Link to='/contacts' className={styles.link}><MenuItem>Contacts</MenuItem></Link>
                 </MenuList>
            </div>

            <div className={styles.content}>
                <Route path='/' exact component={About} />
                <Route path='/todo' component={Todo} />
                <Route path='/contacts' component={Contacts} />
            </div>
        </div>
    </Router>
       <div className={styles.whs}>Designed at Web Hero School</div>
  </div>);

  export default App;
