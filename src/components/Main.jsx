import InfoCard from "./InfoCard";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "./config/firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";

function Main() {
  // State variables
  const [destionationList, setDestinationList] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);

  // Fetch data from Firestore
  const getDestinations = async () => {
    const data = await getDocs(collection(db, "destinations"));

    // Map and filter the retrieved data
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id.toLowerCase(),
    }));

    // Set the filtered data to the state variable
    setDestinationList(filteredData);
  };

  useEffect(() => {
    // Call the getDestinations function when the component mounts
    getDestinations();
  }, []);

  useEffect(() => {
    // Loop through each destination and retrieve its image from Firebase Storage
    destionationList.map((dest) => {
      const imageName = dest.itemName.toLowerCase();
      const imageRef = ref(storage, `destinaions/${imageName}`);

      getDownloadURL(imageRef).then((url) => {
        // Retrieve the download URL for the image

        setImageUpload((prev) => ({ ...prev, [imageName]: url }));
      });
    });
  }, [destionationList]);

  return (
    <div id="destinations" className="container mx-auto px-10 lg:px-[100px]">
      <div className="grid grid-cols-12 2xl:grid-cols-15 gap-4 p-4">
        {destionationList.map((destination, i) => {
          return (
            <div
              key={destination.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3"
            >
              <InfoCard
                state={destination.itemCountry}
                destinationName={destination.itemName}
                destinationDescription={destination.itemDescription}
                destinationId={destination.id}
                imageUpload={imageUpload}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
