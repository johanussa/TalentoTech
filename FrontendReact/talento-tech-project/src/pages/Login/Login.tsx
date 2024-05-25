import styles from "./Login.module.css";
import logoMidgard from "../../assets/yggdrasilBlack.png";
import logoMidgardFull from "../../assets/logoMidgardFullBlack.png";
import {
  ButtonComponent,
  ImgAndSpanTag,
  ParagraphTag,
  TagAnchor,
} from "../../utils/ComponentsTag";

const Login = () => {
  return (
    <main className={styles.loginContent}>
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
            message="Registrate para poder acceder a todos nuestros servicios, y administra y
                visualiza los horarios en un solo lugar."
          />
          <div className={styles.divBtn}>
            <ButtonComponent name="Registrarse" />
          </div>
          <div className={styles.socialMedia}>
            <TagAnchor link="https://web.facebook.com" icon="bi bi-facebook" />
            <TagAnchor link="https://www.instagram.com" icon="bi bi-instagram" />
            <TagAnchor link="https://twitter.com" icon="bi bi-twitter" />
            <TagAnchor link="https://co.linkedin.com" icon="bi bi-linkedin" />
          </div>
        </aside>
      </section>
      <section className={styles.loginForm}>
        <aside>
          <img
            src={logoMidgardFull}
            alt="Midgard - Coders"
            className={styles.logoLogin}
          />
          <h2>Inicio de Sesion</h2>
        </aside>
        <form className={styles.formulario}>
          <section>
            <label htmlFor="tipo" className={styles.form_label_login}>
              Tipo de Documento
            </label>
            <div className={styles.form_input}>
              <i className={["bi bi-person-vcard-fill", styles.iconsLogin].join(" ")} ></i>
              <select name="tipo" defaultValue={"CC"} required>
                <option value="CEDULA_DE_CIUDADANIA">
                  Cédula de Ciudadania
                </option>
                <option value="TARJETA_DE_IDENTIDAD">
                  Tarjeta de Identidad
                </option>
                <option value="CEDULA_DE_EXTRANJERIA">
                  Cédula de Extranjeria
                </option>
                <option value="PEP">PEP</option>
                <option value="PERMISO_DE_PROTECCION_TEMPORAL">
                  Permiso Protección Temporal
                </option>
              </select>
            </div>
          </section>

          <section>
            <label htmlFor="numDoc" className={styles.form_label_login}>
              Número de Documento
            </label>
            <div className={styles.form_input}>
              <i className={["bi bi-person-vcard-fill", styles.iconsLogin].join(" ")} ></i>
              <input
                type="text"
                id="numDoc"
                placeholder="Ingrese El Número de Documento"
                required
              />
            </div>
            <ParagraphTag styleP={styles.message_error}
              message="El Número No puede contener espacios ni caracteres especiales y debe 
                  contener minimo 8 caracteres" />
          </section>

          <section>
            <label htmlFor="pass" className={styles.form_label_login}>Contraseña</label>
            <div className={styles.form_input}>
              <i className={["bi bi-lock-fill", styles.iconsLogin].join(" ")}></i>
              <input
                type="password"
                id="pass"
                placeholder="Ingrese la Contraseña"
                required
              />
              <i className={["bi bi-eye-fill", styles.iconEye].join(" ")}></i>
            </div>
            <ParagraphTag styleP={styles.message_error}
              message="La Contraseña debe tener mínimo 8 caracteres" />
          </section>

          <section className={[styles.message_error, styles.form_error].join(' ')}>
            <p>
              <i className={["bi bi-exclamation-diamond-fill", styles.iconsLogin].join(' ')}></i>
              <b>Error: </b> Información de Usuario No Válida.
            </p>
          </section>

          <section className={styles.forget_pass}>
            <button type='button'>
              <i className="bi bi-key-fill"></i> Olvidé mi Contraseña
            </button>
          </section>

          <section>
            <ButtonComponent name="Iniciar Sesion" typeBtn="submit" />
          </section>
        </form>
      </section>
    </main>
  );
};

export default Login;
