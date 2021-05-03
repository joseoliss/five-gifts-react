import React, { StrictMode, useState } from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs'

function App() {
  const [keyword, setKeyword] = useState('')

  return (
    <StrictMode className="App">
      <section className="App-content">
        <h1>Five gifts of...</h1>
        <input type="text" onChange={e => setKeyword(e.target.value)} placeholder="Search your gifts" />
        <ListOfGifs keyword={keyword} />
      </section>

    </StrictMode >
  );
}

export default App;
