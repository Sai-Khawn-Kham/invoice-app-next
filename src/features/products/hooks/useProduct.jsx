"use client";
import { fetchProduct, productApiUrl } from "@/services/product";
import { convertSearchPramsToObject, extractSearchPramsObjectFromUrl } from "@/utils/url";
import { debounce } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import useSWR from "swr";

const useProduct = () => {
  const searchRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [fetchUrl, setFetchUrl] = useState(productApiUrl);
  const { data, isLoading, error } = useSWR(fetchUrl, fetchProduct);

  const updateUrlParams = (newParams) => {
    const updatedSearch = new URLSearchParams(newParams).toString();
    router.push(`?${updatedSearch}`);
    setFetchUrl(updatedSearch ? `${productApiUrl}?${updatedSearch}` : `${productApiUrl}`);
  };

  const handleSearchInput = debounce((e) => {
    const q = e.target.value;
    if (q) {
      updateUrlParams({
        ...convertSearchPramsToObject(searchParams),
        q,
        page: 1,
      });
    } else {
      updateUrlParams({});
    }
  })

  const handleClearSearch = () => {
    searchRef.current.value = "";
    updateUrlParams({});
  }
  
  const handlePaginate = (url) => {
    const newParams = {
      ...extractSearchPramsObjectFromUrl(url),
    };
    updateUrlParams(newParams);
  };

  const handleLimit = (e) => {
    const newParams = {
      ...convertSearchPramsToObject(searchParams),
      page: 1,
      limit: e.target.value,
    };
    updateUrlParams(newParams);
  };

  return {
    data,
    isLoading,
    error,
    searchRef,
    handleSearchInput,
    searchParams,
    handleClearSearch,
    handlePaginate,
    handleLimit
  };
};

export default useProduct;
