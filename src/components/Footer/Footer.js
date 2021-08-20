import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({count, onClickFooter, btn}) =>  (
  <footer className ={styles.footer} onClick={onClickFooter}>
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

// Footer.defaultProps = {
//     count: 0
// };

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;
