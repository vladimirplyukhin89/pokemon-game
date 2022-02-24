import './App.css';
import React from 'react';
import Header from './components/HeaderBlock/Header';
import Layout from './components/LayoutBlock/Layout';
import Footer from './components/FooterBlock/Footer';
import backgroundImage from './assets/bg3.jpg';



const App = () => {
  return (
    <React.Fragment>
      <Header
        title='My game'
        desc='This is new description!'
      />
      <Layout
        title='Pokemon Game'
        urlBg
        colorBg
      >
        <p>This my game</p>
        <p>I like this game</p>
      </Layout>
      <Layout
        title
        colorBg='#e2e2e2'
      >
        <p>It is what it is</p>
        <p>Работаем</p>
      </Layout>
      <Layout
        title
        urlBg
        colorBg
      >
        <p>Что такое Lorem Ipsum?</p>
        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
        <img src={backgroundImage} alt='Second background' />
      </Layout>
      <Footer />

    </React.Fragment>
  )
};

export default App;
