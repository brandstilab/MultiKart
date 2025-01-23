import CompareContext from "@/Context/CompareContext";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

const StickyCompare = ({ CompareData }) => {
  const { compareState } = useContext(CompareContext);
  const { t } = useTranslation("common");
  return (
    <div className="compare-fix ">
      <Link href="/compare">
        <h5>
          {t("Compare")} <span>{`(${CompareData?.length})`}</span>
        </h5>
      </Link>
    </div>
  );
};

export default StickyCompare;
