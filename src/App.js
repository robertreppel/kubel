import React, { useState } from 'react';
import './App.css';
import { Word } from './Word';
import { ImportWords } from './ImportWords';

const App = () => {
  const [isImportWordsDialogVisible, setIsImportWordsDialogVisible] = useState(false)
  const [words, setWords] = useState([])

  return (
    <div>
      <h1>Kubelmaker</h1>
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
