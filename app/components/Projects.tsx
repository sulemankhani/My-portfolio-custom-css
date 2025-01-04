import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./project.module.css";

const Projects = () => {
  return (
    <div id="Project">
       <section className={style.textBrandText}>
      <div className={style.container}>
        <div className={style.textCenter}>
          <h1 className={style.smText3xl}>Projects</h1>
          <p className={style.lgW2_3}>
          Here’s a showcase of my projects in  Web Development, and UI/UX Design, highlighting my expertise and creative journey in each field...
          </p>
        </div>
        <div className={style.flexWrap}>
          {/* Project 1 */}
          <div className={`${style.transitionTransform} ${style.hoverScale110} ${style.lgW1_2} ${style.smW1_2} ${style.p6}`}>
            <div className={style.relative}>
              <Image
                width={600}
                height={360}
                alt="gallery"
                className={`${style.absolute} ${style.wFull} ${style.hFull} ${style.objectCover} ${style.objectCenter}`}
                src="/pictures-cv/static.png"
              />
              <div className={`${style.px8} ${style.py10} ${style.relative} ${style.z10} ${style.border4} ${style.borderGray200} ${style.bgWhite} ${style.opacity0} ${style.hoverOpacity100}`}>
                <h2 className={style.trackingWidest}>Static Resume Builder</h2>
                <h1 className={style.textLg}>Static Resume</h1>
                <p className={style.leadingRelaxed}>
                This is a Static resume builder project which is made by using html and css.
                </p>
                <Link href="https://hackathone-milestone-red.vercel.app" target="_blank">
                  <p className={style.viewProject}>View Project..</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={`${style.transitionTransform} ${style.hoverScale110} ${style.lgW1_2} ${style.smW1_2} ${style.p6}`}>
            <div className={style.relative}>
              <Image
                width={600}
                height={360}
                alt="gallery"
                className={`${style.absolute} ${style.wFull} ${style.hFull} ${style.objectCover} ${style.objectCenter}`}
                src="/pictures-cv/dynamic.png"
              />
              <div className={`${style.px8} ${style.py10} ${style.relative} ${style.z10} ${style.border4} ${style.borderGray200} ${style.bgWhite} ${style.opacity0} ${style.hoverOpacity100}`}>
                <h2 className={style.trackingWidest}>Dynamic Resume Builder</h2>
                <h1 className={style.textLg}>RESUME BUILDER</h1>
                <p className={style.leadingRelaxed}>
                  A Dynamic Resume Builder that helps you create a resume in minutes.
                </p>
                <Link href="https://milestone-3-nine-sable.vercel.app
" target="_blank">
                  <p className={style.viewProject}>View Project..</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className={`${style.transitionTransform} ${style.hoverScale110} ${style.lgW1_2} ${style.smW1_2} ${style.p6}`}>
            <div className={style.relative}>
              <Image
                width={600}
                height={360}
                alt="gallery"
                className={`${style.absolute} ${style.wFull} ${style.hFull} ${style.objectCover} ${style.objectCenter}`}
                src="/pictures-cv/gov.png"
              />
              <div className={`${style.px8} ${style.py10} ${style.relative} ${style.z10} ${style.border4} ${style.borderGray200} ${style.bgWhite} ${style.opacity0} ${style.hoverOpacity100}`}>
                <h2 className={style.trackingWidest}>Governor Initiative website Clone</h2>
                <h1 className={style.textLg}>Governor Initiative website</h1>
                <p className={style.leadingRelaxed}>
                This is a Governor Initiative website clone.
                </p>
                <Link href="https://sulemankhani-governor-initiative-website-clone-main.vercel.app

" target="_blank">
                  <p className={style.viewProject}>View Project..</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className={`${style.transitionTransform} ${style.hoverScale110} ${style.lgW1_2} ${style.smW1_2} ${style.p6}`}>
            <div className={style.relative}>
              <Image
                width={600}
                height={360}
                alt="gallery"
                className={`${style.absolute} ${style.wFull} ${style.hFull} ${style.objectCover} ${style.objectCenter}`}
                src="/pictures-cv/todo.png"
              />
              <div className={`${style.px8} ${style.py10} ${style.relative} ${style.z10} ${style.border4} ${style.borderGray200} ${style.bgWhite} ${style.opacity0} ${style.hoverOpacity100}`}>
                <h2 className={style.trackingWidest}>Todolist Projects</h2>
                <h1 className={style.textLg}>Todolist Projects</h1>
                <p className={style.leadingRelaxed}>
                There are todolist projects which is made by using typescript and inquirer.
                </p>
                <Link href="https://todoapp-lake-gamma.vercel.app
" target="_blank">
                  <p className={style.viewProject}>View Project..</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Projects;
