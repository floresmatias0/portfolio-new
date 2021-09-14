import { Formik,Form,Field } from "formik";
import Swal from 'sweetalert2'
import axios from 'axios';
import { useState } from "react";
import Image from "next/image"
import pacman from "../../assets/images/pacman.gif"
import { withTranslation } from "react-i18next";

const Contact = ({t}) => {

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
                            errors.nick = "Please insert name to continue"
                        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(fields.nick)){
                            errors.nick = "The name can only contain letters and spaces"
                        }
                        //Validate email
                        if(!fields.email){
                            errors.email = 'Please insert email to continue'
                        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(fields.email)){
                            errors.email = 'The email can only contain letters, numbers, periods, scripts and underscore'
                        }
                        //Validate subject
                        if(!fields.subject){
                            errors.subject = "Please insert subject of the topic"
                        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(fields.subject)){
                            errors.subject = "The subject can only contain letters and spaces"
                        }
                        //Validate message
                        if(!fields.message){
                            errors.message = "Please insert message to send"
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
                                title: 'Message send, thanks!'
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
        </div>
    )
}

export default withTranslation()(Contact);