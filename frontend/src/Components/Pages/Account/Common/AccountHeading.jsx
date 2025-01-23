import React from "react";
import { useTranslation } from "react-i18next";

const AccountHeading = ({ title, classes }) => {
  const { t } = useTranslation("common");

  return (
    <div className={classes ? classes : ""}>
      <h3>{t(title)}</h3>
    </div>
  );
};

export default AccountHeading;
