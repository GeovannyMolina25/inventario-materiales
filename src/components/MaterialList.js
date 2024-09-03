import React from 'react';

function MaterialList({ materials, deleteMaterial }) {
  return (
    //listar y eliminar materiales
    <ul>
      {materials.map(material => (
        <li key={material.id}>
          {material.name} - {material.quantity}
          <button onClick={() => deleteMaterial(material.id)}>Eliminar material</button>
        </li>
      ))}
    </ul>
  );
}

export default MaterialList;
