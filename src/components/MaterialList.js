import React from 'react';

function MaterialList({ materials, deleteMaterial }) {
  return (
    <ul>
      {materials.map(material => (
        <li key={material.id}>
          {material.name} - {material.quantity}
          <button onClick={() => deleteMaterial(material.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default MaterialList;
