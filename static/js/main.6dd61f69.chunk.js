(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),l=(n(17),n(2)),i=(n(18),n(4)),s=n(7),u=n.n(s),m=function(e){var t=JSON.parse(localStorage.getItem(e.word.id)),n=Object(a.useState)(t||{}),o=Object(l.a)(n,2),c=o[0],s=o[1],m=c.color?c.color:"white",d=Object(a.useState)(m),g=Object(l.a)(d,2),f=g[0],p=g[1];Object(a.useEffect)(function(){var t=JSON.stringify(c);localStorage.setItem(e.word.id,t)},[c,e.word.id]);var b={onDrag:function(t,n){var a=n.x,r=n.y;s(Object(i.a)({},c,{posX:a,posY:r,word:e}))}},E=c.posX?c.posX:0,x=c.posY?c.posY:0;return r.a.createElement(u.a,Object.assign({},b,{position:{x:E,y:x}}),r.a.createElement("div",{style:{backgroundColor:f},onDoubleClick:function(){p("white"),s(Object(i.a)({},c,{color:"white".color}))},onClick:function(){e.currentContext&&(p(e.currentContext.color),s(Object(i.a)({},c,{color:e.currentContext.color})))},className:"box"},e.word.text))},d=n(3),g=n.n(d),f=(n(21),function(e){return e.isImportWordsDialogVisible?r.a.createElement("div",{className:"importWordsContentArea"},r.a.createElement("div",null,r.a.createElement("h4",null,"Paste text here"),r.a.createElement("p",null,"Every line of text will be a phrase which can be grouped with other phrases to determine system boundaries based on Ubiquitous Language.")),r.a.createElement("div",null,r.a.createElement("textarea",{id:"importedWords",style:{width:"90vw"},rows:"20"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var t=document.getElementById("importedWords").value,n=new Map;t.split("\n").map(function(e){var t=/^(\d*):(.*)/.exec(e);return t?(t[1],p(t[2],n)):p(e,n),null});var a=[];n.forEach(function(e,t){a.push({id:g()(),text:t,count:e})}),e.setWords(a),e.setIsImportWordsDialogVisible(!1),e.setIsContextListVisible(!0)}},"Generate Vocabulary"))):r.a.createElement(r.a.Fragment,null)});function p(e,t){e.trim().length>0&&(t.has(e)?t.set([]):t.set(e,[]))}var b=n(10),E=function(e){return e.currentContext&&e.currentContext.id===e.context.id?r.a.createElement("span",{className:"currentContext",onClick:x(e),style:{backgroundColor:e.context.color}},e.context.name):r.a.createElement("span",{className:"context",onClick:x(e),style:{backgroundColor:e.context.color}},e.context.name)};function x(e){return function(){e.currentContext&&e.context.id===e.currentContext.id?e.setCurrentContext(null):e.setCurrentContext(e.context)}}var v=function(e){function t(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{marginRight:"10px"}},r.a.createElement("input",{id:"newContextName"})),r.a.createElement("span",null,r.a.createElement("button",{onClick:function(){var n=document.getElementById("newContextName"),a={id:g()(),name:n.value,color:t()};n.value="",e.createNewBoundedContext(a)}},"New")))},w=function(e){var t=JSON.parse(localStorage.getItem("contexts")),n=Object(a.useState)(t||[]),o=Object(l.a)(n,2),c=o[0],i=o[1];return Object(a.useEffect)(function(){var e=JSON.stringify(c);localStorage.setItem("contexts",e)},[c]),e.isContextListVisible?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("h4",{style:{display:"inline-block",marginRight:"10px"}},"Bounded Contexts")),r.a.createElement(v,{createNewBoundedContext:function(e){i([].concat(Object(b.a)(c),[e]))}})),r.a.createElement("div",{className:"contextList"},c.map(function(t){return r.a.createElement(E,{key:t.id,setCurrentContext:e.setCurrentContext,currentContext:e.currentContext,context:t})})),r.a.createElement("hr",null)):r.a.createElement(r.a.Fragment,null)},C=n(9),h=function(e){var t=Object(a.useCallback)(function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(){var e=t.result;JSON.parse(e).forEach(function(e){localStorage.setItem(e.key,JSON.stringify(e.item))}),window.location.reload()},e.forEach(function(e){return t.readAsBinaryString(e)})},[]),n=Object(C.a)({onDrop:t}),o=n.getRootProps,c=n.getInputProps;return e.isFileImportVisible?r.a.createElement("div",Object.assign({className:"importFileDropzone"},o()),r.a.createElement("input",c()),r.a.createElement("p",null,"Drag 'n' drop a file here, or click to select files")):r.a.createElement(r.a.Fragment,null)},O=(n(24),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"logoText"},r.a.createElement("h2",null,"Kubel")),r.a.createElement("div",{className:"menuItem"},r.a.createElement("button",{className:"menu",onClick:function(){!0===window.confirm("Creating a new Kubel will delete everything here.")&&(localStorage.clear(),window.location.reload())}},"New")),r.a.createElement("div",{className:"menuItem"},r.a.createElement("button",{className:"menu",onClick:e.toggleImportFileDragAreaVisible},"Import")),r.a.createElement("div",{className:"menuItem"},r.a.createElement("button",{className:"menu",onClick:function(){var e=[];for(var t in localStorage){var n=JSON.parse(localStorage.getItem(t));e.push({key:t,item:n})}var a=window.prompt("Export As:");a||(a="Untitled"),a.includes(".")||(a="".concat(a,".json")),function(e,t,n){var a=document.createElement("a"),r=new Blob([e],{type:n});a.href=URL.createObjectURL(r),a.download=t,a.click()}(JSON.stringify(e),a,"text/json")}},"Export")))}),N=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],o=t[1],c=JSON.parse(localStorage.getItem("words")),i=Object(a.useState)(c||[]),s=Object(l.a)(i,2),u=s[0],d=s[1],g=Object(a.useState)(!(c&&c.length>0)),p=Object(l.a)(g,2),b=p[0],E=p[1],x=Object(a.useState)(!!(c&&c.length>0)),v=Object(l.a)(x,2),C=v[0],N=v[1],j=Object(a.useState)(!1),S=Object(l.a)(j,2),y=S[0],I=S[1];Object(a.useEffect)(function(){var e=JSON.stringify(u);localStorage.setItem("words",e)},[u]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"App-header"},r.a.createElement(O,{toggleImportFileDragAreaVisible:function(){I(!y)}})),r.a.createElement("div",{className:"content"},r.a.createElement(h,{isFileImportVisible:y}),r.a.createElement(w,{currentContext:n,setCurrentContext:o,isContextListVisible:C}),u.map(function(e){return r.a.createElement(m,{key:e.id,word:e,currentContext:n})}),r.a.createElement(f,{isImportWordsDialogVisible:b,setIsImportWordsDialogVisible:E,setWords:d,setIsContextListVisible:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.6dd61f69.chunk.js.map