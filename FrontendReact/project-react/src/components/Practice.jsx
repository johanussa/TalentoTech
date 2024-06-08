import React from "react";

const data = {
  name: "Johan",
  lastName: "Ussa",
  cellPhone: "3212564433",
  age: 25,
};

const Practice = () => {
  return (
    <div>
      <hr />
      <p>Este es mi primer componente</p>
      <h2>Temas de React</h2>
      <ul style={{ width: "200px", margin: "0 auto" }}>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados - Hooks</li>
        <li>Comunicación</li>
      </ul>
      <hr />
      <h2>Datos del estudiante</h2>
      <p>Nombre: {data.name}</p>
      <p>Apellido: {data.lastName}</p>
      <p>Celular: {data.cellPhone}</p>
      <p>Edad: {data.age}</p>
    </div>
  );
};

export default Practice;
