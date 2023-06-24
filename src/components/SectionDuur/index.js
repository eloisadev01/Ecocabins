import style from "./style.css";
import dur_img from "../../assets/dur_img.png";

function SectionDuur() {
  return (
    <div className="section-duur">
      <div className="div-duur">
        <h1 className="h1-duur">Duurzame materialen</h1>
        <p className="parrafo-duur">
          Alle EcoCabins hebben een hoge isolatiewaarde, worden geproduceerd met
          indien mogelijk duurzame en/of natuurlijke materialen en hebben als
          opvallende uiterlijke kenmerk de ‘ronde hoeken’, mogelijk gemaakt door
          het specifieke materiaalgebruik. De voordelen van bouwen met hout zijn
          legio: hout is licht, flexibel, isoleert goed en bouwt snel en
          efficiënt.
        </p>
        <button>Lees Meer</button>
      </div>

      <img src={dur_img} />
      
    </div>
  );
}

export default SectionDuur;
