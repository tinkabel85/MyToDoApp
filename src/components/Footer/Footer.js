import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({count, id, onClickDeleteAll, btn}) =>  (
  <footer className ={styles.footer}>
    <div className={styles.left}>{count} tasks left </div>
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
      <button className={styles.clear} onClick={onClickDeleteAll}>Clear completed
      </button>
</footer>
  );

Footer.propTypes = {
    count: PropTypes.number.isRequired,
    onClickFooter: PropTypes.func,
    btn: PropTypes.array.isRequired
};

export default Footer;
