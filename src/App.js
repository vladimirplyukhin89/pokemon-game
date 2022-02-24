import './App.css';
import React from 'react';
import Header from './components/HeaderBlock/Header';
import Layout from './components/LayoutBlock/layout';
import Footer from './components/FooterBlock/Footer';



const App = () => {
  return (
    <React.Fragment>
      <Header
        title='My game'
        desc='This is new description!'
      />
      <Layout
        title='Pokemon Game'
        desc='This pokemon card game'
        urlBg
        colorBg
      />
      <Layout
        title
        desc
        colorBg
      />
      <Layout
        title
        desc='It is what it is'
        urlBg
        colorBg
      />
      <Footer />

    </React.Fragment>
  )
};

export default App;
