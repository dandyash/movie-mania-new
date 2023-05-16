import { useParams } from "react-router-dom";
import useGetPersonDetails from "../../apis/Common/PersonDetails";
import { useState } from "react";

const usePersonDetailsController = () => {
  const { personId } = useParams();
  const PersonDetails = useGetPersonDetails(personId);
  const [isViewFullBiography, setIsViewFullBiography] = useState(false);
  const viewFullBioGraphy = () => {
    setIsViewFullBiography(true);
  };
  return {
    PersonDetails: PersonDetails?.data?.data,
    isDataLoading: PersonDetails.isLoading,
    isViewFullBiography,
    viewFullBioGraphy,
  };
};

export default usePersonDetailsController;
