import Avatar from "@/Components/Widgets/Avatar";
import AccountContext from "@/Context/AccountContext";
import useCreate from "@/Utils/Hooks/useCreate";
import React, { useContext, useRef } from "react";
import { RiCloseLine, RiImageEditLine, RiPencilFill } from "react-icons/ri";
import { Input } from "reactstrap";

const SidebarProfile = () => {
  const { accountData, refetch } = useContext(AccountContext);
  const fileInputRef = useRef(null);
  const handleImageLabelClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const { mutate } = useCreate(`/updateProfile`, false, false, "profile updated successfully", () => refetch());
  const handleOnChange = (event) => {
    const formData = new FormData();
    formData.append("profile_image_id", "");
    formData.append("profile_image", event.target.files[0]);
    formData.append("_method", "PUT");
    // Put your logic here

  };

  const handleRemove = () => {
    const formData = new FormData();
    formData.append("profile_image_id", "");
    formData.append("_method", "PUT");
    // Put your logic here
  };

  return (
    <>
      <div className="profile-top">
        <div className="profile-top-box">
          <div className="profile-image">
            <div className="position-relative h-100">
              <Avatar data={accountData?.profile_image} name={accountData?.name} customImageClass={"update_img"} alt="profile-image" height={108} width={108} />
              <div className="user-icon" onClick={handleImageLabelClick}>
                <Input type="file" onChange={handleOnChange} innerRef={fileInputRef} className="d-none" accept="image/*" name="imageUpload" />
                <RiImageEditLine className=" d-lg-block d-none" />
                <RiPencilFill className="edit-icon d-lg-none" />
              </div>
            </div>
          </div>
          {accountData?.profile_image && accountData?.profile_image?.original_url && (
            <div className="user-icon-2" onClick={handleRemove}>
              <RiCloseLine />
            </div>
          )}
        </div>
        <div className="profile-detail">
          <h5>{accountData?.name}</h5>
          <h6>{accountData?.email}</h6>
        </div>
      </div>
    </>
  );
};

export default SidebarProfile;
