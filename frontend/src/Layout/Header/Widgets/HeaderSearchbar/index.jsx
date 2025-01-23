import FullSearch from "./FullSearch";
import IconSearch from "./IconSearch";

const HeaderSearchbar = ({ fullSearch = false }) => {
  return <>{fullSearch ? <FullSearch /> : <IconSearch />}</>;
};

export default HeaderSearchbar;
