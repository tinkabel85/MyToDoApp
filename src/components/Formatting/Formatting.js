import React from 'react';

const HOC = Component => (props)=>{
  return (
    <div>
        <Component {...props}>
              {props.children.toUpperCase()}
          </Component>
      </div>
    )
  };

const Name = (props)=> (
  <div>
  {props.children}
  </div>
);
const Formatting = HOC(Name);

export default Formatting;
