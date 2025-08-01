import React from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <h1>Welcome to JSX Fix Challenge</h1>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
