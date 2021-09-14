import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Change language": "Great,  you will see the page in english",
      "Hi": "Hi",
      "About": "About me",
      "Text about": "My name is Matias I am a FullStack developer graduated of Henry. learnt to much since start the carrer and this I was to to loved, the world of code is very long but I feel close to it in this moment. my confort place is the frontend but the relationship with the backend is really good also, I like working in teams when a proyect is more complete with data base,backend and frontend using an agile method like SCRUM if you need contactme or you need my help go to the contact tab i will be very happy to help you!",
      "Learned skills": "Learned skills",
      "Certificates": "Certificates",
      "Contact me": "Contact me",
      "Send": "Send",
      "Name": "Name",
      "Email": "Email",
      "Subject": "Subject",
      "Message": "Message",
      "Job offer": "Job offer",
      "ABOUT ME": "ABOUT",
      "DEGREES": "DEGREES",
      "CONTACT": "CONTACT",
      "PROJECTS": "PROJECTS",
      "SKILLS": "SKILLS",
      "Own projects": "Own projects",
      "Go page": "Go page",
      "view certificate": "View",
      "option language": "How would you like to see the page?",
      "Saludo inicial": "Hi! my name is Matias Flores",
      "welcome": "Welcome to my portfolio",
      "What your name?": "What your name?",
      "insert name": "Please insert name to continue",
      "name and spaces": "The name can only contain letters and spaces",
      "code": "your code is"
    }
  },
  pr: {
    translation: {
        "Change language": "ótimo você verá a página em português",
        "Hi": "Olá",
        "About": "Sobre mim",
        "Text about": "Meu nome é Matias, sou um desenvolvedor FullStack graduado pelo Henry. Aprendi muito desde que comecei a me formar e adorei isso, o mundo do código é muito longo, mas me sinto perto dele no momento. meu lugar de conforto é o frontend mas a relação com o backend também é muito boa, gosto de trabalhar em equipe quando um projeto está mais completo com banco de dados, backend e frontend usando um método ágil como SCRUM se precisar entrar em contato comigo ou preciso da minha ajuda vá para a aba de contato, ficarei muito feliz em ajudá-lo!",
        "Learned skills": "habilidades aprendidas",
        "Certificates": "Certificados",
        "Contact me": "Contate-me",
        "Send": "Mandar",
        "Name": "Nome",
        "Email": "o Email",
        "Subject": "Caso",
        "Message": "Mensagem",
        "Job offer": "Oferta de trabalho",
        "ABOUT ME": "SOBRE MIM",
        "DEGREES": "GRAUS",
        "CONTACT": "CONTATO",
        "PROJECTS": "PROJETOS",
        "SKILLS": "HABILIDADES",
        "Own projects": "Próprios projetos",
        "Go page": "vá para a página",
        "view certificate": "visualizar",
        "option language": "Como você gosta de ver a página?",
        "Saludo inicial": "Olá, meu nome é Matias Flores",
        "welcome": "Bem-vindo ao meu portfólio",
        "What your name?": "Qual é o seu nome?",
        "insert name": "Por favor insira o nome para continuar",
        "name and spaces": "O nome só pode conter letras e espaços",
        "code": "seu código é"
    }
  },
  es: {
      translation: {
        "Change language": "Genial, verás la pagina en español",
        "Hi": "Hola",
        "About": "Sobre mi",
        "Text about": "Mi nombre es Matias soy un desarrollador FullStack graduado de Henry. Aprendí mucho desde que empecé la carrera y esto me encantó, el mundo del código es muy largo pero me siento cerca de él en este momento. mi lugar de confort es el frontend pero la relación con el backend también es muy buena, me gusta trabajar en equipo cuando un proyecto es más completo con base de datos, backend y frontend usando un método ágil como SCRUM si necesitas contactarme o necesitas mi ayuda ve a la pestaña de contacto ¡estaré muy feliz de poder ayudarte!",
        "Learned skills": "Habilidades aprendidas",
        "Certificates": "Certificados",
        "Contact me": "Contactame",
        "Send": "Enviar",
        "Name": "Nombre",
        "Email": "Mail",
        "Subject": "Asunto",
        "Message": "Mensaje",
        "Job offer": "Oferta de trabajo",
        "ABOUT ME": "SOBRE MI",
        "DEGREES": "LOGROS",
        "CONTACT": "CONTACTO",
        "PROJECTS": "PROYECTOS",
        "SKILLS": "HABILIDADES",
        "Own projects": "Proyectos propios",
        "Go page": "Ir a la pagina",
        "view certificate": "Ver",
        "option language": "Como le gustaria ver la pagina?",
        "Saludo inicial": "Hola! mi nombre es Matias Flores",
        "welcome": "Bienvenido a mi portafolio",
        "What your name?": "Cual es tu nombre?",
        "insert name": "Por favor ingresa un nombre",
        "name and spaces": "El nombre solo debe contener letras y espacios",
        "code": "tu codigo es"
      }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;