import React, { useState } from 'react';
import './App.css';
import { Word } from './Word';
import { ImportWords } from './ImportWords';
import { BoundedContextList } from './BoundedContextList';

const App = () => {
  const [isImportWordsDialogVisible, setIsImportWordsDialogVisible] = useState(true)
  const [isContextListVisible, setIsContextListVisible] = useState(false)
  const [words, setWords] = useState([])
  const [currentContext, setCurrentContext] = useState(null)

  return (
    <div className="page">
      <h1>Kubel</h1>
      <BoundedContextList
        currentContext={currentContext}
        setCurrentContext={setCurrentContext}
        isContextListVisible={isContextListVisible}
        />
      {words.map(((word, index) => {
        return (<Word key={index} word={word} currentContext={currentContext}/>)
      }))}
      <ImportWords
        isImportWordsDialogVisible={isImportWordsDialogVisible}
        setIsImportWordsDialogVisible={setIsImportWordsDialogVisible}
        setWords={setWords}
        setIsContextListVisible={setIsContextListVisible}
      />
    </div>
  );
}

export default App;

