import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const VideoHomePageSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));
  if (values["videoFile"]) {
    values["content"]["video"]["video_url"] = values["videoFile"].original_url;
  } else values["content"]["video"]["video_url"] = "";

  
  const updatedValues = {
    ...values,
    content: {
      ...values.content,
      products_ids: Array.from(new Set(concatDynamicProductKeys(values))),
    },
  };

  // Put Add Or Update Logic Here;
};
export default VideoHomePageSubmit;
