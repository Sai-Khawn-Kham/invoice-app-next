"use client";
import { fetchVoucher, voucherApiUrl } from "@/services/voucher";
import { convertSearchPramsToObject, extractSearchPramsObjectFromUrl } from "@/utils/url";
import { debounce } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const useVoucher = () => {
  const searchRef = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [fetchUrl, setFetchUrl] = useState(searchParams.toString() ? `${voucherApiUrl}?${searchParams.toString()}` : `${voucherApiUrl}`);
  const { data, isLoading, error } = useSWR(fetchUrl, fetchVoucher);

  useEffect(() => {
    if (searchParams.get("q")) {
      searchRef.current.value = searchParams.get("q");
    }
  }, []);

  const updateUrlParams = (newParams) => {
    const updatedSearch = new URLSearchParams(newParams).toString();
    router.push(`?${updatedSearch}`);
    setFetchUrl(updatedSearch ? `${voucherApiUrl}?${updatedSearch}` : `${voucherApiUrl}`);
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
  }, 1000);

  const handleClearSearch = () => {
    searchRef.current.value = "";
    updateUrlParams({});
  };

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

  const handleSort = (sortData) => {
    const newParams = {
      ...convertSearchPramsToObject(searchParams),
      ...sortData,
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
    handleLimit,
    handleSort,
  };
};

export default useVoucher;
