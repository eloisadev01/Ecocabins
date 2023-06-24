import style from "./style.css";
import cabin_img from "../../assets/cabin_img.png";

function SectionCabin() {
  return (
    <div className="section_cabin">
      <img src={cabin_img} />
        <div className="parrafocabin-1">
          <div className="p-cabin">
            <h1 className="h1-cabin">Hout</h1>
            <p className="parrafo-cabin">
              De draagconstructies van EcoCabins bestaan uit hout. Hout is
              duurzaam en.
            </p>
          </div>

          <div className="p-cabin">
            <h1 className="h1-cabin">Afwerking</h1>
            <p className="parrafo-cabin">
              De draagconstructies van EcoCabins bestaan uit hout. Hout is
              duurzaam en.
            </p>
          </div>

          <div className="p-cabin">
            <h1 className="h1-cabin">Stalen onderstel</h1>
            <p className="parrafo-cabin">
              Het stalen onderstel is sterk zijn en heeft de benodigde stijfheid
              die
            </p>
          </div>

          <div className="p-cabin">
            <h1 className="h1-cabin">Glaswol isolatie</h1>
            <p className="parrafo-cabin">
              De combinatie van glaswol met een houtskelet constructie geeft
              een.
            </p>
          </div>

          <div className="p-cabin">
            <h1 className="h1-cabin">Triple glas</h1>
            <p className="parrafo-cabin">
              De combinatie van glaswol met een houtskelet constructie geeft
              een.
            </p>
          </div>

          <div className="p-cabin">
            <h1 className="h1-cabin">Infrarood vloer</h1>
            <p className="parrafo-cabin">
              De vloer wordt opgewarmd middels opgewekte warmte uit eigen
              zonne-energie.
            </p>
          </div>
        </div>
    </div>
  );
}
export default SectionCabin;
