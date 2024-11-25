import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Login from'./components/login'
import Lista from './components/listadoinicial/lista';
import Dash from './components/dashboard/dash';



function App() {
  return (
    <div>
      <Lista /> 
    </div>
  );
}

export default App;
