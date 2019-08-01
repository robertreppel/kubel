import React from 'react';
import uuidv4 from 'uuid/v4';
import './ImportWords.css';

export const ImportWords = (props) => {
    window.ga('set', 'page', '/source-text-input-page');
    window.ga('send', 'pageview');

    const generateVocabulary = () => {
        const text = document.getElementById("sourceText").value;
        let importedLines = new Map();
        text.split("\n").map((word) => {
            const myRegexp = /^(\d*):(.*)/;
            const match = myRegexp.exec(word);
            if (match) {
                const lineNo = match[1]
                const text = match[2]
                addPhraseToVocabulary(text, importedLines, lineNo);
            } else {
                addPhraseToVocabulary(word, importedLines);
            }

            return null;
        });
        if(importedLines.size > 0) {
            let words = [];
            importedLines.forEach((v, k) => {
                words.push({ id: uuidv4(), text: k, count: v });
            });
            props.setWords(words);
            props.setIsImportWordsDialogVisible(false);
            props.setIsContextListVisible(true)
            window.ga('send', 'event', 'Vocabulary', 'VocabularyGenerated');
        }
    }

    function addPhraseToVocabulary(text, importedLines) {
        const trimmedText = text.trim()
        if (trimmedText.length  > 0) {
            if (importedLines.has(text)) {
                importedLines.set([]);
            }
            else {
                importedLines.set(text, []);
            }
        }
    }

    if (props.isImportWordsDialogVisible) {
        return (
            <div className="importWordsContentArea">
                <div><h2>Getting Started: <a href="https://github.com/robertreppel/kubel" rel="noopener noreferrer" target="_blank">Usage Example/Walk-Through</a></h2></div>
                <div>
                    <h4>Paste text here</h4>
                    <p>Every line of text will be a phrase which can be grouped with other phrases to determine system boundaries based on Ubiquitous Language.</p>
                </div>
                <div>
                    <textarea id="sourceText" style={{ width: "90vw" }} rows="20"></textarea>
                </div>
                <div>
                    <button className="button commandBtn" onClick={generateVocabulary}>Generate Vocabulary</button>
                </div>
            </div>);
    }
    else {
        return (<React.Fragment />);
    }
};



