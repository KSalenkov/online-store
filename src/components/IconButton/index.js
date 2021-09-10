import React from "react";
import "./styles.scss";

import cn from "classnames";

export default ({
  children,
  className = "",
  badge,
  disabled = false,
  onClick = () => {},
  ...rest
}) => {
  const handleClick = (e) => {
    if (disabled) return;
    onClick(e)
  }
  
  const classes = cn(
    "icon-button-component",
    className,
    disabled  ? "disabled-icon-button" : ""
  )
  
  return (
    <button className={classes} onClick={handleClick} {...rest}>
      {badge && (
        <div className="badge">
          <p>{badge}</p>
        </div>
      )}
      {children}
    </button>
  )
}
