import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

import { BsCalendar } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex  items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base" />
        </div>
      </div>
      <div className="w-full h-full">
        <DatePicker
          className="w-full h-full"
          selected={endDate}
          placeholderText="Check In"
          onChange={(date) => setEndDate(date)}
        />
      </div>
    </div>
  );
};

export default CheckOut;
