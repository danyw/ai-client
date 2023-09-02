import React from 'react';
import Sidebar from './components/Sidebar';
import GPT4 from './features/GPT4/GPT4';
import './index.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <GPT4 />
      </main>
    </div>
  );
}

export default App;
