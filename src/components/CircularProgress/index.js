import React from "react";
import "./styles.scss";

import cn from "classnames";

export default ({className}) => (
  <div className={cn("circular-progress", className)}>
    <div className="label" />
  </div>
)
