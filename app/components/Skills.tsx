import React from "react";
import style from "./skills.module.css";
const Skills = () => {
  return (
    <div id="Skills">
      <section className={style.section}>
        <div className={style.container}>
          <h1 className={style.title}>Skills</h1>
          <div className={style.skillsWrapper}>
            <div className={style.skill}>
              <div className={style.iconWrapper}>
                <svg
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 419.931 419.931"
                  xmlSpace="preserve"
                >
                  <path d="M282.895 352.367a18.64 18.64 0 01-5.579-5.25 18.972 18.972 0 01-1.771-3.125H28.282V100.276h335.624v159.138c7.165.647 13.177 5.353 15.701 11.797a18.66 18.66 0 017.344-2.213 18.654 18.654 0 015.236.293V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573 15.992 0 26.565 0 39.561v309.146c0 12.996 10.573 23.568 23.568 23.568h257.179a18.522 18.522 0 01-1.302-13.066 18.643 18.643 0 013.45-6.842zm55.13-296.798a8.703 8.703 0 018.702-8.703h8.702a8.702 8.702 0 018.702 8.703v9.863a8.702 8.702 0 01-8.702 8.702h-8.702a8.701 8.701 0 01-8.702-8.702v-9.863zm-40.465 0a8.703 8.703 0 018.702-8.703h8.703a8.702 8.702 0 018.702 8.703v9.863a8.702 8.702 0 01-8.702 8.702h-8.703a8.702 8.702 0 01-8.702-8.702v-9.863zm-40.466 0a8.703 8.703 0 018.702-8.703h8.702a8.702 8.702 0 018.703 8.703v9.863a8.702 8.702 0 01-8.703 8.702h-8.702a8.703 8.703 0 01-8.702-8.702v-9.863z" />
                  <path d="M419.875 335.77l-2.615-14.83a3.673 3.673 0 00-4.255-2.979l-13.188 2.324a49.468 49.468 0 00-6.005-10.38l8.614-10.268a3.672 3.672 0 00.847-2.68 3.682 3.682 0 00-1.3-2.494l-11.534-9.68a3.678 3.678 0 00-5.176.453l-8.606 10.26a49.3 49.3 0 00-11.271-4.104V278a3.675 3.675 0 00-3.673-3.674h-15.06A3.675 3.675 0 00342.98 278v13.392a49.253 49.253 0 00-11.271 4.104l-8.608-10.259a3.674 3.674 0 00-5.175-.453l-11.535 9.679a3.681 3.681 0 00-1.299 2.494c-.084.971.22 1.937.846 2.683l8.615 10.266a49.643 49.643 0 00-6.005 10.38l-13.188-2.325a3.677 3.677 0 00-4.255 2.979l-2.614 14.83a3.671 3.671 0 002.977 4.255l13.198 2.326a49.466 49.466 0 002.073 11.812l-11.6 6.695a3.67 3.67 0 00-1.345 5.016l7.529 13.041a3.665 3.665 0 003.18 1.836c.639 0 1.272-.166 1.836-.492l11.609-6.703a49.482 49.482 0 009.18 7.709l-4.584 12.593c-.332.916-.289 1.926.123 2.809s1.157 1.566 2.072 1.898l14.148 5.149a3.669 3.669 0 004.708-2.194l4.583-12.593a49.83 49.83 0 0011.988 0l4.584 12.593a3.668 3.668 0 004.707 2.194l14.15-5.149a3.674 3.674 0 002.193-4.707l-4.584-12.591a49.756 49.756 0 009.18-7.709l11.609 6.703a3.683 3.683 0 002.787.367 3.672 3.672 0 002.229-1.711l7.529-13.043a3.677 3.677 0 00.367-2.787 3.681 3.681 0 00-1.712-2.229l-11.598-6.693a49.482 49.482 0 002.071-11.812l13.198-2.327a3.664 3.664 0 002.37-1.511 3.6 3.6 0 00.629-2.745zm-65.691 23.566c-11.155 0-20.2-9.045-20.2-20.201s9.046-20.2 20.2-20.2c11.156 0 20.201 9.044 20.201 20.2s-9.045 20.201-20.201 20.201zM164.695 235.373a12.3 12.3 0 00-7.096-11.119l-39.455-18.332 39.456-18.334a12.304 12.304 0 007.095-11.118v-.319c0-4.21-2.119-8.075-5.665-10.334a12.248 12.248 0 00-6.606-1.916c-1.778 0-3.563.391-5.16 1.133l-63.078 29.333a12.303 12.303 0 00-7.092 11.117v.877c0 4.743 2.782 9.104 7.093 11.118l63.084 29.336a12.265 12.265 0 0011.759-.786 12.213 12.213 0 005.666-10.335l-.001-.321zM226.932 134.012a12.301 12.301 0 00-9.901-5.03h-.314a12.224 12.224 0 00-11.679 8.516l-41.56 128.772a12.317 12.317 0 001.781 10.962 12.306 12.306 0 009.901 5.029h.315a12.217 12.217 0 0011.672-8.516l41.555-128.762a12.29 12.29 0 00-1.77-10.971zM308.001 194.366l-63.079-29.333a12.303 12.303 0 00-5.152-1.131c-2.358 0-4.644.661-6.605 1.912a12.2 12.2 0 00-5.671 10.337v.319c0 4.746 2.783 9.111 7.097 11.123l39.454 18.33-39.455 18.331a12.3 12.3 0 00-7.096 11.119v.321c0 4.205 2.119 8.066 5.669 10.336a12.25 12.25 0 006.595 1.923c1.792 0 3.527-.383 5.169-1.141l63.082-29.336c4.307-2.009 7.088-6.371 7.088-11.114v-.877a12.313 12.313 0 00-7.096-11.119z" />
                </svg>
              </div>
              <div className={style.textWrapper}>
                <h2 className={style.skillTitle}>Web Development</h2>
                <p className={style.skillDesc}>
                  I specialize in building clean, responsive, and user-friendly
                  websites that are as functional as they are visually
                  appealing.
                </p>
              </div>
            </div>

            <div className={style.skill}>
              <div className={style.iconWrapper}>
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.955.5c-1.55 0-2.803.52-3.672 1.385A4.385 4.385 0 004 5a4.385 4.385 0 001.726 3.5 4.357 4.357 0 00-.443.385A4.385 4.385 0 004 12a4.385 4.385 0 001.698 3.479A4.501 4.501 0 1013 19v-3.258a4.5 4.5 0 005.302-7.264A4.385 4.385 0 0020 5c0-1.123-.424-2.258-1.283-3.114C17.848 1.021 16.595.5 15.045.5h-6.09zM11 9.5H8.955c-1.087 0-1.811.354-2.26.802A2.386 2.386 0 006 12c0 .627.235 1.24.694 1.698.45.447 1.174.802 2.26.802H11v-5zm-3.88 7.434A2.5 2.5 0 018.5 16.5H11V19a2.5 2.5 0 01-.434 1.38 2.483 2.483 0 01-4.503-.895 2.484 2.484 0 011.057-2.55zM13 7.5h2.045c1.087 0 1.811-.354 2.26-.802A2.386 2.386 0 0018 5c0-.626-.235-1.24-.694-1.698-.45-.448-1.174-.802-2.26-.802H13v5zm-2 0H8.955c-1.087 0-1.811-.354-2.26-.802A2.386 2.386 0 016 5c0-.626.235-1.24.694-1.698.45-.448 1.174-.802 2.26-.802H11v5zm4.5 6.985a2.485 2.485 0 110-4.97 2.485 2.485 0 010 4.97z"
                    fill="#000"
                  />
                </svg>
              </div>
              <div className={style.textWrapper}>
                <h2 className={style.skillTitle}>UI/UX Designing</h2>
                <p className={style.skillDesc}>
                  My approach to UI/UX design is centered around understanding
                  the user's needs and creating intuitive, enjoyable
                  experiences.
                </p>
              </div>
            </div>

            <div className={style.skill}>
              <div className={style.iconWrapper}>
              <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 22.5h2.52c.96 0 1.58-.68 1.4-1.51l-.41-1.81h-4.5l-.41 1.81c-.18.78.5 1.51 1.4 1.51zM14.26 19.17l1.73-1.54c.97-.86 1.01-1.46.24-2.43l-3.05-3.87c-.64-.81-1.69-.81-2.33 0L7.8 15.2c-.77.97-.77 1.6.24 2.43l1.73 1.54M12.01 11.12v2.53M12.52 5h-1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM3.27 14.17h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM20.73 14.17h-1c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM10.52 3.56c-3.81.45-6.77 3.68-6.77 7.61M20.25 11.17c0-3.92-2.94-7.14-6.73-7.61"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
              </div>
              <div className={style.textWrapper}>
                <h2 className={style.skillTitle}>Graphic Designing</h2>
                <p className={style.skillDesc}>
                  With a keen eye for detail and a strong sense of aesthetics, I
                  create compelling visuals that communicate ideas clearly and
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
