export const FilterItemIds = ({ mainData, neededData }) => mainData?.filter((item) => neededData?.includes(item.id));
