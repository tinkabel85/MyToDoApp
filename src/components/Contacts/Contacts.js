import React from 'react';
import styles from './Contacts.module.css';
import insta from './img/insta.svg';
import whatsapp from './img/whatsapp.svg';
import telegram from './img/telegram.svg';
import gmail from './img/gmail.svg';

const Contacts= () => (
    <div className={styles.wrap}>
      <div className= {styles.contacts}>
            <div className = {styles.contacts__mail}>
              <a className={styles.link} href='mailto:opashkovska85@gmail.com'>
                <img src={gmail} alt='mail'/>
              </a>
            </div>

              <div className = {styles.contacts__telegram}>
              <a className={styles.link} href='tg://resolve?domain=tinkabel999'>
                <img src={telegram} alt='telegram'/>
              </a>
            </div>

            <div className = {styles.contacts__insta}>
            <a className={styles.link} href='https://www.instagram.com/oksana_pashkovska/' target='_blank' rel='noreferrer'>
              <img src= {insta} alt='instagram'/>
            </a>
          </div>

          <div className = {styles.contacts__whatsApp}>
          <a className={styles.link} href='https://wa.me/+4915206112644' target='_blank' rel='noreferrer'>
            <img src={whatsapp} alt='WhatsApp'/>
          </a>
          </div>
      </div>
    </div>

  );

  export default Contacts;
