import React from 'react';
import BookingForm from '../component/BookingForm';

const Booking = () => {
    return (
      <div className='w-11/12 mx-auto flex justify-between items-center'>
        <div className='w-1/2'>
          <h1 className="text-5xl">Cox's bazar</h1>
          <p className='text-md'>
            Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
            known for its very long, sandy beachfront, stretching from Sea Beach
            in the north to Kolatoli Beach in the south. Aggameda Khyang
            monastery is home to bronze statues and centuries-old Buddhist
            manuscripts. South of town, the tropical rainforest of Himchari
            National Park has waterfalls and many birds. North, sea turtles
            breed on nearby Sonadia Island.
          </p>
        </div>
        <div className='w-1/2'>
            <BookingForm></BookingForm>
        </div>
      </div>
    );
};

export default Booking;