import logoMidgardFull from "../../assets/logoMidgardFullBlack.png";
import { SectionInputForm } from "./RegisterSectionInputForm";
import { NavLink } from "react-router-dom";
import styles from './Register.module.css';

const Register = () => {
  return (
    <main className={styles.register_user_main}>
      <header className={styles.formulario}>
        <img src={logoMidgardFull} alt="MIDGARD-CODERS" className={styles.logoMidgard} />
        <h1>Formulario de Registro - Usuarios Nuevos</h1>
      </header>
      <form className={styles.formRegisterUser}>
        <SectionInputForm
          idInput="name"
          nameInput="Nombre"
          placeHolder="Ingrese su nombre"
          msgError="El Nombre debe tener entre 3 y 16 caracteres, No puede contener números o 
            caracteres especiales."
        />

        <SectionInputForm
          idInput="lastName"
          nameInput="Apellido"
          placeHolder="Ingrese su apellido"
          msgError="El Apellido debe tener entre 3 y 16 caracteres, No puede contener números o 
            caracteres especiales."
        />

        <section>
          <label htmlFor="typeDoc" className={styles.form_label}>Tipo Documento de Identidad</label>
          <div className={styles.group_input}>
            <select defaultValue={'CEDULA_DE_CIUDADANIA'} id="typeDoc" className={styles.form_input} required>
              <option value="CEDULA_DE_CIUDADANIA">Cédula de Ciudadania</option>
              <option value="TARJETA_DE_IDENTIDAD">Tarjeta de Identidad</option>
              <option value="CEDULA_DE_EXTRANJERIA">Cédula de Extranjeria</option>
              <option value="PERMISO_ESPECIAL_DE_PERMANENCIA">Permiso Especial de Permanencia</option>
              <option value="PERMISO_DE_PROTECCION_TEMPORAL">Permiso Protección Temporal</option>
            </select>
          </div>
        </section>

        <SectionInputForm
          idInput="numDoc"
          nameInput="Número de Documento"
          placeHolder="1012345678"
          msgError="El Número debe contener minimo 7 caracteres, No puede contener espacios o 
            caracteres especiales."
        />

        <SectionInputForm
          idInput="email" typeInput="email"
          nameInput="Correo Electrónico"
          placeHolder="correo@ejemplo.ejm.co"
          msgError="El Correo ingresado contiene un formato incorrecto"
        />

        <SectionInputForm
          idInput="password" typeInput="password"
          nameInput="Contraseña"
          placeHolder="Ingrese su contraseña"
          msgError="La contraseña debe tener entre 8 y 20 caracteres"
        />

        <SectionInputForm
          idInput="password2" typeInput="password"
          nameInput="Confirmar Contraseña"
          placeHolder="Confirme su contraseña"
          msgError="La contraseña No coincide, verifiquela"
        />

        <section>
          <label htmlFor="rol" className={styles.form_label}>Rol de Usuario</label>
          <div className={styles.group_input}>
            <select id="rol" defaultValue={''} className={styles.form_input} required>
              <option value="" disabled>Seleccionar . . .</option>
              <option value="ADMINISTRADOR">Administrador</option>
              <option value="INSTRUCTOR">Instructor</option>
              <option value="FUNCIONARIO">Funcionario</option>
            </select>
          </div>
        </section>

        <section className={styles.message_error}>
          <div>
            <i className="bi bi-exclamation-diamond-fill"></i>
            <b> Error : </b> Debe completar todos los campos requeridos
          </div>
        </section>

        <section className={styles.group_btns}>
          <NavLink to={"/login"}>
            <button type="button" className={styles.btn_form_register}>Regresar</button>
          </NavLink>
          <button type="reset" className={styles.btn_form_register}>Limpiar Campos</button>
          <button type="submit" className={styles.btn_form_register}>Enviar</button>
        </section>
      </form>
    </main>
  )
}

export default Register