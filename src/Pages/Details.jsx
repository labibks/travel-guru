import React from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
// const servicesData = useLoaderData(); 
//   const { id } = useParams(); 
//   const service = servicesData.find((s) => s.serviceId === parseInt(id));

const DestinationDetails = () => {
  const desHotel = useLoaderData();
  const {id} = useParams()
  const hotel = desHotel.find((ho)=> ho.id === parseInt(id))

  const navigate = useNavigate();

  if (!desHotel)
    return <p className="text-center mt-10">Loading hotel details...</p>;

  return (
    <div>
      
        <div key={hotel.id} className="max-w-5xl mx-auto p-6 bg-white">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
          >
            ← Back
          </button>

          <div className="flex flex-col md:flex-row gap-6 shadow-lg rounded-lg overflow-hidden">
            <div className="md:w-1/2">
              <img
                src={hotel.image}
                alt={hotel.hotelName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-black mb-3">
                  {hotel.hotelName}
                </h1>
                <p className="text-gray-700 mb-4">{hotel.description}</p>

                <p className="text-yellow-500 font-semibold mb-2">
                  Rating: {hotel.rating} ⭐
                </p>
                <p className="text-gray-800 font-medium mb-4">
                  Price per Night: ${hotel.pricePerNight}
                </p>

                <h3 className="text-xl font-semibold mb-2">Amenities:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {hotel.amenities?.length ? (
                    hotel.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))
                  ) : (
                    <li>No amenities available</li>
                  )}
                </ul>
              </div>

              <Link
                to="/booking"
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default DestinationDetails;
