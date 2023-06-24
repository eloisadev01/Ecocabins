import style from "./style.css"
import logo from "../../assets/logo_eco.png";

function FooterEco () {
    return (
        <div className="footer-eco">
            <p className="parrafo-footer">info@eco-cabins.com</p>
            <img src={logo} />

            <div className="div-cookies">
            <p className="parrafo-footer">Cookies</p>
            <p className="parrafo-footer">Privacybeleid</p>
            </div>


        </div>
    );
}
export default FooterEco;