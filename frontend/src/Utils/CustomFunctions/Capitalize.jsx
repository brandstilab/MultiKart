const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default Capitalize;

export const CapitalizeMultiple = (str) => {
  return str?.split(" ").map(Capitalize).join(" ");
};
