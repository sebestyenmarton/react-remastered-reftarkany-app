import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaUserCircle,
  FaYoutube,
  FaPlayCircle,
  FaSortDown,
} from "react-icons/fa";
import { Spin as Hamburger } from "hamburger-react";
import "./navbar.scss";
import FulfillingSquareSpinner from "./fulfilling-square-spinner/fulfilling-square-spinner";
import { useNavigate } from "react-router-dom";
import { AppMainNavigationProps, IOption, IUser } from "../../typings/global";
import { animateScroll as scroll } from "react-scroll";
import LoginForm from "../form/login/login-form";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/reducers/userSlice";
import { RootState } from "../../redux/types/redux";
import axios from "axios";

interface INavbarProps {
  selectedValue?: AppMainNavigationProps;
  configuration: IOption[];
}

const Navbar = ({ selectedValue = "", configuration }: INavbarProps) => {
  const [isOpen, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  // Dispatch hook
  const dispatch = useDispatch();

  // User informations from the user store
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogin = async (loggedInUser: IUser) => {
    await dispatch(updateUser(loggedInUser)); // Várjuk meg a state frissülését
    setOpenLoginModal(false); // Close the modal after sending a successful message
  };

  console.log("Axios headers:", axios.defaults.headers);

  useEffect(() => {
    const fetchData = async () => {
      // Get the updated user from state
      const updatedUserAction = await dispatch(updateUser(user));
      const updatedUser = updatedUserAction.payload;

      // Check that updatedUser and token exist
      if (updatedUser && updatedUser.token) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${updatedUser.token}`;
        console.log("Bearer token:", updatedUser.token);
        console.log("Axios headers:", axios.defaults.headers);
      }
    };

    fetchData();
  }, [dispatch, user]);

  const handleLoginClose = () => {
    setOpenLoginModal(false);
  };

  const [menuSlider, setMenuSlider] = useState({
    opened: false,
    closed: true,
    inProgress: false,
  });

  const dissolve = () => {
    if (isOpen) {
      setMenuSlider({ opened: true, closed: true, inProgress: true });
      setTimeout(() => {
        setMenuSlider({ opened: false, closed: true, inProgress: false });
      }, 500);
    } else {
      setMenuSlider({ opened: true, closed: false, inProgress: false });
    }
    setOpen(!isOpen);
  };

  const toggleHome = (mouseEvent: React.MouseEvent) => {
    scroll.scrollToTop();
  };

  const NavbarMenu = ({ label, value }: IOption) => {
    const navigate = useNavigate();
    const selectedValue = useSelector(
      (state: RootState) => state.selectedValue
    );
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleOnClick = (path: string) => {
      navigate(path);
      setIsMenuActive(false);
    };

    return (
      <div
        className={`nav-link ${isMenuActive ? "active" : ""}`}
        key={label}
        onClick={(ev) => {
          if (selectedValue !== label) {
            const link = label.length > 0 ? `/${label}` : "/";
            handleOnClick(link);
          } else {
            toggleHome(ev);
          }
        }}
      >
        {value}
        {label === "egyebek" && <FaSortDown />}
      </div>
    );
  };

  return (
    <div className={`navbar-container ${scrolling ? "scrolling-mode" : ""}`}>
      <div className="navbar-content">
        <FulfillingSquareSpinner
          rx="15"
          color="#fff"
          viewBox="0 0 448 512"
          className="fulfilling-square-spinner spinner"
        >
          <div className="spinner-inner" />
        </FulfillingSquareSpinner>
        <svg
          className="navbar-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M400 480H48c-26.4 0-48-21.6-48-48V80c0-26.4 21.6-48 48-48h352c26.4 0 48 21.6 48 48v352c0 26.4-21.6 48-48 48zM199.6 178.5c0-30.7-17.6-45.1-39.7-45.1-25.8 0-40 19.8-40 44.5v154.8c0 25.8 13.7 45.6 40.5 45.6 21.5 0 39.2-14 39.2-45.6v-41.8l60.6 75.7c12.3 14.9 39 16.8 55.8 0 14.6-15.1 14.8-36.8 4-50.4l-49.1-62.8 40.5-58.7c9.4-13.5 9.5-34.5-5.6-49.1-16.4-15.9-44.6-17.3-61.4 7l-44.8 64.7v-38.8z" />
        </svg>
        <div className="title-container">
          <div className="location-title">köröstárkány</div>
          <div className="title-box">
            <div className="logo-title">ref</div>
            <div className="separation-line" />
            <div className="long-title">
              <span>köröstárkányi</span> református gyülekezet
            </div>
          </div>
        </div>
        <div
          className={`icon-container ${
            menuSlider.closed ? "closed" : "not-closed"
          }`}
        >
          <div className="harangszo-radio-container">
            <div className="harangszo-title">harangszó rádió</div>
            <FaPlayCircle className="icon" />
          </div>
          <div className="line first" />
          <div className="line" />
          <div className={`user-icon-box ${user?.token ? "logged-in" : ""}`}>
            <FaUserCircle
              className="icon"
              onClick={() => setOpenLoginModal(true)}
            />
          </div>
          <FaYoutube className="icon" />
          <FaFacebookSquare className="icon" />
        </div>
        <Hamburger toggled={isOpen} toggle={dissolve} />
        <div
          className={`menu-container ${menuSlider.opened ? "opened" : ""} ${
            menuSlider.closed ? "closed" : ""
          } ${menuSlider.inProgress ? "inProgress" : ""}`}
        >
          {configuration.map((config, key) => (
            <NavbarMenu
              label={config.label}
              value={config.value}
              key={config.label + key}
            />
          ))}
        </div>
        <LoginForm
          onLogin={handleLogin}
          onClose={handleLoginClose}
          isOpen={openLoginModal}
          loggedIn={user?.token ? true : false}
          loggedUser={user?.username}
        />
      </div>
    </div>
  );
};

export default Navbar;
