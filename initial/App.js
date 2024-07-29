import React from 'react'
import ReactDOM from 'react-dom/client';

const jsxHeading = (<h1>Namaste React in JSX - </h1>);
console.log(typeof jsxHeading);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);