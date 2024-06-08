import { useEffect, useState } from "react";
import axios from "axios";

const CardUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://api.randomuser.me/")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);

  return <DrawCard user={user} />;
};

const DrawCard = ({ user }) => {
  return (
    <>
      {Object.keys(user).length !== 0 && (
        <div
          className="card mt-4"
          style={{ width: "25rem", margin: "0 auto", padding: "1em" }}
        >
          <img
            src={user.picture.large}
            className="card-img-top"
            alt="usuario"
            style={{ width: "200px", margin: "auto" }}
          />
          <div className="card-body pb-0">
            <h4 className="card-title">{`${user.name.title}. ${user.name.first} ${user.name.last}`}</h4>
            <ul style={{ textAlign: "left" }}>
              <li>Edad: {user.dob.age} años</li>
              <li>Fecha de nacimiento: {user.dob.date.substring(0, 10)}</li>
              <li>Email: {user.email}</li>
              <li>Celular: {user.cell}</li>
              <li>Ciudad: {user.location.city}</li>
              <li>Pais: {user.location.country}</li>
              <li>
                Direccion:
                <ul>
                  <li>Nombre: {user.location.street.name}</li>
                  <li>Numero: {user.location.street.number}</li>
                </ul>
              </li>
              <li>Fecha registro: {user.registered.date.substring(0, 10)}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CardUser;
