import { useState } from "react";
import styles from "./Components.module.css";

type PropsButton = {
  name: string;
  typeBtn?: "submit" | "reset" | "button";
};

export const ButtonComponent = ({ name, typeBtn }: PropsButton) => {
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
      onClick={() => setIsLoading(!isLoading)}
      disabled={isLoading}
    >
      {isLoading ? ("") : (<i className={["bi bi-caret-right-fill", styles.icon].join(" ")}></i>)}
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
