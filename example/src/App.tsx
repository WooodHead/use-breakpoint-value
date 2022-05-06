import React from 'react';
import useBreakpointValue from 'use-breakpoint-value';
import './App.css';

function App() {
  const responsiveValue = useBreakpointValue({
    xs: 'xs-value',
    sm: 'sm-value',
    md: 'md-value',
    lg: 'lg-value',
    xl: 'xl-value',
    xxl: 'xxl-value',
  });
  console.log('responsiveValue', responsiveValue);

  const responsiveColor = useBreakpointValue({
    xs: 'red',
    sm: 'pink',
    md: 'yellow',
    lg: 'green',
    xl: 'blue',
    xxl: 'black',
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className=''>
          responsiveValue: {responsiveValue}
        </h1>
        <div style={{
          width: '200px', height: '50px',
          background: responsiveColor
        }}>

        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
