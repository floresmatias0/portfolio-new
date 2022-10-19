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
      "Text about": `My name is Matias. I am a full stack developer in constant growth, graduated from soyHenry, I took the Alkemy acceleration course which I successfully completed, then I became part of the staff as a mentor assistant, later I started working remotely at Travtion where I Performance in both frontend and backend roles using a scrum work methodology.
      I am currently working in the company Radio miter in a dependency relationship, in addition to continuing with my Freelance position in Travtion, I have managed to combine both schedules due to the good predisposition of my employers, they have also given me the possibility to grow giving me the opportunity to continue studying , if you need to contact me or need my help in the contact tab you can send me
      an email from the form or I will also be leaving my social networks where you can talk to me,
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
        "Change language": "ótimo você verá a página em português",
        "Hi": "Olá",
        "Well Done!": "Bem feito!",
        "About": "Sobre mim",
        "Text about": `Meu nome é Matias. Sou um desenvolvedor full stack em constante crescimento, formado pela soyHenry, fiz o curso de aceleração Alkemy que concluí com sucesso, depois passei a fazer parte da equipe como assistente de mentor, depois comecei a trabalhar remotamente na Travtion onde ■ Atuação em funções de front-end e back-end utilizando uma metodologia de trabalho scrum.
        Atualmente estou trabalhando na empresa Radio mitre em uma relação de dependência, além de continuar com meu cargo de Freelance na Travtion, consegui combinar os dois horários devido à boa predisposição dos meus empregadores, eles também me deram a possibilidade de crescer me dando a oportunidade de continuar estudando, se precisar entrar em contato comigo ou precisar da minha ajuda na aba de contato pode me enviar
        um email do formulário ou também estarei deixando minhas redes sociais onde você pode falar comigo,
        Ficarei muito feliz em ajudá-lo!`,
        "Learned skills": "habilidades aprendidas",
        "Certificates": "Certificados",
        "Contact me": "Contate-me",
        "Send": "Mandar",
        "Name": "Nome",
        "Email": "o Email",
        "Subject": "Caso",
        "Message": "Mensagem",
        "Job offer": "Oferta de trabalho",
        "HOME": "COMEÇO",
        "ABOUT ME": "SOBRE MIM",
        "DEGREES": "GRAUS",
        "CONTACT": "CONTATO",
        "PROJECTS": "PROJETOS",
        "SKILLS": "HABILIDADES",
        "EXIT": "Saída",
        "Own projects": "Próprios projetos",
        "Go page": "vá para a página",
        "view certificate": "visualizar",
        "option language": "Como você gosta de ver a página?",
        "Saludo inicial": "Olá, meu nome é Matias Flores",
        "welcome": "Bem-vindo ao meu portfólio",
        "What your name?": "Qual é o seu nome?",
        "insert name": "Por favor insira o nome para continuar",
        "name and spaces": "O nome só pode conter letras e espaços",
        "insert email": "Por favor, insira o e-mail para continuar",
        "email and spaces": "O e-mail só pode conter letras, números, pontos, scripts e sublinhado",
        "insert subject": "Por favor insira o assunto do tópico",
        "subject and spaces": "O assunto só pode conter letras e espaços",
        "insert message": "Por favor insira a mensagem para enviar",
        "code": "seu código é",
        "text principal": `O que você acabou de fazer no início foi uma simulação do início de
        sessão para saber o seu nome e poder cumprimentá-lo, caso
        você deseja colocar outro nome, você pode clicar no botão sair do
        barra de navegação esquerda e só aí você poderá entrar no
        página principal para inserir outro nome, uma vez que as rotas são
        protegido graças ao nome inserido, por outro lado, você também tem
        todas as páginas que o redirecionam para o que você quer saber sobre mim
        teste de seleção de habilidades é um "tipo" de jogo, como você verá
        Você também pode alterar o idioma selecionando uma das bandeiras que
        Eles estão na mesma barra de navegação, caso você tenha se arrependido
        no começo e agora você quer ver ou ler em outro idioma, não é
        há muito para ler, mas é uma boa prática haha, obrigado por
        leia até aqui espero que gostem do meu portfólio, saudações!`,
        "Message send, thanks!": "Mensagem enviada, obrigado!",
        "Redes Sociales": "Redes Sociais"
    }
  },
  es: {
      translation: {
        "Change language": "Genial, verás la pagina en español",
        "Hi": "Hola",
        "Well Done!": "Bien hecho!",
        "About": "Sobre mi",
        "Text about": `Mi nombre es Matias Soy un desarrollador full stack en crecimiento constante, graduado en soyHenry, realice el curso de aceleracion de Alkemy el cual concluí con exito luego forme parte del staff como asistente de mentor, posteriormente comence a trabajar en Travtion de manera remota donde me desempeño en ambos roles tanto frontend como backend utilizando una metodologia de trabajo scrum.
        Actualmente estoy trabajando en la empresa Radio mitre en relacion de dependencia ademas de continuar con mi puesto Freelance en Travtion, he logrado compatibilizar ambos horarios dada a la buena predisposicion de mis empleadores, ademas me han dado la posibilidad de crecer dandome la oportunidad de seguir estudiando, si necesitas contactarme o necesitas mi ayuda en la pestaña de contacto podras enviarme
        un correo desde el formulario o tambien voy a estar dejando mis redes sociales en las cuales me puedes hablar, 
        ¡estaré muy feliz de poder ayudarte!`,
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
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;