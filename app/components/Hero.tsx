"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import  style  from "./hero.module.css";

const HeroSection = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.imageContainer}>
        <Image
            alt="hero"
            src="/pictures-cv/profile.png"
            width={300}
            height={300}
            priority
            className={style.heroImage}
          />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.title}>
          Hello I AM <br />
          Suleman Khan
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer","UI/UX Designer","Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className={style.divider}></div>
          <p className={style.description}>
          As a passionate Front-End Developer, I specialize in crafting responsive, visually appealing, and user-friendly websites and web applications. With a deep understanding of HTML5, CSS3, JavaScript, and TypeScript, I bring designs to life, ensuring seamless user experiences across all devices. My expertise in React.js, Angular, and modern front-end frameworks enables me to build dynamic and interactive user interfaces...
          </p>
          <div className={style.buttonContainer}>
            <Link href="#Contact" passHref>
              <button className={style.contactButton}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



