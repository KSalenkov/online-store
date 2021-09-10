import React from "react";
import "./styles.scss";

export default ({children, header, footer}) => (
  <div className="layout-container">
    {header && (
      <header>
        <div className="header-wrapper">
          <div className="header-content-container">
            {header}
          </div>
        </div>
      </header>
    )}

    <main>
      <div className="page-wrapper">
        <div className="page-content-container">
          {children}
        </div>
      </div>
    </main>

    {footer && (
      <footer>
        <div className="footer-wrapper">
          <div className="footer-content-container">
            {footer}
          </div>
        </div>
      </footer>
    )}
  </div>
)
