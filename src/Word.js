import React, { useState } from 'react';
import Draggable from 'react-draggable';
export const Word = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("white")
  const [dragState, setDragState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  });
  function onStart() {
    setDragState({ activeDrags: ++dragState.activeDrags });
  }
  function onStop() {
    setDragState({ activeDrags: --dragState.activeDrags });
  }
  const dragHandlers = { onStart: onStart, onStop: onStop };
  return (<Draggable {...dragHandlers}>
    <div
      style={{ backgroundColor: backgroundColor }}
      onClick={() => {
        if (props.currentContext) {
          setBackgroundColor(props.currentContext.color)
        }
      }
      }
      className="box"
    >{props.word.text}</div>
  </Draggable>);
};
