import React from "react";
import { useLoaderData, useNavigate, useLocation } from "react-router";

const Destination = () => {
  const destinationData = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();

  // 🔍 URL theke search query ber kora
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // 🔍 Filter data based on searchQuery (Navbar theke asha search)
  const filteredDestinations = destinationData.filter((des) =>
    des.hotelName.toLowerCase().includes(searchQuery)
  );

  const handleSeeDetails = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <div className="p-6 flex flex-col gap-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : "Explore All Destinations"}
      </h1>

      {filteredDestinations.length > 0 ? (
        filteredDestinations.map((des) => (
          <div
            key={des.id}
            className="flex border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Left side image */}
            <div className="w-1/3">
              <img
                src={des.image}
                alt={des.hotelName}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right side content */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-black">
                  {des.hotelName}
                </h2>
                <p className="text-gray-700 mb-2">{des.description}</p>
                <p className="text-yellow-500 font-semibold mb-2">
                  Rating: {des.rating} ⭐
                </p>
              </div>

              <button
                onClick={() => handleSeeDetails(des.id)}
                className="self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                See Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600 text-lg">
          No destination found for “{searchQuery}”
        </p>
      )}
    </div>
  );
};

export default Destination;
