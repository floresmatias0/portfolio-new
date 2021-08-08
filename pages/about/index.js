const About = () => {
  return (
    <div className="container">
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .contentAbout{
              width: 30em;
          }
        `}
      </style>
      <h1>About me</h1>
      <div className='contentAbout'>
        <p>
          My name is Matias I am a FullStack developer graduated of Henry.
          learnt to much since start the carrer and this I was to to loved, the
          world of code is very long but I feel close to it in this moment. my
          confort place is the frontend but the relationship with the backend is
          really good also, I like working in teams when a proyect is more
          complete with data base,backend and frontend using an agile method
          like SCRUM if you need contactme or you need my help go to the contact
          tab i will be very happy to help you!
        </p>
      </div>
    </div>
  );
};

export default About;
