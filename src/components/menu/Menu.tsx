import {
  faBusinessTime,
  faFootballBall,
  faHeart,
  faHome,
  faNewspaper,
  faTv,
  faWineBottle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.scss";

const homeImg = <FontAwesomeIcon icon={faHome} />;
const generalImg = <FontAwesomeIcon icon={faNewspaper} />;
const businessImg = <FontAwesomeIcon icon={faBusinessTime} />;
const healthImg = <FontAwesomeIcon icon={faHeart} />;
const scienceImg = <FontAwesomeIcon icon={faWineBottle} />;
const sportImg = <FontAwesomeIcon icon={faFootballBall} />;
const techonologyImg = <FontAwesomeIcon icon={faTv} />;

export default function Menu() {
  return (
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
  );
}
