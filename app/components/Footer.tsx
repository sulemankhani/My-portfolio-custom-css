import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <footer className={style.footer}>
        <div className={style.innerContainer}>
          <a href="/" className={style.logoContainer}>
            <Image
              alt="profile"
              width={70}
              height={70}
              src="/pictures-cv/logo-profile.png"
              className={style.logoImage}
            />
            <span className={style.logoText}>Suleman Khan</span>
          </a>
          <p className={style.copyright}>© 2024 Suleman Khan</p>
          <span className={style.socialLinks}>
            <Link
              href="https://web.facebook.com/Sulemankhanpalestin/"
              target="_blank"
              className={style.socialLink}
            >
              <BsFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/suelmankhan334/"
              target="_blank"
              className={style.socialLink}
            >
              <BsInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/suleman-khan-2478212b4/"
              target="_blank"
              className={style.socialLink}
            >
              <BsLinkedin />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
