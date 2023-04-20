import { useEffect, useState } from "react";
import {
  RiKakaoTalkLine,
  RiBuilding4Fill,
  RiCurrencyFill,
} from "react-icons/ri";

function InfoCard({
  state, // State where destination is located
  destinationName, // Name of destination
  destinationDescription, // Description of destination
  imageUpload, // Array of image uploads
  destinationId, // Index of destination in imageUpload array
}) {
  // State variables to store data from API

  //Country main language
  const [lang, setLang] = useState("");
  //Country capital
  const [capital, setCapital] = useState("");
  //Country
  const [country, setCountry] = useState("");
  //Country flag
  const [flag, setFlag] = useState("");
  //Country currency
  const [currency, setCurrency] = useState([]);

  // Function to fetch country data corresponding to destination
  const fetchCountry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${state.toLowerCase()}`
      );

      const data = await res.json();

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
    // useEffect hook to fetch country data when component mounts
    fetchCountry();
  }, []);

  return (
    <div className="info__card" id={destinationName}>
      {/* Card side front */}
      <div className="card__side card__front ">
        <div className="relative w-full h-full rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-black p-12 flex flex-col justify-between rounded-md">
            <div>
              <h2 className="text-3xl 2xl:text-4xl font-bold">
                {destinationName}
              </h2>
              <div className="border-t-[3px] border-t-primary py-1 w-full">
                <p className="text-xs font-semibold uppercase">
                  <img
                    className="rounded-full w-5 h-5 mr-1"
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
            src={imageUpload[destinationId]}
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
      {/* Card side back */}
      <div className="card__side card__back p-12 2xl:text-justify font-light italic">
        <div className="w-full h-full relative flex justify-center border-[1px] p-1 ">
          <div className="absolute bottom-[-1rem] text-xs font-bold z-[200]">
            <a
              href={`https://www.booking.com/searchresults.html?ss="${encodeURIComponent(
                destinationName
              )}`}
              target="_blank"
              className="mr-5"
            >
              Booking<span className="text-primary">.com</span>
            </a>
            <a
              href={`https://www.tripadvisor.com/Search?q="${encodeURIComponent(
                destinationName
              )}`}
              target="_blank"
              className=""
            >
              Tripadvisor<span className="text-accent">.com</span>
            </a>
          </div>
          <p className="z-50 border-[1px] text-xs h-[25rem] w-[10rem] px-4 py-2 flex items-center">
            {destinationDescription}
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default InfoCard;
