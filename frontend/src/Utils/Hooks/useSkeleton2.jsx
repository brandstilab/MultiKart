import { useEffect } from "react";

export const useSkeletonLoader2 = (loadingStates) => {
  useEffect(() => {
    const anyLoading = loadingStates.some((isLoading) => isLoading);

    if (anyLoading) {
      document.body.classList.add("skeleton-body");
    } else {
      document.body.classList.remove("skeleton-body");
    }

    return () => {
      document.body.classList.remove("skeleton-body");
    };
  }, [loadingStates]);
};
