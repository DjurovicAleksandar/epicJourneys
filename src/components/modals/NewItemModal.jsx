import { useEffect, useState } from "react";
import { db, storage } from "../config/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function NewItemModal({ setShowItemModal }) {
  // State variables for input values and image upload

  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCountry, setItemCountry] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  // State variable for countries fetched from API
  const [allCountires, setAllCountires] = useState([]);

  // Image upload function that uploads an image to Firebase Storage
  const uploadImage = async (imageName) => {
    if (imageUpload == null) return;
    const imgRef = ref(storage, `destinaions/${imageName}`);
    await uploadBytes(imgRef, imageUpload);
  };

  // Function to handle the image upload input
  const imageUploadHandler = (e) => {
    e.preventDefault();
    const field = e.target;
    // Check if the image size is within the limit
    if (field.files[0].size > 204800) {
      alert("Image size is to big. Maximum image size is 200kb");
    } else {
      setImageUpload(field.files[0]);
    }
  };

  // Function to add a new destination to Firebase Firestore
  const addNewDestination = async (e) => {
    e.preventDefault();
    // Check if an image has been uploaded
    if (imageUpload.size <= 0) return;

    // Pushing items to Firestore
    const itemRef = doc(db, "destinations", itemName);
    setDoc(itemRef, {
      itemName: itemName,
      itemDescription: itemDescription,
      itemCountry: itemCountry,
    });

    // Upload the image to Firebase Storage
    uploadImage(itemName.toLowerCase());

    // Close the modal
    setShowItemModal(false);
  };

  // Function to fetch all countries from the restcountries API
  const fetchAllCountires = async () => {
    const allCountryRes = await fetch("https://restcountries.com/v3.1/all");
    const allCountryData = await allCountryRes.json();

    // Get the name of each country and add it to the allCountries state variable
    const countries = allCountryData.map((country) => country.name.common);
    setAllCountires(countries);
  };

  useEffect(() => {
    // Fetch all countries when the component mounts
    fetchAllCountires();
  }, []);

  return (
    <div className="w-full h-full fixed flex items-center justify-center z-[100]">
      <div className="b border-accent w-[20rem] lg:w-[30rem] h-[34rem] rounded-2xl  shadow-xl  bg-[#111217]/80 text-white relative flex flex-col items-center pt-20">
        <button
          onClick={(e) => setShowItemModal(false)}
          className="border-black bg-white text-black px-4 py-2 rounded-full hover:scale-110 active:scale-90 ease-in-out duration-300 absolute top-[0.4rem] right-[0.3rem]"
        >
          X
        </button>

        <form
          onSubmit={addNewDestination}
          id="modal_form"
          className="text-white flex flex-col gap-2 w-[18rem] lg:w-[24rem]"
        >
          <input
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full py-[0.3rem]  px-2  pr-3 rounded-lg border-[0.1rem] bg-transparent border-[#FFFFFF] focus:outline-none focus:border-accent mb-[0.2rem]"
            placeholder="Destination name"
            type="text"
            required
          />
          <label htmlFor="countries">Choose a country</label>
          <select
            onChange={(e) => setItemCountry(e.target.value)}
            required
            placeholder="Choose"
            name="countries"
            id="countries"
            className="text-black w-full py-[0.3rem]  px-2  pr-3 rounded-lg border-[0.1rem]  border-[#FFFFFF] focus:outline-none focus:border-accent mb-[0.2rem]"
          >
            {allCountires.map((country, i) => {
              return (
                <option key={i} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            className="resize-none h-[10rem] w-full py-[0.3rem]  px-2  pr-3 rounded-lg border-[0.1rem] bg-transparent border-[#FFFFFF] focus:outline-none focus:border-accent mb-[0.2rem]"
            placeholder="Destination description (Maximum length 200 characters)"
            maxLength={200}
            type="text"
            required
          />

          <div className="flex flex-col items-center">
            <button className="rounded-md bg-white text-center py-[0.3rem] text-black  ease-in-out duration-300 active:scale-90 cursor-pointer w-[18rem] lg:w-[24rem]">
              <label htmlFor="add__file">Add destination image</label>
              <input
                onChange={imageUploadHandler}
                required
                id="add__file"
                type="file"
                className="hidden"
              />
            </button>
            <p className="text-xs underline text-accent  font-medium w-[18rem] lg:w-[25rem] text-center mt-1">
              Maximum image size 200kb
            </p>
          </div>
        </form>

        <button
          type="submit"
          form="modal_form"
          className="rounded-md bg-accent text-center py-[0.3rem]  text-black ease-in-out duration-300 active:scale-90 cursor-pointer w-[18rem] lg:w-[24rem] mt-5"
        >
          Save destinaton
        </button>
      </div>
    </div>
  );
}

export default NewItemModal;
