import React from 'react'
import ReactDOM from 'react-dom/client';

const jsxHeading = (<h1>Namaste React in JSX - </h1>);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById('root'));

const TitleComponent = () => {
    return (<div className='title'> Hello React !! </div>)
}

//Component Composition -> WHen a component is within another component.
const HeadingComponent = () => {
    return (<div id="container">
        {2+3}
        <h1>Namaste React from Functional Component</h1>
        <TitleComponent/>
        {TitleComponent()}
    </div>)
}
root.render(<HeadingComponent />);