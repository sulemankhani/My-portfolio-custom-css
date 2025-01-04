import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";
import style from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={style.headerContainer}>
      <header className={style.header}>
        <div className={style.innerContainer}>
          <a href="/" className={style.logoContainer}>
            <Image
              width={50}
              height={50}
              alt="logo"
              src={"/pictures-cv/logo-profile.png"}
              className={style.logoImage}
            />
            <span className={style.logoText}>Suleman Khan</span>
          </a>
          <nav className={style.nav}>
            <Link href="/" className={style.navLink}>Home</Link>
            <Link href="#Project" className={style.navLink}>Projects</Link>
            <Link href="#Skills" className={style.navLink}>Skills</Link>
            <Link href="#About" className={style.navLink}>About</Link>
            <Link href="#Testimonials" className={style.navLink}>Reviews</Link>
            <Link href="#Contact" className={style.navLink}>Contact</Link>
          </nav>
          <Link href="/pictures-cv/cv.pdf" target="_blank">
            <button className={style.button}>
              Download CV
              <AiOutlineCloudDownload className={style.downloadIcon} />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
