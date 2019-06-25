import React, { useState, useEffect } from 'react';
import './App.css';
import { Word } from './Word';
import { ImportWords } from './ImportWords';
import { BoundedContextList } from './BoundedContextList';

const App = () => {
  const [currentContext, setCurrentContext] = useState(null)

  const wordsFromLocalStorage = JSON.parse(localStorage.getItem("words"))
  const [words, setWords] = useState(wordsFromLocalStorage || [])

  const [isImportWordsDialogVisible, setIsImportWordsDialogVisible] = useState(wordsFromLocalStorage && wordsFromLocalStorage.length > 0 ? false : true)
  const [isContextListVisible, setIsContextListVisible] = useState(wordsFromLocalStorage && wordsFromLocalStorage.length > 0 ? true : false)

  useEffect(() => {
    const wordsJson = JSON.stringify(words);
    localStorage.setItem('words', wordsJson);
  }, [words]);

  return (
    <div className="page">
      <div className="App-header">
        <div className="menuItem"><h2>Kubel</h2></div>
        <div className="menuItem">
          <button onClick={() => {
            const retVal = window.confirm("Creating a new Kubel will delete everything here.");
            if (retVal == true) {
              localStorage.clear()
              window.location.reload()
            } 
          }}>
            New
            </button>
        </div>
      </div>
      <hr />
      <BoundedContextList
        currentContext={currentContext}
        setCurrentContext={setCurrentContext}
        isContextListVisible={isContextListVisible}
      />
      {words.map(((word) => {
        return (<Word key={word.id} word={word} currentContext={currentContext} />)
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

