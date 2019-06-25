import React, { useState, useEffect } from 'react';
import './App.css';
import { Word } from './Word';
import { ImportWords } from './ImportWords';
import { BoundedContextList } from './BoundedContextList';

const App = () => {
  const [currentContext, setCurrentContext] = useState(null)
  
  const wordsFromLocalStorage = JSON.parse(localStorage.getItem("words"))
  const [words, setWords] = useState(wordsFromLocalStorage || [])
  
  const [isImportWordsDialogVisible, setIsImportWordsDialogVisible] = useState(wordsFromLocalStorage.length > 0 ? false : true)
  const [isContextListVisible, setIsContextListVisible] = useState(wordsFromLocalStorage.length > 0 ? true : false)
  
  useEffect(() => {
    const wordJson =  JSON.stringify(words);
    localStorage.setItem('words', wordJson);
  }, [words]);


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

