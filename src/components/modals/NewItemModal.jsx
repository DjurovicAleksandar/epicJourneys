import { useEffect, useState } from "react";
import { db, storage } from "../config/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function NewItemModal({ setShowItemModal }) {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCountry, setItemCountry] = useState("");

  const [allCountires, setAllCountires] = useState([]);

  //image
  const [imageUpload, setImageUpload] = useState(null);

  //Image upload
  const uploadImage = async (category, imageName) => {
    if (imageUpload == null) return;
    const imgRef = ref(storage, `destinaions/${imageName}`);
    await uploadBytes(imgRef, imageUpload);
  };

  const addNewItem = async (e) => {
    e.preventDefault();

    // Pushing items to real database
    const itemRef = doc(db, "destinations", itemName);
    setDoc(itemRef, {
      itemName: itemName,
      itemDescription: itemDescription,
      itemCountry: itemCountry,
    });

    uploadImage(itemName);

    setShowItemModal(false);
  };

  const fetchAllCountires = async () => {
    const allCountryRes = await fetch("https://restcountries.com/v3.1/all");
    const allCountryData = await allCountryRes.json();

    const countries = allCountryData.map((country) => country.name.common);
    setAllCountires(countries);
  };

  useEffect(() => {
    fetchAllCountires();
  }, []);
  return (
    <div className="w-full h-full fixed flex items-center justify-center z-[100]">
      <div className="b border-accent w-[30rem] h-[34rem] rounded-2xl  shadow-xl bg-[#111217] text-white relative flex flex-col items-center pt-20">
        <button
          onClick={(e) => setShowItemModal(false)}
          className="border-black bg-white text-black px-4 py-2 rounded-full hover:scale-110 active:scale-90 ease-in-out duration-300 absolute top-[0.4rem] right-[0.3rem]"
        >
          X
        </button>

        <form
          onSubmit={addNewItem}
          id="modal_form"
          className="text-white flex flex-col gap-2 w-[20rem]"
        >
          <input
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full  rounded-lg border-[0.1rem] bg-transparent border-[#FFFFFF] focus:outline-none focus:border-accent mb-[0.8rem]"
            placeholder="Destination name"
            type="text"
            required
          />
          <input
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full  rounded-lg border-[0.1rem] bg-transparent border-[#FFFFFF] focus:outline-none focus:border-accent mb-[0.8rem]"
            placeholder="Destination name"
            type="text"
            required
          />
          <select name="countries" id="countries">
            {allCountires.map((country) => {
              return <option value={country}>{country}</option>;
            })}
          </select>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            className="resize-none h-[12rem] w-full  rounded-lg border-[0.1rem] bg-transparent border-[#FFFFFF] focus:outline-none focus:border-accent mb-[0.8rem]"
            placeholder="Destination description (Maximum length 300 characters)"
            maxLength={300}
            type="text"
            required
          />

          <div className="flex flex-col items-center">
            <button className="rounded-md bg-white text-center  text-black  ease-in-out duration-300 active:scale-90 cursor-pointer w-[24rem]">
              <label htmlFor="add__file">Add picture for a destination</label>
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setImageUpload(e.target.files[0]);
                }}
                required
                id="add__file"
                type="file"
                className="hidden"
              />
            </button>
            <p className="text-xs underline text-accent font-medium w-[25rem] text-center mt-1">
              Picture max size 300kb
            </p>
          </div>
        </form>
        {/* <div className="flex flex-col w-full items-center gap-10 mt-8"> */}
        <button
          type="submit"
          form="modal_form"
          className="rounded-md bg-accent text-center  text-black ease-in-out duration-300 active:scale-90 cursor-pointer w-[24rem]  mt-12"
        >
          Save destinaton
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default NewItemModal;
