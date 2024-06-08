import { ComponentIdDocument, ComponentIdNumber, ErrorUserInfo } from "./LoginComponents";
import { ButtonComponent, ParagraphTag } from "../../utils/ComponentsTag";
import logoMidgardFull from "../../assets/logoMidgardFullBlack.png";
import LoginModalRec from "./LoginModalRec";
import styles from "./Login.module.css";
import { useState } from "react";
import LoginRegister from "./LoginRegister";

const Login = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const handlerActiveModal = () => setIsActiveModal(!isActiveModal);

  return (
    <main className={styles.loginContent}>
      <LoginRegister />

      <section className={styles.loginForm}>
        <aside>
          <img
            src={logoMidgardFull}
            alt="Midgard - Coders"
            className={styles.logoLogin}
          />
          <h2>Inicio de Sesión</h2>
        </aside>
        <form className={styles.formulario}>
          <section>
            <ComponentIdDocument idTag="tipoDoc" />
          </section>

          <section>
            <ComponentIdNumber idTag="numDoc" />
          </section>

          <section>
            <label htmlFor="pass" className={styles.form_label_login}>Contraseña</label>
            <div className={styles.form_input}>
              <i className={`bi bi-lock-fill ${styles.iconsLogin}`}></i>
              <input
                type="password"
                id="pass"
                placeholder="Ingrese la contraseña"
                required
              />
              <i className={`bi bi-eye-fill ${styles.iconEye}`}></i>
            </div>
            <ParagraphTag styleP={styles.message_error}
              message="La Contraseña debe tener mínimo 8 caracteres" />
          </section>

          <ErrorUserInfo />

          <section className={styles.forget_pass}>
            <button type='button' onClick={handlerActiveModal}>
              <i className="bi bi-key-fill"></i> Olvidé mi Contraseña
            </button>
          </section>

          <section>
            <ButtonComponent name="Iniciar Sesión" typeBtn="submit" handlerClick={() => { }} />
          </section>
        </form>
      </section>

      <section className={`${styles.modal} ${isActiveModal && styles.modal_show}`}>
        <LoginModalRec handlerActiveModal={handlerActiveModal} />
      </section>
    </main>
  );
};

export default Login;
