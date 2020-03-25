import React from "react";
import { IconContext } from "react-icons";
import { BulletButton } from "../styled";

const ContextIcons = ({ icon, globalClass, children }) => {
  return (
    <IconContext.Provider
      value={{
        color: icon.color,
        className: globalClass
      }}
    >
      <BulletButton>
        {icon.text} {children}
      </BulletButton>
    </IconContext.Provider>
  );
};

export default ContextIcons;
