(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),l=(n(17),n(2)),i=(n(18),n(5)),s=n(7),u=n.n(s),m=function(e){var t=JSON.parse(localStorage.getItem(e.word.id)),n=Object(a.useState)(t||{}),r=Object(l.a)(n,2),c=r[0],s=r[1],m=c.color?c.color:"white",d=Object(a.useState)(m),b=Object(l.a)(d,2),f=b[0],p=b[1];Object(a.useEffect)(function(){var t=JSON.stringify(c);localStorage.setItem(e.word.id,t)},[c,e.word.id]);var g={onDrag:function(t,n){var a=n.x,o=n.y;s(Object(i.a)({},c,{posX:a,posY:o,word:e}))}},E=c.posX?c.posX:0,x=c.posY?c.posY:0;return o.a.createElement(u.a,Object.assign({},g,{position:{x:E,y:x}}),o.a.createElement("div",{style:{backgroundColor:f},onClick:function(){e.currentContext&&(p(e.currentContext.color),s(Object(i.a)({},c,{color:e.currentContext.color})))},className:"box"},e.word.text))},d=n(3),b=n.n(d),f=function(e){return e.isImportWordsDialogVisible?o.a.createElement("div",null,o.a.createElement("h4",null,"Paste text here"),o.a.createElement("p",null,"Every line of text will be a phrase which can be grouped with other phrases to determine system boundaries based on Ubiquitous Language."),o.a.createElement("div",null,o.a.createElement("textarea",{id:"importedWords",rows:20,cols:50})),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){var t=document.getElementById("importedWords").value,n=new Map;t.split("\n").map(function(e){return e&&(n.has(e)?n.set(e,n.get(e)+1):n.set(e,1)),null});var a=[];n.forEach(function(e,t){a.push({id:b()(),text:t,count:e})}),e.setWords(a),e.setIsImportWordsDialogVisible(!1),e.setIsContextListVisible(!0)}},"Generate Vocabulary"))):o.a.createElement(o.a.Fragment,null)},p=n(10),g=function(e){return e.currentContext&&e.currentContext.id===e.context.id?o.a.createElement("span",{className:"currentContext",onClick:E(e),style:{backgroundColor:e.context.color}},e.context.name):o.a.createElement("span",{className:"context",onClick:E(e),style:{backgroundColor:e.context.color}},e.context.name)};function E(e){return function(){e.currentContext&&e.context.id===e.currentContext.id?e.setCurrentContext(null):e.setCurrentContext(e.context)}}var x=function(e){var t=JSON.parse(localStorage.getItem("contexts")),n=Object(a.useState)(t||[]),r=Object(l.a)(n,2),c=r[0],i=r[1];function s(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}return Object(a.useEffect)(function(){var e=JSON.stringify(c);localStorage.setItem("contexts",e)},[c]),e.isContextListVisible?o.a.createElement("div",null,o.a.createElement("div",{className:"contextList"},c.map(function(t){return o.a.createElement(g,{key:t.id,setCurrentContext:e.setCurrentContext,currentContext:e.currentContext,context:t})}),o.a.createElement("span",null,o.a.createElement("input",{id:"newContextName"})),o.a.createElement("span",null,o.a.createElement("button",{onClick:function(){var e=document.getElementById("newContextName"),t={id:b()(),name:e.value,color:s()};e.value="",i([].concat(Object(p.a)(c),[t]))}},"New Context"))),o.a.createElement("hr",null)):o.a.createElement(o.a.Fragment,null)},v=n(9),w=function(e){var t=Object(a.useCallback)(function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(){var e=t.result;JSON.parse(e).forEach(function(e){localStorage.setItem(e.key,JSON.stringify(e.item))}),window.location.reload()},e.forEach(function(e){return t.readAsBinaryString(e)})},[]),n=Object(v.a)({onDrop:t}),r=n.getRootProps,c=n.getInputProps;return e.isFileImportVisible?o.a.createElement("div",Object.assign({className:"importFileDropzone"},r()),o.a.createElement("input",c()),o.a.createElement("p",null,"Drag 'n' drop a file here, or click to select files")):o.a.createElement(o.a.Fragment,null)},C=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],c=JSON.parse(localStorage.getItem("words")),i=Object(a.useState)(c||[]),s=Object(l.a)(i,2),u=s[0],d=s[1],b=Object(a.useState)(!(c&&c.length>0)),p=Object(l.a)(b,2),g=p[0],E=p[1],v=Object(a.useState)(!!(c&&c.length>0)),C=Object(l.a)(v,2),O=C[0],h=C[1],j=Object(a.useState)(!1),S=Object(l.a)(j,2),I=S[0],N=S[1];Object(a.useEffect)(function(){var e=JSON.stringify(u);localStorage.setItem("words",e)},[u]);return o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"App-header"},o.a.createElement("div",{className:"menuItem"},o.a.createElement("h2",null,"Kubel")),o.a.createElement("div",{className:"menuItem"},o.a.createElement("button",{onClick:function(){!0===window.confirm("Creating a new Kubel will delete everything here.")&&(localStorage.clear(),window.location.reload())}},"New")),o.a.createElement("div",{className:"menuItem"},o.a.createElement("button",{onClick:function(){return N(!I)}},"Import")),o.a.createElement("div",{className:"menuItem"},o.a.createElement("button",{onClick:function(){var e=[];for(var t in localStorage){var n=JSON.parse(localStorage.getItem(t));e.push({key:t,item:n})}var a=window.prompt("Export As:");a||(a="Untitled"),a.includes(".")||(a="".concat(a,".json")),function(e,t,n){var a=document.createElement("a"),o=new Blob([e],{type:n});a.href=URL.createObjectURL(o),a.download=t,a.click()}(JSON.stringify(e),a,"text/json")}},"Export"))),o.a.createElement("hr",null),o.a.createElement(w,{isFileImportVisible:I}),o.a.createElement(x,{currentContext:n,setCurrentContext:r,isContextListVisible:O}),u.map(function(e){return o.a.createElement(m,{key:e.id,word:e,currentContext:n})}),o.a.createElement(f,{isImportWordsDialogVisible:g,setIsImportWordsDialogVisible:E,setWords:d,setIsContextListVisible:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.6f144342.chunk.js.map