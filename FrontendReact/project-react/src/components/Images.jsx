import React, { useState } from "react";
import logoReact from "../assets/react.svg";
import logoJS from "../assets/JS.png";
import logoCSS from "../assets/css-3.png";
import logoHtml from "../assets/html-5.png";
import viteLogo from "/vite.svg";

const data = [
  { logo: logoReact, title: "React" },
  { logo: viteLogo, title: "Vite" },
  { logo: logoJS, title: "JS" },
  { logo: logoCSS, title: "CSS" },
  { logo: logoHtml, title: "HTML" },
];

const Images = () => {
  const [changeImg, setChangeImg] = useState(logoReact);

  return (
    <>
      <h1>Galeria de imagenes</h1>
      <div
        id="carouselExample"
        className="carousel slide mt-4"
        style={{ width: "400px", height: "400px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={changeImg} className="d-block w-100" alt="React" />
          </div>
        </div>
      </div>
      <Cards changeImg={setChangeImg} />
    </>
  );
};

const Cards = ({ changeImg }) => {
  return (
    <ul className="nav justify-content-center mt-4">
      {data.map((elm, index) => {
        return (
          <li
            key={index}
            className="card m-1 p-2"
            style={{ width: "14rem", cursor: "pointer" }}
            onClick={() => changeImg(elm.logo)}
          >
            <img
              src={elm.logo}
              className="card-img-down"
              alt={elm.title}
              style={{ width: "80px", margin: "auto" }}
              title={elm.title}
            />
            <div className="card-body">
              <h4>{elm.title}</h4>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Images;
