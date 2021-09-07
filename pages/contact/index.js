import { Formik,Form,Field } from "formik";

const Contact = () => {
    
    return (
        <div className='container'>
            <h1>Contact me</h1>
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
                        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(fields.message)){
                            errors.message = "The subject can only contain letters and spaces"
                        }
                        return errors
                    }}
                    onSubmit={(fields) => {
                        console.log(fields)
                    }}
                >
                    {({errors,touched}) => (
                    <Form className="form">
                        <label>Name</label>
                        <Field type="text" placeholder="John Doe" name="nick"/>
                        {touched.nick && errors.nick ? <p>{errors.nick}</p> : ""}

                        <label>Email</label>
                        <Field type="email" placeholder="correo@correo.com" name="email"/>
                        {touched.email && errors.email ? <p>{errors.email}</p> : ""}

                        <label>Subject</label>
                        <Field type="text" placeholder="Job offer" name="subject"/>
                        {touched.subject && errors.subject ? <p>{errors.subject}</p> : ""}

                        <label>Message</label>
                        <Field as="textarea" placeholder="Lorem ipsum..." name="message"/>
                        {touched.message && errors.message ? <p>{errors.message}</p> : ""}

                      <button className="buttonMail" type="submit">send</button>
                    </Form>   
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Contact;