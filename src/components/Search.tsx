"use client";
import React, { useState, FormEvent, ChangeEvent, useRef, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { useAppSelector } from "@/Redux/hooks";
import { useDispatch } from "react-redux";
import { addressAction } from "@/Redux/Features/address/addressSlice";

const libraries: ("places")[] = ["places"];

const Search: React.FC = () => {

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const addressInfo = useAppSelector(
    (state) => state.addressSlice.addressInfo
  );
  console.log("addressInfo: ",addressInfo);

  const dispatch = useDispatch();


  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBC9ytu3b3UnI1x1BTW_c1mIUU_TxXEmYA", // Replace with your API key
    libraries,
  });

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLoaded && searchInputRef.current) {
      autocompleteRef.current = new google.maps.places.Autocomplete(
        searchInputRef.current
      );
      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.geometry) {
          dispatch(addressAction(place));
          setData(place);
          setInputValue(place.formatted_address || "");
          setError(false);
          setErrorMessage("");
        }
      });
    }
  }, [isLoaded]);

  const handleGoClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setError(true);
      setErrorMessage("Enter address for search");
    } else if (!data || !data.geometry) {
      setError(true);
      setErrorMessage("Please enter a valid address from the suggestions");
    } else {
      setError(false);
      setErrorMessage("");
      // Proceed with the valid data
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setData(null); // Reset data when the input changes
    if (error && e.target.value.trim() !== "") {
      setError(false);
      setErrorMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents form submission
    }
  };

  const gradientStyle: React.CSSProperties = {
    background: `url('https://i.ibb.co/55skbHM/10.jpg'), linear-gradient(to top, rgba(0, 0, 0, 0.212), rgba(0, 0, 0, 0))`,
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
    backgroundPosition: "bottom",
  };

  return (
    <div>
      <div
        style={gradientStyle}
        className="bg-no-repeat bg-cover px-10 pt-56 pb-36 relative"
      >
        <h1 style={{ lineHeight: '1.2' }} className="text-2xl lg:text-6xl font-[600] uppercase text-white text-center pb-10">
          Our software finds that 1 in 6 Florida homeowners are paying too much in property
        </h1>
        <p className="text-md lg:text-xl font-[400] text-white text-center pb-10 leading-tight">
          Let our team of tax experts appeal your home assessment.
          We only get paid if you win.
        </p>

        <div className="flex justify-center">
          <form onSubmit={handleGoClick} className="relative w-full max-w-2xl">
            <div className="flex space-x-4">
              <div className="flex w-full gap-4 rounded-md overflow-hidden">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter Your Property address"
                  ref={searchInputRef}
                  className="w-full outline-none border-2 focus:border-[#fe3976] rounded-md px-5"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#fe3976] to-[#fc63c9] text-white px-6 text-lg font-semibold py-3 rounded-md"
                >
                  Search
                </button>
              </div>
            </div>
            {error && (
              <div className="absolute top-full left-0 mt-2 w-full flex">
                <div className="flex space-x-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1v4zm0 0h-1v-2h1v2zm0 0h-1v-1h1v1z"
                    />
                  </svg>
                  <p className="text-red-500 text-lg">
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
