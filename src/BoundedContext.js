import React from 'react';
export const BoundedContext = (props) => {
  return (<span className="context" onClick={() => { props.setCurrentContext(props.context); }} style={{ backgroundColor: props.context.color }}>
    {props.currentContext && props.currentContext.id === props.context.id ? "*" : ""}{props.context.name}
  </span>);
};
