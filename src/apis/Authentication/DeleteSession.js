import { useMutation } from "@tanstack/react-query";
import { API_QUERY_KEY, API_ROUTES } from "../../utils";
import apiClient from "../apiClient";

const deleteSession = async (session_id) => {
  return await apiClient.delete(API_ROUTES.REMOVE_SESSION, {
    data: { session_id: session_id },
  });
};

const useDeleteSession = () => {
  return useMutation([API_QUERY_KEY.REMOVE_SESSION], (session_id) => {
    deleteSession(session_id);
  });
};

export default useDeleteSession;
