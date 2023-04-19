import { useEffect, useState } from "react";
import bridge from "../assets/imgs/bridge.jpg";
import {
  RiKakaoTalkLine,
  RiBuilding4Fill,
  RiCurrencyFill,
} from "react-icons/ri";

function InfoCard({ info }) {
  console.log();
  const [lang, setLang] = useState("");
  const [capital, setCapital] = useState("");
  const [country, setCountry] = useState("");
  const [flag, setFlag] = useState("");
  const [currency, setCurrency] = useState([]);

  const fetchCountry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${info.state}`
      );
      // const res = await fetch(`https://restcountries.com/v3.1/name/serbia`);
      const data = await res.json();

      // console.log(data[0].currencies);

      setLang(Object.values(data[0].languages)[0]);
      setCapital(data[0].capital[0]);
      setCountry(data[0].name.common);
      setFlag(data[0].flags.png);
      setCurrency([
        Object.values(data[0].currencies)[0].name,
        Object.values(data[0].currencies)[0].symbol,
      ]);
    } catch (er) {
      console.error(er);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    // <div className="relative card__con">
    <div className="info__card">
      {/* Card side front */}
      <div className="card__side card__front ">
        <div className="relative w-full h-full rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black p-12 flex flex-col justify-between">
            <div>
              <h2 className="lg:text-4xl font-bold">{info.destination.name}</h2>
              <div className="h-[2px] w-[70%] border-t-[5px] border-t-primary py-1">
                <p className="text-xs font-semibold uppercase">
                  <img
                    className="rounded-full w-5 h-5 mr-2"
                    src={flag}
                    alt={country + "flag"}
                  />
                  {country}
                </p>
              </div>
            </div>
            <div className=" text-xs flex flex-col items-left justify-center gap-2">
              <p className="flex gap-2">
                <RiKakaoTalkLine size={20} /> {lang}
              </p>
              <p className="flex gap-2">
                <RiBuilding4Fill size={20} /> {capital}
              </p>
              <p className="flex gap-2">
                <RiCurrencyFill size={20} />{" "}
                <span className="text-md">{currency[1]}</span>({currency[0]})
              </p>
            </div>
          </div>
          <img
            src={
              info.destination.img[
                info.destination.name.split(" ").join("").toLowerCase()
              ]
            }
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
      {/* Card side back */}
      <div className="card__side card__back p-12 2xl:text-justify font-light italic flex items-center">
        <p className="">{info.destination.description}</p>
      </div>
    </div>
    // </div>
  );
}

export default InfoCard;
