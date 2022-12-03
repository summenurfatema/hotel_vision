import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import DatePicker from 'react-datepicker'

const SearchField = () => {
    return (
        <div className='w-full max-w-sm p-6 mx-auto border-4'>
            <h1 className='text-xl font-semibold text-gray-700'>Where do you want to go?</h1>

            <form className='mt-6'>
                <div className='shadow-md rounded-md my-2 p-3'>
                    <label htmlFor='location' className='block text-md font-bold text-gray-700'>Location</label>
                    <input type='text' name='location' placeholder='Add city or address' className='block w-full mt-1 p-1 bg-white text-gray-700' />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='shadow-md rounded-md flex justify-between items-center'>
                        <div>
                            <p>Arrival</p>
                            <DatePicker selected={new Date()} className='w-2/3' />
                        </div>
                        <FaCalendar />
                    </div>

                    <div className='shadow-md rounded-md flex justify-between items-center'>
                        <div>
                            <p>Deperture</p>
                            <DatePicker selected={new Date()} className='w-2/3' />
                        </div>
                        <FaCalendar />
                    </div>

                </div>

            </form>

        </div>
    );
};

export default SearchField;