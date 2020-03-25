import React, { Fragment } from "react";
import ContextIcons from "./contextIcons";
import { BulletButton } from "../styled";
const PillButton = ({ text, classname, icon, children }) => {
  return (
    <Fragment>
      {icon ? (
        <ContextIcons icon={icon} globalClass="rs-icon-global">
          {children}
        </ContextIcons>
      ) : (
        <BulletButton>{text}</BulletButton>
      )}
    </Fragment>
  );
};

export default PillButton;
