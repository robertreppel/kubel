import React, { useState } from 'react';
import './App.css';
import { Word } from './Word';
import { ImportWords } from './ImportWords';
import uuidv4 from 'uuid/v4'

const App = () => {
  const [isImportWordsDialogVisible, setIsImportWordsDialogVisible] = useState(false)
  const [words, setWords] = useState([])

  return (
    <div>
      <h1>Kubel</h1>
      <BoundedContextList />
      <div>
        <button onClick={() => { setIsImportWordsDialogVisible(!isImportWordsDialogVisible) }}>Add Words</button>
      </div>
      {words.map((word => {
        return (<Word word={word} />)
      }))}
      <ImportWords
        isImportWordsDialogVisible={isImportWordsDialogVisible}
        setIsImportWordsDialogVisible={setIsImportWordsDialogVisible}
        setWords={setWords}
      />
    </div>
  );
}

export default App;


const BoundedContextList = (props) => {
  const [contexts, setContexts] = useState([])


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  return (
    <div>
      <div>
        {contexts.map(context => {
          return (<BoundedContext {...context} />)
        })
        }
        <span><input id="newContextName"></input></span>
        <span>
          <button
            onClick={() => {
              const contextNameInput = document.getElementById("newContextName");
              const newContext = {
                id: uuidv4(),
                name: contextNameInput.value,
                color: getRandomColor()
              }
              contextNameInput.value = ""
              setContexts([...contexts, newContext])
            }}
          >New Context</button>
        </span>
      </div>
    </div>
  )
}

const BoundedContext = (props) => {
  return (
    <span>
      <span
        className="context"
        // onClick={() => { setIsEditing(!isEditing) }}
        style={{ backgroundColor: props.color }}
      >
        {props.name}
      </span>
    </span>)
}