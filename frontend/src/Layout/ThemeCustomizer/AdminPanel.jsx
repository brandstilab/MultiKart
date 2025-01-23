import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const AdminPanel = () => {
  const { t } = useTranslation("common");

  return (
    <div className="setting-section">
      <div className="setting-inner-title">
        <Link target="_blank" href="https://multikart-admin-next-rest.vercel.app/">
          {t("Admin")}
        </Link>
        <p>{t("BackendAdminPanel")}</p>
      </div>
    </div>
  );
};

export default AdminPanel;
