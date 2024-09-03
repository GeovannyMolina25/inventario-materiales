import React, { useState } from 'react';
import MaterialForm from './components/MaterialForm';
import MaterialList from './components/MaterialList';

function App() {
  const [materials, setMaterials] = useState([]);

  const addMaterial = (material) => {
    setMaterials([...materials, material]);
  };

  const deleteMaterial = (id) => {
    setMaterials(materials.filter(material => material.id !== id));
  };

  return (
    <div>
      <h1>Material Repository</h1>
      <MaterialForm addMaterial={addMaterial} />
      <MaterialList materials={materials} deleteMaterial={deleteMaterial} />
    </div>
  );
}

export default App;
