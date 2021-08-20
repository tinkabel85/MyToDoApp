import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

class Item extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  render() {
    const {value, isDone, id, onClickDone, onClickDelete} = this.props;

    return (<div className={styles.wrap}>
          <Checkbox
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
              onClick={()=>onClickDone(id)}
            />
          <span className={
            classnames({
                [styles.item]: true,
                [styles.done]: isDone
              })
            }>
              {value}
          </span>
            <DeleteOutlinedIcon className={styles.btn} color="disabled"
              onClick={()=> onClickDelete(id)} />
        </div>);
  }
}
// const Item = ({value, isDone, id, onClickDone, onClickDelete}) => (
//   <div className={styles.wrap}>
//       <Checkbox
//           color="default"
//           inputProps={{ 'aria-label': 'checkbox with default color' }}
//           onClick={()=>onClickDone(id)}
//         />
//   <span className={
//     classnames({
//         [styles.item]: true,
//         [styles.done]: isDone
//       })
//     }>
//       {value}
//   </span>
//          <DeleteOutlinedIcon className={styles.btn} color="disabled"
//          onClick={()=> onClickDelete(id)} />
//
//  </div>
// );

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}
export default Item;
