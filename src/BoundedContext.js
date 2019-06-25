import React from 'react';
export const BoundedContext = (props) => {
  if (props.currentContext && props.currentContext.id === props.context.id) {
    return (
      <span className="currentContext" onClick={toggleIsCurrentContext(props)} style={{ backgroundColor: props.context.color }}>
        {props.context.name}
      </span>
    )
  }
  return (
    <span className="context" onClick={toggleIsCurrentContext(props)} style={{ backgroundColor: props.context.color }}>
      {props.context.name}
    </span>
  );
};

function toggleIsCurrentContext(props) {
  return () => {
    if (props.currentContext && props.context.id === props.currentContext.id) {
      props.setCurrentContext(null);
    } else {
      props.setCurrentContext(props.context);
    }
  };
}

