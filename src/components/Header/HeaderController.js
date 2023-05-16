import { useContext, useEffect, useMemo, useState } from "react";
import useTheme from "../../hooks/useTheme";
import useRequestToken from "../../apis/Authentication/RequestToken";
import { useSearchParams, useNavigate } from "react-router-dom";
import useRequestSession from "../../apis/Authentication/RequestSession";
import useFetchUserDetails from "../../apis/User/UserDetails";
import randomColor from "randomcolor";
import useDeleteSession from "../../apis/Authentication/DeleteSession";
import { NotificationContext } from "../../context/NotificationContext";

const useHeaderController = () => {
  const navigation = useNavigate();
  const [userData, setUserData] = useState();
  const [isSearchBarViisible, setIsSearchBarViisible] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const { theme, setTheme } = useTheme();
  const [queryParameters, setQueryParameters] = useSearchParams();
  const requestToken = useRequestToken();
  const userSession = useRequestSession();
  const fetchUserDetails = useFetchUserDetails();
  const profileBg = useMemo(() => randomColor(), []);
  const deleteUserSession = useDeleteSession();
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (queryParameters.get("approved")) {
      userSession.mutate({
        request_token: queryParameters.get("request_token"),
      });
      setQueryParameters("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage.getItem("session")) {
      fetchUserDetails.refetch();
    } else {
      requestToken.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userSession.isSuccess && userSession.data) {
      localStorage.setItem("session", userSession?.data?.data?.session_id);
      fetchUserDetails.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSession.isSuccess, userSession.data]);

  useEffect(() => {
    if (fetchUserDetails.data) {
      setUserData(fetchUserDetails.data.data);
      // console.log(fetchUserDetails.data.data);
    }
  }, [fetchUserDetails.isSuccess, fetchUserDetails.data]);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
    showNotification(`Theme Switched Successfully !!!`, "success");
  };

  const handleLogout = () => {
    deleteUserSession.mutate(localStorage.getItem("session"));
    requestToken.refetch();
  };

  useEffect(() => {
    if (deleteUserSession.isSuccess) {
      localStorage.removeItem("session");
      setUserData();
    }
  }, [deleteUserSession.isSuccess, deleteUserSession.data]);

  const toggleSearchBarVisibility = (flag) => {
    setIsSearchBarViisible(flag);
    setSearchVal("");
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigation(`/search?query=${searchVal}`);
    toggleSearchBarVisibility(false);
  };

  const collapseMenuItems = [
    [userData?.username, "/"],
    ["Favorites", "/favorites/movies"],
    ["Watch List", "/watch-list"],
    ["Logout", handleLogout],
  ];

  return {
    theme,
    toggleTheme,
    userData,
    profileBg,
    requestToken: requestToken?.data?.data?.request_token,
    collapseMenuItems,
    isSearchBarViisible,
    toggleSearchBarVisibility,
    onSearchSubmit,
    searchVal,
    setSearchVal,
  };
};
export default useHeaderController;
