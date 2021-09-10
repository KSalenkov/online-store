import React from "react";
import "./styles.scss";

const github = "https://github.com/KSalenkov/online-store";
const docker = "https://hub.docker.com/repository/docker/salki/online-store"

export default () => (
  <div className="footer-container">
    <p>eSKey 2021</p>
    <p><a href={github} target="_blank">GitHub</a></p>
    <p><a href={docker} target="_blank">Docker</a></p>
  </div>
)
