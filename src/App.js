import React, { useState } from 'react';
import './App.css';
import { Word } from './Word';
import { ImportWords } from './ImportWords';
import { BoundedContextList } from './BoundedContextList';

const App = () => {
  const [isImportWordsDialogVisible, setIsImportWordsDialogVisible] = useState(false)
  const [words, setWords] = useState([])
  const [currentContext, setCurrentContext] = useState(null)

  return (
    <div>
      <h1>Kubel</h1>
      <div>{currentContext ? `Current context: ${currentContext.name}` : <React.Fragment />}</div>
      <BoundedContextList
        currentContext={currentContext}
        setCurrentContext={setCurrentContext}
      />
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

