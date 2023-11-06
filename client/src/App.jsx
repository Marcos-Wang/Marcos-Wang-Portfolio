import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Body from './components/Body';

function App() {


  return (
    <>
      <Header />
      <Navbar />
      <Body />
    </>
  )
}

export default App