import './App.css';
import { useState } from 'react';
import Header from './components/Header'; 
import { Tasks } from './components/Tasks';



function App() {

 
  return (
    <div >
     <Header  title="Task Tracker"> </Header>
    <Tasks  />
    </div>
  );
}

export default App;
