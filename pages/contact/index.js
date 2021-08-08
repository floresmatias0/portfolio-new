// import github from '../../assets/img/github.png'
// import twitter from '../../assets/img/gorjeo.png'
// import whatsapp from '../../assets/img/whatsapp.png'
// import linkedin from '../../assets/img/linkedin.png'

// import styles from '../../styles/Contact.module.css'
// import emailjs from 'emailjs-com';


const Contact = () => {

    // const goPage = () => window.open('https://github.com/floresmatias0')  
    // const goPageTwo = () => window.open('https://www.linkedin.com/in/matias-leandro-flores/')
    // const goPageThree = () => window.open('https://wa.me/541169047409')  
    // const goPageFour = () => window.open('https://twitter.com/Matiasleandro_')
    
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_hk87b54', 'template_tclqxon', e.target, 'user_9MGJiCZfpKKFo3efcWxeX')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset()
    // }
    
    return (
        <div className='container'>
            <style jsx>
                {`
                .container{
                    width:100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                `}
            </style>
            <h1>Contact</h1>
            <div >
                <div>
                    <form >

                        <label >Name</label>
                        <input  autoComplete="off" type="text" placeholder="name" name="name"/>

                        <label >Email</label>
                        <input  autoComplete="off" type="email" placeholder="email" name="email"/>

                        <label >Subject</label>
                        <input  autoComplete="off" type="text" placeholder="subject" name="subject"/>

                        <label >Message</label>
                        <textarea  name="message"/>
                        
                        <input  type="submit" value="send"/>
                    </form>
                </div>
                <div >
                    {/* <img onClick={goPage} src={github} alt='github'/>
                    <img onClick={goPageTwo} src={linkedin} alt='linkedin'/>
                    <img onClick={goPageFour} src={twitter} alt='twitter'/>
                    <img onClick={goPageThree} src={whatsapp} alt='whatsapp'/> */}
                </div>  
            </div>
            
        </div>
    )
}

export default Contact;