import { useState } from "react";
import styles from "./ComponentsTag.module.css";

type PropsButton = {
  name: string;
  typeBtn?: "submit" | "reset" | "button";
  handlerClick: () => void;
};

export const ButtonComponent = ({ name, typeBtn, handlerClick }: PropsButton) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);
  }

  return (
    <button
      type={typeBtn}
      className={styles.btnWelcome}
      onClick={handlerClick}
      disabled={isLoading}
    >
      {isLoading ? ("") : (<i className={`bi bi-caret-right-fill ${styles.icon}`}></i>)}
      {isLoading ? "Cargando..." : name}
    </button>
  );
};

interface PropsParagraph {
  message: string;
  styleP?: string;
}

export const ParagraphTag = ({ message, styleP }: PropsParagraph) => {
  return <p className={styleP} dangerouslySetInnerHTML={{ __html: message }} />;
};

type PropsImgTag = {
  styleImg: string;
  source: string;
  alt: string;
};

export const ImgAndSpanTag = (props: PropsImgTag) => {
  const { styleImg, source, alt } = props;

  return (
    <>
      <img src={source} alt={alt} className={styleImg} />
      <span>{alt}</span>
    </>
  );
};

type PropsTagAnchor = {
  link: string;
  icon: string;
};

export const TagAnchor = ({ link, icon }: PropsTagAnchor) => {
  return (
    <a href={link} target="_blank">
      <i className={icon}></i>
    </a>
  );
};
