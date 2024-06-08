import styles from "./Welcome.module.css";
import logoMidgard from "../../assets/yggdrasilBlack.png";
import {
  ButtonComponent,
  ImgAndSpanTag,
  ParagraphTag,
} from "../../utils/ComponentsTag";

const Welcome = () => {
  return (
    <main className={styles.mainWelcomebackground}>
      <section className={styles.welcomeContent}>
        <div>
          <ImgAndSpanTag
            source={logoMidgard}
            alt="MIDGARD CODERS"
            styleImg={styles.logoWelcome}
          />
        </div>
        <div className={styles.divMain}>
          <h1>HOLA Y BIENVENIDO</h1>
          <ParagraphTag
            message="Desde el equipo <b>MIDGARD CODERS</b> le damos una calurosa bienvenida
          a nuestra aplicación web, en donde podrá, de una manera eficaz,
          ordenada y sencilla, organizar, ver, editar y administrar el horario
          de las personas registradas."
          />
          <ParagraphTag
            message="Esta aplicación va dirigida a todas aquellas empresas que quieran, de
          manera automatizada y moderna, realizar la gestión de los horarios del
          personal que tienen a su cargo."
          />
        </div>
        <ButtonComponent name={"INGRESAR"} handlerClick={() => {}}/>
      </section>
    </main>
  );
};

export default Welcome;
