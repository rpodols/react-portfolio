import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage();
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

  return (
    <section>
      <h1 className="header-format" id="contact">Contact Me:</h1>
        <form className="form-format" id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="Name" />
            </div>
            <br></br>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" defaultValue={email} name="Email" onBlur={handleChange} />
            </div>
            <br></br>
            <div>
                <label htmlFor="message">Message: </label>
                <textarea name="Message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>

        <div>
            <br></br>
            <br></br>
            <p className="header-format">Want to reach out now?</p>
            <p className="header-format">Email: rdpodols@gmail.com</p>
        </div>

    </section>
  );
}

export default Contact;