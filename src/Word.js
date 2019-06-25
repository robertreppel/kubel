import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

export const Word = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("white")

  const dragStateFromLocalStorage = JSON.parse(localStorage.getItem(props.word.id))
  const [dragState, setDragState] = useState(dragStateFromLocalStorage || {})

  const onDrag = (e, position) => {
    const { x, y } = position;
    setDragState({ ...dragState, posX: x, posY: y, word: props })
  }

  useEffect(() => {
    const dragStateJson = JSON.stringify(dragState);
    localStorage.setItem(props.word.id, dragStateJson);
  }, [dragState, props.word.id]);

  const dragHandlers = { onDrag: onDrag };

  const xPos = dragState.posX ? dragState.posX : 0
  const yPos = dragState.posY ? dragState.posY : 0
  return (<Draggable
    {...dragHandlers}
    position={{ x: xPos, y: yPos }}
  >
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
