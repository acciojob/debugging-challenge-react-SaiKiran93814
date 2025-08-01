import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit" className="submit-btn">Greet Me</button>
    </form>
  );
};

export default Form;
