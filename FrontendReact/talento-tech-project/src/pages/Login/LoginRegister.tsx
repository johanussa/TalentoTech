import logoMidgard from "../../assets/yggdrasilBlack.png";
import { NavLink } from "react-router-dom";
import {
  ButtonComponent,
  ImgAndSpanTag,
  ParagraphTag,
  TagAnchor,
} from "../../utils/ComponentsTag";
import styles from "./Login.module.css";

const LoginRegister = () => {
  return (
    <section className={styles.register}>
      <aside>
        <ImgAndSpanTag
          styleImg={styles.logoMidgard}
          source={logoMidgard}
          alt="MIDGARD CODERS"
        />
      </aside>
      <aside>
        <h2>¿ No tienes una cuenta ?</h2>
        <ParagraphTag
          message="Registrate para poder acceder a todos nuestros servicios, para administrar y
                visualizar los horarios en un solo lugar."
        />
        <div className={styles.divBtn}>
          <NavLink to={"/register"}>
            <ButtonComponent name="Registrarse" handlerClick={() => { }} />
          </NavLink>
        </div>
        <div className={styles.socialMedia}>
          <TagAnchor link="https://web.facebook.com" icon="bi bi-facebook" />
          <TagAnchor link="https://www.instagram.com" icon="bi bi-instagram" />
          <TagAnchor link="https://twitter.com" icon="bi bi-twitter" />
          <TagAnchor link="https://co.linkedin.com" icon="bi bi-linkedin" />
        </div>
      </aside>
    </section>
  )
}

export default LoginRegister;