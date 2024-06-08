import { ComponentIdDocument, ComponentIdNumber, ErrorUserInfo } from "./LoginComponents";
import { ButtonComponent, ParagraphTag } from "../../utils/ComponentsTag";
import styles from "./Login.module.css";

type PropsLoginModal = {
  handlerActiveModal: () => void
}

const LoginModalRec = ({ handlerActiveModal }: PropsLoginModal) => {

  const closeModal = () => handlerActiveModal();

  return (
    <div className={styles.contain_modal}>
      <article className={styles.head_modal}>
        <div className={styles.modal_title}>
          <i className="bi bi-key-fill"></i>
          <h2>Restablecer la Contraseña</h2>
        </div>
        <button onClick={closeModal}>
          <i className="bi bi-x-lg"></i>
        </button>
      </article>
      <article className={styles.body_modal}>
        <p>Ingrese la información para restablecer la contraseña</p>
        <form className={styles.form_get_pass}>
          <section className={styles.group_type_doc}>
            <ComponentIdDocument idTag="tipoDocRec" />
          </section>

          <section className={styles.group_numDocRec}>
            <ComponentIdNumber idTag="numDocRec" />
          </section>

          <ErrorUserInfo />

          <article className={styles.footer_modal}>
            <ButtonComponent name="Cancelar" handlerClick={closeModal} />
            <ButtonComponent name="Restablecer" handlerClick={() => { }} />
          </article>
        </form>
      </article>
    </div>
  )
}

export default LoginModalRec