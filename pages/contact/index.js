import { Formik,Form,Field } from "formik";
import Swal from 'sweetalert2'
import axios from 'axios';
import { useState } from "react";
import Image from "next/image"
import pacman from "../../assets/images/pacman.gif"
import { withTranslation } from "react-i18next";

const Contact = ({t}) => {

    let linkedin = 'https://res.cloudinary.com/djnhaprmj/image/upload/v1631657531/linkedin_nj0q7q.png'
    let instagram = 'https://res.cloudinary.com/djnhaprmj/image/upload/v1631658056/instagram_k33rwq.png'
    let facebook = 'https://res.cloudinary.com/djnhaprmj/image/upload/v1631659057/facebook_wpoox9.png'
    let cv = 'https://res.cloudinary.com/djnhaprmj/image/upload/v1631661310/curriculum_wgpy4g.png'

    const [loading, setLoading] = useState(false)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    
    return (
        <div className='container'>
            <h1>{t('Contact me')}</h1>
            <div>
                <Formik
                    initialValues={{
                        nick: "",
                        email: "",
                        subject: "",
                        message: ""
                    }}
                    validate={(fields) => {
                        let errors = {}
                        //Validate nick
                        if(!fields.nick){
                            errors.nick = `${t('insert name')}`
                        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(fields.nick)){
                            errors.nick = `${t('name and spaces')}`
                        }
                        //Validate email
                        if(!fields.email){
                            errors.email = `${t('insert email')}`
                        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(fields.email)){
                            errors.email = `${t('email and spaces')}`
                        }
                        //Validate subject
                        if(!fields.subject){
                            errors.subject = `${t('insert subject')}`
                        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(fields.subject)){
                            errors.subject = `${t('subject and spaces')}`
                        }
                        //Validate message
                        if(!fields.message){
                            errors.message = `${t('insert message')}`
                        }
                        
                        return errors
                    }}
                    onSubmit={async(fields,actions) => {
                        setLoading(true)
                        let options = {
                            method : 'POST',
                            url: 'https://mattportfolio-email.herokuapp.com/send-email',
                            header:{
                                ContentType: 'application/json',   
                            },
                            data:{
                                from : fields.nick,
                                to : fields.email,
                                subject: fields.subject,
                                html: `<p>${fields.message}</p>`
                            }
                            
                        }
                        await axios.request(options)
                        .then(response => {
                            setLoading(false)
                            if(response.statusText === 'Accepted') {
                                Toast.fire({
                                icon: 'success',
                                title: `${t('Message send, thanks!')}`
                            })
                            }else{
                                Toast.fire({
                                    icon: 'error',
                                    title: 'Oh Oh try again!'
                                })
                            }
                        })
                        actions.resetForm()
                    }}
                >
                    {({errors,touched}) => (
                    <Form className="form">
                        <label>{t('Name')}</label>
                        <Field type="text" placeholder="John Doe" name="nick"/>
                        {touched.nick && errors.nick ? <p>{errors.nick}</p> : ""}

                        <label>{t('Email')}</label>
                        <Field type="email" placeholder="correo@correo.com" name="email"/>
                        {touched.email && errors.email ? <p>{errors.email}</p> : ""}

                        <label>{t('Subject')}</label>
                        <Field type="text" placeholder={t('Job offer')} name="subject"/>
                        {touched.subject && errors.subject ? <p>{errors.subject}</p> : ""}

                        <label>{t('Message')}</label>
                        <Field as="textarea" placeholder="Lorem ipsum..." name="message"/>
                        {touched.message && errors.message ? <p>{errors.message}</p> : ""}

                      <button className="buttonMail" type="submit">{t('Send')}</button>
                    </Form>   
                    )}
                </Formik>
                {loading ? <Image src={pacman} alt="loading..." width={100} height={100}/> : ""}
            </div>
            <div>
                <h2 style={{marginTop: "1em"}}>{t('Redes Sociales')}</h2>
                <div className="contentRedes">
                    <Image onClick={() => {window.open('https://www.linkedin.com/in/matias-leandro-flores/')}} src={linkedin} alt='linkedin' width={64} height={64}/>
                    <Image onClick={() => {window.open('https://www.instagram.com/matiasleandro._/?hl=es')}} src={instagram} alt='instagram' width={64} height={64}/>
                    <Image onClick={() => {window.open('https://www.facebook.com/MatiasLeandroFlores/')}} src={facebook} alt='facebook' width={64} height={64}/>
                    <Image onClick={() => {window.open('https://drive.google.com/file/d/1OLPW-9ng1Do1PmZKkOzLvBXi1ZD_XnjQ/view?usp=sharing')}} src={cv} alt='cv' width={64} height={64}/>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Contact);