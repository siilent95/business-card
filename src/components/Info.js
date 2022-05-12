import React from "react";
import Photo from "../images/photo.jpg";
import IconEmail from "../images/Iconemail.png";
import IconLinked from "../images/iconLinked.png";

export default function Info() {
  return (
    <div className="info">
      <img src={Photo} alt="" className="info--photo" />
      <h1 className="info--name_title">Carlos Zuniga</h1>
      <h3 className="info--career">Frontend Developer</h3>
      <h4 className="info--website">czuniga.dev</h4>
      <div className="buttons">
        <button className="buttons--email">
          <img src={IconEmail} alt="" />
          Email
        </button>
        <a
          className="buttons--link"
          target="_blank"
          href="https://www.linkedin.com/in/czunigadev/"
          rel="noreferrer"
        >
          <button className="buttons--linked">
            <img src={IconLinked} alt="" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
