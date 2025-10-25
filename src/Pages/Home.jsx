import React from 'react';
import Slide from '../Pages/Slide'
import { Link } from 'react-router';

const Home = () => {
    return (
      <div className=" w-11/12 mx-auto flex justify-between items-center">
        <div className='w-1/2'>
          <h1 className="text-5xl font-bold">Cox's bazar</h1>
          <p className='text-md'>
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <Link to='/booking' className="btn text-black bg-[#F9A51A]">Booking..</Link>
        </div>
        <div className='w-1/2'>
            <Slide></Slide>
        </div>
      </div>
    );
};

export default Home;