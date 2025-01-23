import AccountContext from "@/Context/AccountContext";
import { useContext } from "react";

const AddressTable = ({ address }) => {
  const { accountData } = useContext(AccountContext);
  return (
    <>
      <div className="top">
        <h6>
          {accountData?.name} <span>{address?.title}</span>
        </h6>
      </div>
      <div className="middle">
        <div className="address">
          <p>{address?.street}, {address?.city}</p>
          <p>{address?.state?.name}, {address?.country?.name}</p>
          <p>{address?.pincode}</p>
        </div>
        <div className="number">
          <p>
            Phone: +{address?.country_code} {address?.phone}
          </p>
        </div>
      </div>
    </>
  );
};

export default AddressTable;
