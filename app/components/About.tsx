import Image from "next/image";
import React from "react";
import Link from "next/link";
import style from "./about.module.css";
const About = () => {
  return (
    <div id="About">
      <section className={style.section}>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <h1 className={style.title}>About Me</h1>
          <div className={style.divider}></div>
          <p className={style.description}>
          As a passionate Front-End Developer, I specialize in crafting responsive, visually appealing, and user-friendly websites and web applications. With a deep understanding of HTML5, CSS3, JavaScript, and TypeScript, I bring designs to life, ensuring seamless user experiences across all devices. My expertise in React.js, Angular, and modern front-end frameworks enables me to build dynamic and interactive user interfaces.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod explicabo reiciendis eveniet tenetur unde rem voluptatibus hic ad, quam minima officiis ullam deleniti suscipit perspiciatis reprehenderit quae laudantium quisquam perferendis. Ducimus porro dolor dignissimos iusto, a repudiandae quos dolorum beatae harum impedit unde eveniet veniam quidem maxime repellat facere iure?
          </p>
          <div className={style.buttonContainer}>
            <Link href="/pictures-cv/cv.pdf" target="_blank">
              <button className={style.button}>View Resume</button>
            </Link>
          </div>
        </div>
        <div className={style.rightContainer}>
          <Image
            width={720}
            height={600}
            className={style.image}
            alt="hero"
            src="/pictures-cv/logo-profile.png"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
