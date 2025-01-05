import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <div id="Contact">
      <section className={style.section}>
        <div className={style.container}>
          <div className={style.textCenter}>
            <h1 className={style.title}>Contact Us</h1>
            <p className={style.subtitle}>
              Feel free to reach out to us for any questions or concerns.
            </p>
          </div>
          <div className={style.formContainer}>
            <form
              action=""
              method="POST"
              className={style.form}
            >
              <div className={style.inputGroup}>
                <label htmlFor="name" className={style.inputLabel}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={style.input}
                  required
                />
              </div>
              <div className={style.inputGroup}>
                <label htmlFor="email" className={style.inputLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={style.input}
                  required
                />
              </div>
              <div className={style.inputGroup}>
                <label htmlFor="message" className={style.inputLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={style.textarea}
                  required
                />
              </div>
              <div className={style.submitButtonGroup}>
                <button type="submit" className={style.submitButton}>
                  Send Message
                </button>
              </div>
              <div className={style.contactInfo}>
                <Link href="mailto:sulemankh223322@gmail.com" className={style.email}>
                  sulemankh223322@gmail.com
                </Link>
                <p className={style.address}>
                  Pakistan
                  <br />
                  City of Light Karachi
                </p>
                <span className={style.socialLinks}>
                  <Link
                    href="https://web.facebook.com/Sulemankhanpalestin/"
                    target="_blank"
                    className={style.socialIcon}
                  >
                    <BsFacebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/suelmankhan334/"
                    target="_blank"
                    className={style.socialIcon}
                  >
                    <BsInstagram />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/suleman-khan-2478212b4/"
                    target="_blank"
                    className={style.socialIcon}
                  >
                    <BsLinkedin />
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
