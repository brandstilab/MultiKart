import CustomModal from "@/Components/Widgets/CustomModal";
import { useEffect, useRef, useState } from "react";

const VideoPlayModal = ({ modal, setModal, productState }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const [videType, setVideType] = useState(["video/mp4", "video/webm", "video/ogg"]);
  const [audioType, setAudioType] = useState(["audio/mpeg", "audio/wav", "audio/ogg"]);
  const [type, setType] = useState("img");
  const slider1 = useRef();
  const slider2 = useRef();
  const { nav1, nav2 } = state;
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  return (
    <CustomModal modal={modal ? true : false} setModal={setModal} classes={{ modalClass: "theme-modal-2 modal-lg audio-video-modal" }}>
      <div className="modal-media">
        {productState?.preview_type === "video" ? (
          <video width="1000" height="590" controls className="w-100 h-100">
            <source src={productState?.preview_video_file ? productState?.preview_video_file?.original_url : ""} type={productState?.preview_video_file?.mime_type} />
          </video>
        ) : productState?.preview_type === "audio" ? (
          <audio controls>
            <source src={productState?.preview_audio_file ? productState?.preview_audio_file?.original_url : ""} type={productState?.preview_audio_file?.mime_type} />
          </audio>
        ) : null}
      </div>
    </CustomModal>
  );
};

export default VideoPlayModal;
