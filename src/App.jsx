import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React, { useState } from 'react';

const App = () => {
  const greetingMessage = 'Bienvenidos a mi tienda!';
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={greetingMessage} />
    </div>
  );
};



export default App;