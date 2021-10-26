import React from 'react';
import Search from './components/Search';
import initicalDetails from './data/initicalDetails';

function App() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initicalDetails} />
    </div>
  );
}

export default App;
