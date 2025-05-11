import React from "react";
import "./QuickActionBtn.css";

const QuickActionBtn = ({ Icon, title }) => {
  return (
    <div className="quick-action-btn">
      <Icon className="mx-auto" />
      <p>{title}</p>
    </div>
  );
};

export default QuickActionBtn;
