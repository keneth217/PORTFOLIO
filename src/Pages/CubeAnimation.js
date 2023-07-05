import React from "react";
import Skills from "./Skills";

const CubeAnimation = () => {
  return (
    <div className="container mt-5 vh-100">
      <div className="row mt-5 text-center ">
        <div className="col mt -3">
          <h6 className="justify-content-center">Bonjour</h6>
          <h4>
            i am <br />
            kipyegon keneth
          </h4>
          <p>A student, learner, software engineer</p>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <p>
            Ever since writing my first program and manipulating it to produce
            my desired output, the rest has been an absolute love of code. I
            still remember sitting in front of a computer and making it print
            "hello world" for the first time on my screen. Guess what! It was
            magic to me, and since then, I have developed a strong desire to
            learn coding. There is certainly yet more to learn, yet more to
            solve, yet more to build, and for this, I am very grateful.
            Skills/interests: HTML | BOOTSRAP | ANGULAR JS | TYPESCRIPT |
            FLUTTER | UI/UX DESIGN. I am eagerly grabbing onto any other
            programming languages, frameworks, or principles to solve modern
            problems with workable solutions. Never give up. Believe in
            yourself. Be passionate. Work hard. It’s never too late. I'm just
            scratching the surface; I still have a long way to go to get to
            where I want to be. Will you help me get there?
          </p>
        </div>
        <div className="col">
          <div className="row justify-content-end">
            <div className="col-4">
              <div className="containercube text-center mt-4">
                <div id="cube">
                  <div className="face front">student</div>
                  <div className="face back">engineer</div>
                  <div className="face right">software</div>
                  <div className="face left">problem</div>
                  <div className="face top">learner</div>
                  <div className="face bottom">solver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default CubeAnimation;
