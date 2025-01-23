import { useEffect } from "react";

export const useSkeletonLoader = (isLoading) => {
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("skeleton-body");
    } else {
      document.body.classList.remove("skeleton-body");
    }

    return () => {
      document.body.classList.remove("skeleton-body");
    };
  }, [isLoading]);
};
