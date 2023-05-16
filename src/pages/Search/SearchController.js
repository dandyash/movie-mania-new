import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useGetSearchResults from "../../apis/Common/Search";

const useSearchController = () => {
  const [searchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const SearchResults = useGetSearchResults(
    searchParams.get("query"),
    pageNumber
  );
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pageNumber]);
  return {
    SearchResults: SearchResults?.data?.data,
    isDataLoading: SearchResults.isLoading,
    setPageNumber,
  };
};

export default useSearchController;
