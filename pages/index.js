import { useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import { Formik, Form, Field } from 'formik';
import { withTranslation } from "react-i18next";
import i18n from '../components/i18n/i18n'
import Swal from 'sweetalert2';

import portugal from '../assets/images/portugal_flags.png'
import españa from '../assets/images/spain_flag.png'
import inglaterra from '../assets/images/united_kingdom_flag.png'

const Init = ({t}) => {

  const router = useRouter();

  const change = (language) =>{
    i18n.changeLanguage(language)
    Swal.fire({
      icon: 'success',
      html: `<p>${t('Change language')}</p>`
    })
  }

  var aux = [];
  var codes = ["432765", "897654", "532176"];
  
  const [numberCode, setNumberCode] = useState("");
  const [hidden, setHidden] = useState(false);
  const [name, setName] = useState("")
  const [codeRandom, setCodeRandom] = useState("");

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  const handleChange = (e) => setNumberCode(numberCode.concat(e));

  const handleErase = () =>
    setNumberCode(numberCode.substring(0, numberCode.length - 1));

  const handleEnter = (name) => {
    if (
      numberCode === "432765" ||
      numberCode === "897654" ||
      numberCode === "532176"
    ) {
      let storage = localStorage.getItem("name");
      if (storage) {
        localStorage.clear();
        localStorage.setItem("name", name);
      } else {
        localStorage.setItem("name", name);
      }

      Toast.fire({
        icon: 'success',
        title: `${t('Well Done!')}`
      })
      .then(() => {
          router.push({pathname:"/home"});
      })

    } else {
      Swal.fire({
        icon: 'error',
        html: `<p>sorry something wrong</p>`,
        confirmButtonText: 'try again'
      });
    }
  };

  const code = () => {
    var aleatorio = Math.random() * codes.length;
    var aux = Math.floor(aleatorio);
    setCodeRandom(codes[aux]);
  };

  return (
    <div className="container">
      <main>
        <h1>{t('Saludo inicial')}</h1>
        <h2>{t('welcome')}</h2>
        <h3>{t('option language')}</h3>
            <div className="flags">
              <div className="contentFlag">
                <Image onClick={() => change('pr')} src={portugal} width={36} height={36}/>
              </div>
              <div className="contentFlag">
                <Image onClick={() => change('es')} src={españa} width={36} height={36}/>
              </div>
              <div className="contentFlag">
                <Image onClick={() => change('en')} src={inglaterra} width={36} height={36}/>  
              </div>
            </div>
        <div>
          <div>
            <div className={hidden ? "hiddenCode" : "displayName"}>
              <Formik
                initialValues={{
                  name: ''
                }}
                validate={(fields) => {
                  let errors = {}

                  if(!fields.name){
                    errors.name = `${t('insert name')}`
                  }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(fields.name)){
                    errors.name = `${t('name and spaces')}`
                  }

                  return errors
                }}
                onSubmit={(fields) => {
                  if (fields.name) {
                    setName(fields.name)
                    setHidden(true);
                  }
                }}
              >
                {({ touched,errors }) => (
                  <Form className="contentForm">
                      <label className="titleInput">{t('What your name?')}</label>
                      <Field
                        className="inputName"
                        name="name"
                        placeholder="John Doeh"
                        type="text"
                      />
                      {touched.name && errors.name ? <p className="errors">{errors.name}</p> : ""}

                      <button className="send" type="submit" onClick={code}>
                        {t('Send')}
                      </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className={hidden ? "displayCode" : "hiddenCode"}>
              <label className="titleInput">{t('code')} {codeRandom}</label>
              <input disabled value={numberCode} className="inputCode" />
            </div>
            <div className={hidden ? "buttons" : "hiddenCode"}>
              <ul className="slideRight">
                <li onClick={() => handleChange("1")}>1</li>
                <li onClick={() => handleChange("2")}>2</li>
                <li onClick={() => handleChange("3")}>3</li>
              </ul>
              <ul className="slideRight">
                <li onClick={() => handleChange("4")}>4</li>
                <li onClick={() => handleChange("5")}>5</li>
                <li onClick={() => handleChange("6")}>6</li>
              </ul>
              <ul className="slideRight">
                <li onClick={() => handleChange("7")}>7</li>
                <li onClick={() => handleChange("8")}>8</li>
                <li onClick={() => handleChange("9")}>9</li>
              </ul>
              <ul className="slideRight">
                <li onClick={handleErase}>erase</li>
                <li onClick={() => handleChange("0")}>0</li>
                <li onClick={() => handleEnter(name)}>enter</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default withTranslation()(Init);
