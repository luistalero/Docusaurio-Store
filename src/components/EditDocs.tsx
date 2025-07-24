import React from 'react';

export default function EditarDocumento({ ruta }) {
  const handleEditar = () => {
    window.open(`/editor?ruta=${ruta}`, '_blank');
  };

  return (
    <button onClick={handleEditar} style={{
      padding: '0.5rem 1rem',
      backgroundColor: '#f25c05',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>
      ✏️ Editar este documento
    </button>
  );
}
