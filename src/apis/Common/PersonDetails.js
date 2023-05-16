import apiClient from "./../apiClient";
import { API_QUERY_KEY, API_ROUTES } from "./../../utils/index";
import { useQuery } from "@tanstack/react-query";
const PersonDetails = async (personId) => {
  return await apiClient.get(API_ROUTES.PERSON(personId), {
    params: {
      append_to_response: "combined_credits",
    },
  });
};

const useGetPersonDetails = (personId) => {
  return useQuery([API_QUERY_KEY.PERSON, personId], () =>
    PersonDetails(personId)
  );
};

export default useGetPersonDetails;
