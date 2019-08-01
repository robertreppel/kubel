import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

export const Word = (props) => {
  const dragStateFromLocalStorage = JSON.parse(localStorage.getItem(props.word.id))
  const [dragState, setDragState] = useState(dragStateFromLocalStorage || {})

  const color = dragState.color ? dragState.color : "white"
  const [backgroundColor, setBackgroundColor] = useState(color)

  const onDrag = (e, position) => {
    const { x, y } = position;
    setDragState({ ...dragState, posX: x, posY: y, word: props })
  }

  const onStop = (e, position) => {
    window.ga('send', 'event', 'Phrase', 'PhraseMoved');
  }

  useEffect(() => {
    const dragStateJson = JSON.stringify(dragState);
    localStorage.setItem(props.word.id, dragStateJson);
  }, [dragState, props.word.id]);

  const dragHandlers = { onDrag: onDrag, onStop: onStop };

  const xPos = dragState.posX ? dragState.posX : 0
  const yPos = dragState.posY ? dragState.posY : 0

  const colorizeWithColorOfBoundedContext = () => {
    if (props.currentContext) {
      setBackgroundColor(props.currentContext.color);
      setDragState({ ...dragState, color: props.currentContext.color });
      window.ga('send', 'event', 'Phrase', 'PhraseAddedToContext');
    }
  };
  
  const resetToDefaultColor = () => {
    const defaultColor = "white";
    setBackgroundColor(defaultColor);
    setDragState({ ...dragState, color: defaultColor.color });
    window.ga('send', 'event', 'Phrase', 'PhraseRemovedFromContext');
  };

  return (<Draggable
    {...dragHandlers}
    position={{ x: xPos, y: yPos }}
  >
    <div
      className="vocabulary"
      style={{ backgroundColor: backgroundColor, color: "black", padding: "3px" }}
      onDoubleClick={resetToDefaultColor}

      onClick={colorizeWithColorOfBoundedContext
      }
    >{props.word.text}</div>
  </Draggable>);
};
