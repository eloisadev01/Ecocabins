import style from "./style.css";
import logo from "../../assets/logo_eco.png";

function HeaderEco() {
  return (
    <div className="header-eco">
      <img src={logo} />
      <div className="enlaces-eco">
        <a className="enlaces" href="#">Modellen</a>

        <a className="enlaces" href="#">kopen</a>

        <a className="enlaces" href="#">Huren</a>

        <a className="enlaces" href="#">Nieuws</a>

        <a className="enlaces" href="#">contact</a>
      </div>
    </div>
  );
}

export default HeaderEco;
