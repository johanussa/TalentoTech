import { ParagraphTag } from "../../utils/ComponentsTag";
import styles from "./Login.module.css";

type PropsIdDocNum = {
  idTag: string
}

export const ComponentIdDocument = ({ idTag }: PropsIdDocNum) => {
  return (
    <>
      <label htmlFor={idTag} className={styles.form_label_login}>Tipo de Documento</label>
      <div className={styles.form_input}>
        <i className={`bi bi-person-vcard-fill ${styles.iconsLogin}`} ></i>
        <select id={idTag} defaultValue={"CC"} required>
          <option value="CEDULA_DE_CIUDADANIA">Cédula de Ciudadania</option>
          <option value="TARJETA_DE_IDENTIDAD">Tarjeta de Identidad</option>
          <option value="CEDULA_DE_EXTRANJERIA">Cédula de Extranjeria</option>
          <option value="PEP">PEP</option>
          <option value="PERMISO_DE_PROTECCION_TEMPORAL">Permiso Protección Temporal</option>
        </select>
      </div>
    </>
  );
}

export const ComponentIdNumber = ({ idTag }: PropsIdDocNum) => {
  return (
    <>
      <label htmlFor={idTag} className={styles.form_label_login}>Número de Documento</label>
      <div className={styles.form_input}>
        <i className={`bi bi-person-circle ${styles.iconsLogin}`} ></i>
        <input
          type="text"
          id={idTag}
          placeholder="Ingrese el número de documento"
          required
        />
      </div>
      <ParagraphTag styleP={styles.message_error}
        message="El Número No puede contener espacios ni caracteres especiales y debe contener minimo 8 caracteres" />
    </>
  )
}

export const ErrorUserInfo = () => {
  return (
    <section className={`${styles.message_error} ${styles.form_error}`}>
      <p>
        <i className={`bi bi-exclamation-diamond-fill ${styles.iconsLogin}`}></i>
        <b>Error: </b> Información de usuario no válida.
      </p>
    </section>
  )
}