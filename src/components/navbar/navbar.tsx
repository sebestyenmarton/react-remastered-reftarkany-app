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
import { useLocation, useNavigate } from "react-router-dom";
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
  const [othersDropdown, setOthersDropdown] = useState<
    "default" | "active" | "inactive"
  >("default");
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();

  const rootLinks = {
    facebook: "https://www.facebook.com/groups/1590480657872653",
    youtube:
      "https://www.youtube.com/c/Sebesty%C3%A9nL%C3%A1szl%C3%B3Ede/videos",
  };

  useEffect(() => {
    let dropdownClosedByClick = false;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleClickOutside = () => {
      if (
        !dropdownClosedByClick &&
        othersDropdown &&
        othersDropdown === "active"
      ) {
        setOthersDropdown("inactive");
      }
      //dropdownClosedByClick = false;
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [othersDropdown]);

  const handleLogin = async (loggedInUser: IUser) => {
    await dispatch(updateUser(loggedInUser));
    setOpenLoginModal(false); // Close the modal after sending a successful message
  };

  useEffect(() => {
    const fetchData = async () => {
      // Get the updated user from state
      const updatedUserAction = await dispatch(updateUser(user));
      const updatedUser = updatedUserAction.payload;

      // Check that updatedUser and token if exist or not
      if (updatedUser && updatedUser.token) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${updatedUser.token}`;
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
    const [isMenuActive, setIsMenuActive] = useState(
      useLocation().pathname.split("/")[1] === label.split("/")[0]
    );

    const handleNavLinkOnClick = (
      mouseEvent: React.MouseEvent,
      targetLabel: string
    ) => {
      // Set the active menu to the clicked label
      setActiveMenu(targetLabel);

      // Handle navigation and other logic
      if (targetLabel.includes("egyebek")) {
        setOthersDropdown("active");
      } else {
        navigate(targetLabel.length > 0 ? `/${targetLabel}` : "/");
        toggleHome(mouseEvent);
      }

      mouseEvent.stopPropagation();
    };

    if (label === "egyebek") {
      return (
        <>
          <div
            className={`nav-link desctop-view ${isMenuActive ? "active" : ""}`}
            key={label + value}
            onClick={(ev) => {
              handleNavLinkOnClick(ev, label);
            }}
          >
            {value}
            <FaSortDown
              className={`dropdown-icon ${othersDropdown}`}
              key={value + "-icon"}
            />
            <div className={`others-dropdown ${othersDropdown}`} key={value}>
              <div
                className="others-link"
                onClick={(ev) => {
                  handleNavLinkOnClick(ev, label);
                  setOthersDropdown("inactive");
                  toggleHome(ev);
                  navigate(label.length > 0 ? `/${label}/biblia` : "/");
                }}
              >
                Bibliaolvasás
              </div>
              <div
                className="others-link"
                onClick={(ev) => {
                  handleNavLinkOnClick(ev, label);
                  setOthersDropdown("inactive");
                  navigate(label.length > 0 ? `/${label}/napiige` : "/");
                }}
              >
                Napi áhitat
              </div>
            </div>
          </div>
          <div
            className={`nav-link mobile-view ${
              activeMenu === `${label}/biblia` ? "active" : ""
            }`}
            key={`/${label}/biblia` + value}
            onClick={(ev) => {
              handleNavLinkOnClick(ev, `${label}/biblia`);
              setOthersDropdown("inactive");
              toggleHome(ev);
              navigate(label.length > 0 ? `/${label}/biblia` : "/");
              dissolve();
            }}
          >
            Bibliaolvasás
          </div>
          <div
            className={`nav-link mobile-view ${
              activeMenu === `${label}/napiige` ? "active" : ""
            }`}
            key={`/${label}/napiige` + value}
            onClick={(ev) => {
              handleNavLinkOnClick(ev, `${label}/napiige`);
              setOthersDropdown("inactive");
              navigate(label.length > 0 ? `/${label}/napiige` : "/");
              dissolve();
            }}
          >
            Napi áhitat
          </div>
        </>
      );
    } else {
      return (
        <div
          className={`nav-link ${isMenuActive ? "active" : ""}`}
          key={label + value}
          onClick={(ev) => {
            handleNavLinkOnClick(ev, label);
          }}
        >
          {value}
        </div>
      );
    }
  };

  return (
    <div className={`navbar-container ${scrolling ? "scrolling-mode" : ""}`}>
      <div className="navbar-content">
        <FulfillingSquareSpinner
          onClick={() => {
            navigate("/");
          }}
          rx="15"
          color="#fff"
          viewBox="0 0 448 512"
          className="fulfilling-square-spinner spinner"
        >
          <div className="spinner-inner" />
        </FulfillingSquareSpinner>
        <svg
          onClick={() => {
            navigate("/");
          }}
          className="navbar-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M400 480H48c-26.4 0-48-21.6-48-48V80c0-26.4 21.6-48 48-48h352c26.4 0 48 21.6 48 48v352c0 26.4-21.6 48-48 48zM199.6 178.5c0-30.7-17.6-45.1-39.7-45.1-25.8 0-40 19.8-40 44.5v154.8c0 25.8 13.7 45.6 40.5 45.6 21.5 0 39.2-14 39.2-45.6v-41.8l60.6 75.7c12.3 14.9 39 16.8 55.8 0 14.6-15.1 14.8-36.8 4-50.4l-49.1-62.8 40.5-58.7c9.4-13.5 9.5-34.5-5.6-49.1-16.4-15.9-44.6-17.3-61.4 7l-44.8 64.7v-38.8z" />
        </svg>
        <div
          className="title-container"
          onClick={() => {
            navigate("/");
          }}
        >
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
          <FaYoutube
            className="icon"
            onClick={() => {
              window.open(rootLinks.youtube);
            }}
          />
          <FaFacebookSquare
            className="icon"
            onClick={() => {
              window.open(rootLinks.facebook);
            }}
          />
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
