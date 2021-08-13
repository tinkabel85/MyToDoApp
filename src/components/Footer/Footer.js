import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';

const Footer = ({count, btn}) =>  (
  <footer className ={styles.footer}>
    <div className={styles.left}>{count} items left </div>
    <div className={styles.btnWrap}>
      {btn.map(item => {
        return (
          <button
            key={item.value}
            className={classnames({
                    [styles.item]: true,
                    [styles.itemActive]: item.isActive,
                  })}>
        {item.value}
        </button>
      );
      })}
  </div>
      <button className={styles.clear}>Clear completed</button>
</footer>
  );

export default Footer;
