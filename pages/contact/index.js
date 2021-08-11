const Contact = () => {
    
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
            <div>
                <div>
                    <form>
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

            </div>
        </div>
    )
}

export default Contact;