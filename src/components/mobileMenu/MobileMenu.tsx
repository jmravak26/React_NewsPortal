import {
  faBars,
  faBusinessTime,
  faFootballBall,
  faHeart,
  faHome,
  faNewspaper,
  faTimes,
  faTv,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./MobileMenu.scss";

const homeImg = <FontAwesomeIcon icon={faHome} />;
const generalImg = <FontAwesomeIcon icon={faNewspaper} />;
const businessImg = <FontAwesomeIcon icon={faBusinessTime} />;
const healthImg = <FontAwesomeIcon icon={faHeart} />;
const scienceImg = <FontAwesomeIcon icon={faWineBottle} />;
const sportImg = <FontAwesomeIcon icon={faFootballBall} />;
const techonologyImg = <FontAwesomeIcon icon={faTv} />;
const barsImg = <FontAwesomeIcon icon={faBars} />;
const timesImg = <FontAwesomeIcon icon={faTimes} />;

interface Props {
  children: React.ReactNode;
}

export default function MobileMenu(props: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button
        className="mobileMenuButton"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? timesImg : barsImg}
      </button>
      {isActive && (
        <div className="mobileMenu">
          <div className="logoMobile">{props.children}</div>
          <div className="menu">
            <div className="active">
              {homeImg}
              <span>Home</span>
            </div>

            <div>
              {generalImg} <span>General</span>
            </div>
            <div>
              {businessImg} <span>Business</span>
            </div>
            <div>
              {healthImg}
              <span>Health</span>
            </div>
            <div>
              {scienceImg}
              <span>Science</span>
            </div>
            <div>
              {sportImg} <span>Sports</span>
            </div>
            <div>
              {techonologyImg} <span>Technology</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
