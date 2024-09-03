import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function MaterialForm({ addMaterial }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMaterial = { id: uuidv4(), name, quantity };
    addMaterial(newMaterial);
    setName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Material Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Add Material</button>
    </form>
  );
}

export default MaterialForm;
