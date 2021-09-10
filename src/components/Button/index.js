import React from "react";
import "./styles.scss";

import cn from "classnames";

export default ({
  label,
  className = "",
  disabled = false,
  onClick = () => {},
  color = "primary",
  ...rest
}) => {

  const handleClick = (event) => {
    if (disabled) return
    onClick(event)
  }

  const classes = cn(
    "button-component",
    className,
    color,
    disabled && "button-component-disabled"
  )

  return (
    <button className={classes} onClick={handleClick} {...rest}>
      {label}
    </button>
  )
}
