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
      "Well Done!": "Well Done!",
      "About": "About me",
      "Text about": `My name is Matias I am a FullStack developer graduated from SoyHenry.
      In the final projects I have made an individual one that consisted of using an API
      to make requests for information about said api and make a single page application
      with static and dynamic routes using NodeJS plus Express, Sequelize, PostgreSQL for the backend and
      ReactJS in addition to React-Redux and CSS-module for the frontend.
      Finally, a group project that consisted of creating an e-commerce using the SCRUM methodology.
      for more details on these projects I will leave my cv below so you can download and view calmly.
      I like to program, whenever I can implement a new library to fill myself with knowledge I always think
      that for some project it will be useful to learn it and I investigate it until I know how to use it my place of comfort is the frontend
      Although the backend is doing very well for me, I have even tried sockets, I like to work as a team I think this is
      good to have different perspectives, if you need to contact me or need my help in the contact tab you can send me
      an email from the form or I will also be leaving my social networks in which you can also talk to me,
      I will be very happy to help you!`,
      "Learned skills": "Learned skills",
      "Certificates": "Certificates",
      "Contact me": "Contact me",
      "Send": "Send",
      "Name": "Name",
      "Email": "Email",
      "Subject": "Subject",
      "Message": "Message",
      "Job offer": "Job offer",
      "HOME": "HOME",
      "ABOUT ME": "ABOUT",
      "DEGREES": "DEGREES",
      "CONTACT": "CONTACT",
      "PROJECTS": "PROJECTS",
      "SKILLS": "SKILLS",
      "EXIT": "Exit",
      "Own projects": "Own projects",
      "Go page": "Go page",
      "view certificate": "View",
      "option language": "How would you like to see the page?",
      "Saludo inicial": "Hi! my name is Matias Flores",
      "welcome": "Welcome to my portfolio",
      "What your name?": "What's your name?",
      "insert name": "Please insert name to continue",
      "name and spaces": "The name can only contain letters and spaces",
      "insert email": "Please insert email to continue",
      "email and spaces": "The email can only contain letters, numbers, periods, scripts and underscore",
      "insert subject": "Please insert subject of the topic",
      "subject and spaces": "The subject can only contain letters and spaces",
      "insert message": "Please insert message to send",
      "code": "your code is",
      "text principal": `What you just did at the beginning was a simulation of the start of
      session to know your name and be able to greet you, in case
      you want to put another name you can click on the button exit the
      left navigation bar and just there you will be able to enter the
      main page to enter another name since the routes are
      protected thanks to the name entered, on the other hand you also have
      all the pages that redirect you to what you want to know about me
      test selecting skills is a "kind" of game, as you will see
      You can also change the language by selecting one of the flags that
      They are in the same navigation bar, in case you regretted
      at the beginning and now you want to see it or read it in another language, it is not
      there is a lot to read but it is a good practice, thanks for
      read this far I hope you like my portfolio, greetings!`,
      "Message send, thanks!": "Message send, thanks!",
      "Redes Sociales": "Social Networks"
    }
  },
  pr: {
    translation: {
        "Change language": "??timo voc?? ver?? a p??gina em portugu??s",
        "Hi": "Ol??",
        "Well Done!": "Bem feito!",
        "About": "Sobre mim",
        "Text about": `Meu nome ?? Matias, sou um desenvolvedor FullStack graduado pela SoyHenry.
        nos projetos finais fiz um individual que consistia no uso de uma API
        para fazer solicita????es de informa????es sobre a referida api e fazer um aplicativo de p??gina ??nica
        com rotas est??ticas e din??micas usando NodeJS plus Express, Sequelize, PostgreSQL para o backend e
        ReactJS, al??m de React-Redux e m??dulo CSS para o frontend.
        Por fim, um projeto de grupo que consistiu na cria????o de um e-commerce utilizando a metodologia SCRUM.
        para mais detalhes sobre esses projetos deixarei meu cv abaixo para que voc?? possa baixar e assistir com calma.
        Gosto de programar, sempre que consigo implementar uma nova biblioteca para me encher de conhecimento sempre penso
        que para algum projeto ser?? ??til aprend??-lo e eu investigo at?? saber como us??-lo meu lugar de conforto ?? o frontend
        Embora o backend esteja indo muito bem para mim, eu at?? tentei soquetes, gosto de trabalhar em equipe, acho que isso ??
        bom ter perspectivas diferentes, se precisar entrar em contato comigo ou precisar da minha ajuda na aba de contato voc?? pode me enviar
        um email do formul??rio ou tamb??m estarei saindo das minhas redes sociais nas quais voc?? tamb??m pode falar comigo,
        Ficarei muito feliz em ajud??-lo!`,
        "Learned skills": "habilidades aprendidas",
        "Certificates": "Certificados",
        "Contact me": "Contate-me",
        "Send": "Mandar",
        "Name": "Nome",
        "Email": "o Email",
        "Subject": "Caso",
        "Message": "Mensagem",
        "Job offer": "Oferta de trabalho",
        "HOME": "COME??O",
        "ABOUT ME": "SOBRE MIM",
        "DEGREES": "GRAUS",
        "CONTACT": "CONTATO",
        "PROJECTS": "PROJETOS",
        "SKILLS": "HABILIDADES",
        "EXIT": "Sa??da",
        "Own projects": "Pr??prios projetos",
        "Go page": "v?? para a p??gina",
        "view certificate": "visualizar",
        "option language": "Como voc?? gosta de ver a p??gina?",
        "Saludo inicial": "Ol??, meu nome ?? Matias Flores",
        "welcome": "Bem-vindo ao meu portf??lio",
        "What your name?": "Qual ?? o seu nome?",
        "insert name": "Por favor insira o nome para continuar",
        "name and spaces": "O nome s?? pode conter letras e espa??os",
        "insert email": "Por favor, insira o e-mail para continuar",
        "email and spaces": "O e-mail s?? pode conter letras, n??meros, pontos, scripts e sublinhado",
        "insert subject": "Por favor insira o assunto do t??pico",
        "subject and spaces": "O assunto s?? pode conter letras e espa??os",
        "insert message": "Por favor insira a mensagem para enviar",
        "code": "seu c??digo ??",
        "text principal": `O que voc?? acabou de fazer no in??cio foi uma simula????o do in??cio de
        sess??o para saber o seu nome e poder cumpriment??-lo, caso
        voc?? deseja colocar outro nome, voc?? pode clicar no bot??o sair do
        barra de navega????o esquerda e s?? a?? voc?? poder?? entrar no
        p??gina principal para inserir outro nome, uma vez que as rotas s??o
        protegido gra??as ao nome inserido, por outro lado, voc?? tamb??m tem
        todas as p??ginas que o redirecionam para o que voc?? quer saber sobre mim
        teste de sele????o de habilidades ?? um "tipo" de jogo, como voc?? ver??
        Voc?? tamb??m pode alterar o idioma selecionando uma das bandeiras que
        Eles est??o na mesma barra de navega????o, caso voc?? tenha se arrependido
        no come??o e agora voc?? quer ver ou ler em outro idioma, n??o ??
        h?? muito para ler, mas ?? uma boa pr??tica haha, obrigado por
        leia at?? aqui espero que gostem do meu portf??lio, sauda????es!`,
        "Message send, thanks!": "Mensagem enviada, obrigado!",
        "Redes Sociales": "Redes Sociais"
    }
  },
  es: {
      translation: {
        "Change language": "Genial, ver??s la pagina en espa??ol",
        "Hi": "Hola",
        "Well Done!": "Bien hecho!",
        "About": "Sobre mi",
        "Text about": `Mi nombre es Matias soy desarrollador FullStack graduado en soyHenry. 
        en los proyectos finales he realizado uno individual que consistia en utilizar una Api 
        para realizar peticiones de informacion sobre dicha api y realizar una single page application
        con rutas estaticas y dinamicas utilizando NodeJS ademas de Express,Sequelize,PostgreSQL para el backend y 
        ReactJS ademas de React-Redux y CSS-module para el frontend.
        Por ultimo un proyecto grupal que consistia en crear un e-commerce utilizando la metodologia SCRUM
        para mas detalles sobre estos proyectos voy a dejar mi cv mas abajo para que puedas descargar y ver tranquilamente. 
        Me gusta programar, siempre que puedo implemento alguna libreria nueva para llenarme de conocimiento siempre pienso
        que para algun proyecto me va a servir aprenderlo y lo investigo hasta saber utilizarlo mi lugar de confort es el frontend 
        aunque en el backend me va muy bien tambien hasta he probado sockets, me gusta trabajar en equipo pienso que esta
        bueno tener distintas perspectivas, si necesitas contactarme o necesitas mi ayuda en la pesta??a de contacto podras enviarme
        un correo desde el formulario o tambien voy a estar dejando mis redes sociales en las cuales me puedes hablar tambien, 
        ??estar?? muy feliz de poder ayudarte!`,
        "Learned skills": "Habilidades aprendidas",
        "Certificates": "Certificados",
        "Contact me": "Contactame",
        "Send": "Enviar",
        "Name": "Nombre",
        "Email": "Mail",
        "Subject": "Asunto",
        "Message": "Mensaje",
        "Job offer": "Oferta de trabajo",
        "HOME": "INICIO",
        "ABOUT ME": "SOBRE MI",
        "DEGREES": "LOGROS",
        "CONTACT": "CONTACTO",
        "PROJECTS": "PROYECTOS",
        "SKILLS": "HABILIDADES",
        "EXIT": "Salir",
        "Own projects": "Proyectos propios",
        "Go page": "Ir a la pagina",
        "view certificate": "Ver",
        "option language": "Como le gustaria ver la pagina?",
        "Saludo inicial": "Hola! mi nombre es Matias Flores",
        "welcome": "Bienvenido a mi portafolio",
        "What your name?": "Cual es tu nombre?",
        "insert name": "Por favor ingresa un nombre",
        "name and spaces": "El nombre solo debe contener letras y espacios",
        "insert email": "Por favor ingrese un email para poder continuar",
        "email and spaces": "El email solo puede contener letras, numeros, puntos, guiones y guion bajo",
        "insert subject": "Por favor inserte el asunto del tema",
        "subject and spaces": "El asunto solo puede contener letras y espacios",
        "insert message": "Por favor escribe un mensaje para poder enviar",
        "code": "tu codigo es",
        "text principal": `Lo que acabas de hacer al principio fue una simulacion de inicio de
        sesion para saber tu nombre y poder saludarte, en el caso de que
        quieras colocar otro nombre puedes hacer click en el boton salir de la
        barra de navegacion izquierda y recien ahi vas a poder ingresar a la
        pagina principal para ingresar otro nombre ya que las rutas estan
        protegidas gracias al nombre ingresado, por otro lado tambien tienes
        todas las paginas que te redirigen hacia lo que quieres saber de mi
        prueba seleccionando habilidades es una "especie" de juego, como veras
        tambien puedes cambiar el idioma seleccionando una de las banderas que
        se encuentran en la misma barra de navegacion, por si te arrepentiste
        al principio y ahora quieres verla o leerla en otro idioma, tampoco es
        que hay mucho que leer pero es una buena practica, gracias por
        leer hasta aca espero que te guste mi portafolio, saludos!!`,
        "Message send, thanks!": "Mensaje enviado, gracias!",
        "Redes Sociales": "Redes Sociales"
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