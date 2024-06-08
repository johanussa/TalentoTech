import React, { useState } from "react";

const books = [
  "Harry Potter y la piedra filosofal",
  "Harry Potter y la cámara secreta",
  "Harry Potter y el prisionero de Azkaban",
  "Harry Potter y el cáliz de fuego",
  "Harry Potter y la Orden del Fénix",
  "Harry Potter y el misterio del príncipe",
  "Harry Potter y las Reliquias de la Muerte",
];

const input = document.getElementById("inputText");

const Books = () => {
  const [listBooks, setListBooks] = useState(books);
  const [nameBook, setNameBook] = useState("");

  const handleClickBtn = () => {
    if (nameBook) {
      setListBooks([...listBooks, nameBook]);
      setNameBook("");
    } else {
      input.focus();
      alert("Debe ingresar el valor en el input para editar");
    }
  };

  return (
    <div>
      <div
        className="input-group mb-3"
        style={{ width: "450px", margin: "0 auto" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese titulo libro"
          id="inputText"
          value={nameBook}
          onChange={(newText) => setNameBook(newText.target.value)}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={handleClickBtn}
        >
          Agregar
        </button>
      </div>
      <ShowList
        listBooks={listBooks}
        setListBooks={setListBooks}
        nameBook={nameBook}
        setNameBook={setNameBook}
      />
    </div>
  );
};

const ShowList = ({ listBooks, setListBooks, nameBook, setNameBook }) => {
  const handleDelete = (pos) => {
    const newList = listBooks.filter((_, position) => position !== pos);
    setListBooks(newList);
  };

  const handleEdit = (pos) => {
    if (nameBook) {
      const newList = listBooks;
      newList[pos] = nameBook;
      setListBooks([...newList]);
      setNameBook("");
    } else {
      input.focus();
      alert("Debe ingresar el valor en el input para editar");
    }
  };

  return (
    <>
      <h2>Listado de libros</h2>
      <ul style={{ width: "600px", margin: "0 auto" }}>
        {listBooks.length > 0 ? (
          listBooks.map((elm, pos) => {
            return (
              <li key={pos}>
                {elm}
                <button
                  className="btn btn-outline-secondary "
                  style={{ margin: "1px 20px 1px 50px" }}
                  type="button"
                  onClick={() => {
                    handleEdit(pos);
                  }}
                >
                  Editar
                </button>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => {
                    handleDelete(pos);
                  }}
                >
                  Eliminar
                </button>
              </li>
            );
          })
        ) : (
          <h4>No hay elementos</h4>
        )}
      </ul>
    </>
  );
};

export default Books;
