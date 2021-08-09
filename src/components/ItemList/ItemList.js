import React from 'react';
import Item from '../Item/Item';

const Itemlist = ({todoItem}) => (<ul>
      <li><Item todoItem={todoItem} /></li>
      <li><Item todoItem={'Add props'} /></li>
      <li><Item todoItem={'Finish all tasks'} /></li>
  </ul>);

  export default Itemlist;
