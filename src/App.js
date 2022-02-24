import './App.css';
import React from 'react';
import HeaderBlock from './components/HeaderBlock/header';



const App = () => {
  return (
    <React.Fragment>
      <HeaderBlock
        descr='This is new description!'
      />

      <HeaderBlock
        title='My first Title'
        hideBackground
      />
    </React.Fragment>
  )
};

export default App;
