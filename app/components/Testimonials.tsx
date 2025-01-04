import Image from "next/image";
import React from "react";
import style from "./testimonials.module.css";
const Testimonials = () => {
  return (
    <div id="Testimonials" className="bg-brand-bg">
      <section className={style.section}>
      <div className={style.container}>
        <h1 className={style.title}>Words from My Clients</h1>
        <div className={style.testimonialsWrapper}>
          <div className={style.testimonialItem}>
            <div className={style.testimonialContent}>
              <Image
                width={500}
                height={500}
                alt="testimonial"
                className={style.testimonialImage}
                src="/pictures-cv/testimonial1.jpeg"
              />
              <p className={style.testimonialText}>
                "Working with Suleman was a game-changer for our brand. His designs
                brought our vision to life, making our brand stand out with a
                professional and eye-catching look. His attention to detail and
                creativity are exceptional, and the feedback from our customers has
                been amazing!"
              </p>
              <span className={style.divider}></span>
              <h2 className={style.clientName}>Sarah Johnson</h2>
              <p className={style.clientTitle}>Marketing Manager at Creative Co.</p>
            </div>
          </div>
          <div className={style.testimonialItem}>
            <div className={style.testimonialContent}>
              <Image
                width={500}
                height={500}
                alt="testimonial"
                className={style.testimonialImage}
                src="/pictures-cv/testimonial2.jpeg"
              />
              <p className={style.testimonialText}>
                "Suleman built a website for my business that exceeded my expectations.
                The site is sleek, easy to navigate, and looks fantastic on all
                devices. His dedication to creating a functional yet beautiful site
                has truly elevated our online presence. I couldn’t be happier!"
              </p>
              <span className={style.divider}></span>
              <h2 className={style.clientName}>Emily Roberts</h2>
              <p className={style.clientTitle}>Owner of Green Earth Boutique</p>
            </div>
          </div>
          <div className={style.testimonialItem}>
            <div className={style.testimonialContent}>
              <Image
                width={500}
                height={500}
                alt="testimonial"
                className={style.testimonialImage}
                src="/pictures-cv/testimonial3.jpg"
              />
              <p className={style.testimonialText}>
                "The UI/UX design Suleman created for our app was phenomenal. He took
                the time to understand our users and crafted a seamless experience
                that’s both intuitive and visually appealing. Our users love the new
                design, and our app engagement has significantly improved."
              </p>
              <span className={style.divider}></span>
              <h2 className={style.clientName}>Abbas Khan</h2>
              <p className={style.clientTitle}>Product Manager at Fintech Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Testimonials;
