import Capitalize from "./Capitalize";

export const titleCreate = (params, setTitle) => {
  const splitTitle = params.split("_");
  const arr = splitTitle.map((item) => Capitalize(item));
  setTitle(arr.join("") + "Settings");
};
