const VideoHomePageInitialValue = (data) => {
  let obj = {};

  return {
    videoFile: data?.content?.video?.video_url ? { original_url: data?.content?.video?.video_url } : "",

    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    ...obj,
  };
};

export default VideoHomePageInitialValue;
