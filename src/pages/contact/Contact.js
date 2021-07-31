import React, {useState, useRef} from 'react';
import styles from './Contact.module.css';
import emailjs from 'emailjs-com';
import Button from '../../components/button/Button';

function Contact() {
    const nameRef = useRef();
    const subjectRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [loading, toggleLoading] = useState('');
    const [messageSuccess, toggleMessageSuccess] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        toggleLoading('true');
        toggleMessageSuccess(true);

        emailjs.sendForm('service_e6r01nn', 'template_kd6f33z', e.target, 'user_bFw80Fh9kU65SmtGIjzNr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        toggleLoading(false);
    }

    return <main className={styles.form}>
        <form onSubmit={sendEmail} className={styles.contact}>
            {loading && <p className={styles.loading}>Data is being loaded...</p>}

            <h1 className={styles.h1}>Contact form</h1>
            <input
                type='text'
                name='name'
                placeholder='Name'
                ref={nameRef} required
                className={styles.input}
            />
            <input
                type='text'
                name='subject'
                placeholder='Subject'
                ref={subjectRef} required
                className={styles.input}
            />
            <input
                type='email'
                name='email'
                placeholder='Email'
                ref={emailRef} required
                className={styles.input}
            />
            <textarea
                name='message'
                placeholder='Your message'
                rows='4'
                ref={messageRef} required
                className={styles.textarea}
            />
            <Button
                disabled={loading}
                buttonText='Send'
            />

            {messageSuccess === true &&
            <p className={styles.success}>Your message has been sent successfully.</p>}
        </form>

    </main>
}

export default Contact;