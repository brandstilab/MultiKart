import React, { useEffect, useState } from 'react';
import { CategoryAPI } from '@/Utils/AxiosUtils/API';
import { useQuery } from '@tanstack/react-query';
import request from '@/Utils/AxiosUtils';
import CategoryContext from '.';
import { useRouter } from 'next/navigation';

const CategoryProvider = (props) => {
  const router = useRouter()
  const [categoryAPIData, setCategoryAPIData] = useState({ data: [], refetchCategory: '', params: {}, categoryIsLoading: false });
  const { data: categoryData,refetch, isLoading: categoryIsLoading } = useQuery([CategoryAPI], () => request({ url: CategoryAPI, params: { ...categoryAPIData.params, status: 1 } },router), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (data) => data.data.data,
  });
  const filterCategory = (value) => {
    return categoryData?.filter((elem) => elem.type === value) || [];
  };

  useEffect(() => {
    categoryIsLoading &&  refetch()
  }, [categoryIsLoading])
  

  // Setting Data on Category variables
  useEffect(() => {
    if (categoryData) {
      setCategoryAPIData((prev) => ({ ...prev, data: categoryData, categoryIsLoading: categoryIsLoading }));
    }
  }, [categoryData]);

  return <CategoryContext.Provider value={{ ...props, categoryAPIData, setCategoryAPIData, filterCategory: filterCategory, categoryIsLoading ,categoryData }}>{props.children}</CategoryContext.Provider>;
};

export default CategoryProvider;
