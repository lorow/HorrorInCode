import React from 'react';
import './style.scss';

export default function ContactPanel(props) {
  return (
    <section className="contact-section">
      <hr className="contact--decorative_stroke"/>
      <h1 className="contact--title">Have a question?</h1>
      
      <p className="contact--additional_info">
        Let me know if I can be of help and send a message!
      </p>

      <p className="contact--additional_info--email">
        <a href="mailto:goik.zdzislaw@gmail.com">goik.zdzislaw@gmail.com</a>
      </p>

      <p className="contact--additional_info--subsection">
        Or meet me here: 
      </p>

      <form className="contact--email_form" onSubmit={props.formHandler}>
        <input type="text" placeholder="Name" name="name" required/>
        <input type="email" placeholder="Email" name="email" required/>
        <input type="text" placeholder="Subject" name="subject" required/>
        <textarea name="description" placeholder="Your message  " cols="30" rows="10" required></textarea>
        <input type="submit" value="send away!"/>
      </form>
    </section>
  )
}