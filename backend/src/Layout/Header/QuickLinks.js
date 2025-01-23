import { getPermissionArray } from "@/Components/Common/getPermissonArray";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import { QuickLinksData } from "../../Data/QuickLinks";
import useOutsideDropdown from "@/Utils/Hooks/CustomHooks/useOutsideDropdown";

const QuickLinks = () => {
    const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
    const { t } = useTranslation("common");
    return (
        <li className="d-inline-block">
            <div className="quick-dropdown-box dropdown">
                <div className={`dropdown-toggle btn btn-light-bg btn-sm ${isComponentVisible ? 'active' : ''}`} onClick={() => setIsComponentVisible((prev) => !prev)}>
                    {t("QuickLinks")}
                    <FaChevronDown />
                </div>
                <div className={`dropdown-menu ${isComponentVisible ? 'active' : ''}`}>
                    <div className="dropdown-title">
                        <h4>{t("QuickLinks")}</h4>
                    </div>
                    <ul ref={ref} className={`dropdown-list`}>
                        {QuickLinksData.map((quickLink, i) => (
                            <li key={i}>
                                <Link href={quickLink.path} index={i}>
                                    <div className="svg-box">
                                        {quickLink.icon}
                                    </div>
                                    <span>{t(quickLink.title)}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default QuickLinks;