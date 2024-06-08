import styles from "./Register.module.css";

type PropsSelectInput = {
  idInput: string;
  typeInput?: string;
  nameInput: string;
  placeHolder: string;
  msgError: string;
};

export const SectionInputForm = ({
  idInput,
  nameInput,
  placeHolder,
  msgError,
  typeInput = "text",
}: PropsSelectInput) => {
  return (
    <section>
      <label htmlFor={idInput} className={styles.form_label}>
        {nameInput}
      </label>
      <div className={styles.group_input}>
        <input
          type={typeInput}
          id={idInput}
          className={styles.form_input}
          placeholder={placeHolder}
          required
        />
        <i className={`bi bi-x-circle-fill ${styles.icon_validate}`} />
        {typeInput === "password" && (<i className={`bi bi-eye-fill ${styles.eyePass}`}></i>)}
      </div>
      <p className={styles.input_error}>{msgError}</p>
    </section>
  );
};
