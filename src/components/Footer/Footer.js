import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({count, id, onClickDeleteAll, onClickFilter, filters}) =>  (
  <footer className ={styles.footer}>
    <div className={styles.left}>{count} tasks left </div>
    <div className={styles.filtersWrap}>
      {filters.map(filter => {
        return (
          <button
            key={filter.value}
            className={classnames({
                    [styles.item]: true,
                    [styles.itemActive]: filter.isActive,
                  })}
                  onClick={()=>onClickFilter(filter.value)}>
        {filter.value}
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
    filters: PropTypes.array.isRequired
};

export default Footer;
