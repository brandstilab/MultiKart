import Image from "next/image";
import { Input, Label } from "reactstrap";
import NoDataFound from "../../CommonComponent/NoDataFound";

const AttachmentData = ({ state, dispatch, attachmentsData, refetch }) => {
  console.log("🚀 ~ AttachmentData ~ attachmentsData:", attachmentsData);
  let mimeImageMapping = [
    { mimeType: "application/pdf", imagePath: "/assets/images/pdf.png" },
    { mimeType: "application/msword", imagePath: "/assets/images/word.png" },
    { mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", imagePath: "/assets/images/word.png" },
    { mimeType: "application/vnd.ms-excel", imagePath: "/assets/images/xls.png" },
    { mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", imagePath: "/assets/images/xls.png" },
    { mimeType: "application/vnd.ms-powerpoint", imagePath: "/assets/images/folder.png" },
    { mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation", imagePath: "/assets/images/folder.png" },
    { mimeType: "text/plain", imagePath: "/assets/images/txt.png" },
    { mimeType: "audio/mpeg", imagePath: "/assets/images/sound.png" },
    { mimeType: "audio/wav", imagePath: "/assets/images/sound.png" },
    { mimeType: "audio/ogg", imagePath: "/assets/images/sound.png" },
    { mimeType: "video/mp4", imagePath: "/assets/images/video.png" },
    { mimeType: "video/webm", imagePath: "/assets/images/video.png" },
    { mimeType: "video/ogg", imagePath: "/assets/images/video.png" },
    { mimeType: "application/zip", imagePath: "/assets/images/zip.png" },
    { mimeType: "application/x-tar", imagePath: "/assets/images/zip.png" },
    { mimeType: "application/gzip", imagePath: "/assets/images/zip.png" },
  ];

  // Deleting the selected images from media module
  const ChoseImages = (e, item) => {
    let temp = [...state.deleteImage];
    if (temp?.includes(item.id) && !e.target.checked) {
      temp.splice(temp.indexOf(item.id), 1);
      dispatch({ type: "DeleteSelectedImage", payload: temp });
    }
    if (e.target.checked) {
      dispatch({ type: "DeleteSelectedImage", payload: [...state.deleteImage, item.id] });
    }
  };

  const getMimeTypeImage = (mimeType) => {
    return mimeImageMapping?.find((value) => value.mimeType === mimeType)?.imagePath;
  };
  return (
    <>
      {attachmentsData?.length > 0 ? (
        attachmentsData?.map((elem, i) => (
          <div key={i}>
            <div className="library-box">
              <Input type="checkbox" id={elem.id} checked={state.deleteImage?.includes(elem.id)} onChange={(e) => ChoseImages(e, elem)} />
              <Label htmlFor={elem.id}>
                <div className="ratio ratio-1x1">{elem.mime_type && elem.mime_type.startsWith("image") ? <Image src={elem.original_url} className="img-fluid" alt="ratio image" height={130} width={130} /> : <Image src={getMimeTypeImage(elem.mime_type)} alt="attachment" className="img-fluid" height={130} width={130} />}</div>
              </Label>
            </div>
          </div>
        ))
      ) : (
        <NoDataFound noImage={false} title={"NoMediaFound"} />
      )}
    </>
  );
};

export default AttachmentData;
