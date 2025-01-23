let storePermission = {};
const ISSERVER = typeof window === "undefined";
if (!ISSERVER) storePermission = localStorage.getItem("account") && JSON.parse(localStorage.getItem("account"));
const storedRole = JSON.parse(localStorage.getItem("role"));
// Given this ignore list for adding below menus
const paymentPermission = storedRole?.name == "vendor" ? "PaymentDetails" : "";
const ignoreList = ["Dashboard", paymentPermission];

// Modify the the sidebar as per permissions
export const getPermissionArray = (sidebarItems) => {
  return sidebarItems.reduce((filteredItems, item) => {
    const clonedItem = { ...item };
    if (ignoreList.includes(item.title)) {
      filteredItems.push(item);
    }
    if (clonedItem.permission) {
      clonedItem.permission = clonedItem.permission.filter((perm) => {
        return storePermission?.permissions?.some((p) => p.name === perm);
      });
    }
    if (clonedItem?.children && clonedItem.children.length > 0) {
      clonedItem.children = getPermissionArray(clonedItem.children);
    }
    if (
      clonedItem?.permission?.length > 0 ||
      (clonedItem?.children && clonedItem?.children?.length > 0)
    ) {
      filteredItems.push(clonedItem);
    }
    return filteredItems;
  }, []);
};
