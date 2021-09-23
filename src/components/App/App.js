import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';


const App = () =>
    (<div className={styles.app}>
      <Helmet>
                <meta charSet="utf-8" />
                <title>ToDo Application</title>
                <link rel="canonical" href="https://about-tinkabel.netlify.app/"/>
               <meta property="og:title" content="Get to know me and use my todo tool" />
               <meta property="og:url" content="https://about-tinkabel.netlify.app/" />
               <meta property="og:image" content="https://i.postimg.cc/50QwnKNR/Todo-Application-2021-09-17-12-36-59.png " />
               <meta name="description" content="Happy to present my first React application" />
               <meta property="og:type" content="web application" />
           </Helmet>

      <Router>
          <div className={styles.wrap}>

            <div className={styles.sidebar}>
              <div className={styles.menu}>
                    <NavLink to='/' exact className={styles.link} activeClassName={styles.['link__active']} >About me</NavLink>
                    <NavLink to='/todo' className={styles.link} activeClassName={styles.['link__active']} >Tasks</NavLink>
                    <NavLink to='/contacts' className={styles.link} activeClassName={styles.['link__active']} >Contacts</NavLink>
            </div>
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
