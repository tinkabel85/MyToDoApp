import React from 'react';
import styles from './Contacts.module.css';
import Formatting from '../Formatting/Formatting';


const Contacts= () => (
    <div className={styles.wrap}>
    <h1 className={styles.title}>Contacts</h1>
    <Formatting>Oksana Pashkovska</Formatting>

    </div>
  );

  export default Contacts;
