import Btn from "@/Elements/Buttons/Btn";
import Link from "next/link";
import React from "react";
import VideoPlayModal from "./AllModal/VideoPlayModal";

const DigitalImageOptions = ({ product }) => {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <div className="preview-box">
        {product.preview_type == "video" && product.preview_video_file?.original_url ? (
          <Btn className="media-btn" onClick={() => setModal("video")}>
            {/* (click)="openModal(product.preview_video_file?.original_url || '', 'video')" */}
            <i className="ri-play-fill"></i>
          </Btn>
        ) : product.preview_type == "audio" && product.preview_audio_file?.original_url ? (
          <div className="media-btn" onClick={() => setModal("audio")}>
            {/* {(click = "openModal(product.preview_audio_file?.original_url || '', 'audio')")} */}
            <i className="ri-music-2-line"></i>
          </div>
        ) : product.preview_type == "url" && product.preview_url ? (
          <div className="preview-btn">
            <Link href={product.preview_url} target="_blank">
              <span>
                <i className="ri-share-box-line"></i> {"live_preview"}{" "}
              </span>
            </Link>
          </div>
        ) : null}
      </div>
      <VideoPlayModal productState={product} modal={modal} setModal={setModal} />
      {/* 
<Modal>
<div className="modal-content">
  <div className="modal-header p-0">
    <Btn class="'btn btn-close" id="profile_modal_close_btn" onClick={"modal.close('Cross click')"}>
       <i className="ri-close-line"/>
    </Btn>
  </div>
  <div className="modal-body p-3 d-flex align-items-center justify-content-center">
    (video_url){
      @if(type == 'video'){
      <video autoplay="true" loop="true" className="w-100 h-100">
        <source [src]="(video_url)" type="video/mp4">
      </video>
    }@else if(type == 'audio'){
      <audio controls autoplay="false" loop="true">
        <source [src]="(video_url)" type="audio/mp3">
      </audio>
      }
    }
  </div>
</div>
</Modal> */}
    </>
  );
};

export default DigitalImageOptions;
