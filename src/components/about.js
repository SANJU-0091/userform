import React from "react";

export default function About() {
  return (
    <div className="container my-5" id="about">
      <div className="text-center mb-5">
        <h1> About Me</h1>
        <p className="text-muted">
          Get to know more about me
        </p>
      </div>

      <div className="row align-items-center">

        {/* About Content */}
        <div className="col-md-7">
          <h2>Hi, I'm sanju  </h2>

          <p className="lead">
            I am an engineering student with a strong interest in
            web development and modern technologies.
          </p>

          <p>
            I enjoy building responsive and user-friendly web applications
            using HTML, CSS, JavaScript and React.js.
          </p>

          <p>
            I believe in learning by building real-world projects and
            continuously improving my technical skills.
          </p>

          <a href="/_resume.pdf" download className="btn btn-primary" > Download Resume </a>
        </div>

        {/* Skills / Info */}
        <div className="col-md-5 mt-4 mt-md-0">
          <div className="card shadow">
            <div className="card-body">

              <h4 className="card-title mb-4">
                My Skills
              </h4>

              <p>HTML</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "90%" }}>
                  90%
                </div>
              </div>

              <p>CSS</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "85%" }}>
                  85%
                </div>
              </div>

              <p>JavaScript</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "80%" }}>
                  80%
                </div>
              </div>

              <p>React.js</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}>
                  75%
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

