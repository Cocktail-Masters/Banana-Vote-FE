import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-date-picker";

import "./DatePicker.style.css";
import "./Calendar.style.css";

const DatePickerComp = ({
  title,
  endDate,
  onDateChange,
}: {
  title: string;
  endDate: Date;
  onDateChange: Dispatch<SetStateAction<Date>>;
}) => {
  return (
    <>
      <div className="flex items-center">
        <div className="flex border-[#FFA45B] p-2.5 text-center">{title}</div>
        <div className="relative">
          <DatePicker
            calendarAriaLabel="Toggle calendar"
            clearAriaLabel="Clear value"
            dayAriaLabel="Day"
            monthAriaLabel="Month"
            nativeInputAriaLabel="Date"
            onChange={onDateChange}
            value={endDate}
            minDate={new Date()}
            yearAriaLabel="Year"
          />
        </div>
      </div>
    </>
  );
};

export default DatePickerComp;
