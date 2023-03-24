"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "./DatePicker.style.css";
import React from "react";

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
        <div className="flex border-secondary-orange p-2.5 text-center">
          {title}
        </div>
        <div className="relative flex rounded-2xl border-2 border-secondary-orange p-1">
          <DatePicker
            dateFormat="yyyy/MM/dd"
            startDate={new Date()}
            minDate={new Date()}
            onChange={(date: Date) => onDateChange(date)}
            selected={endDate}
          />
        </div>
      </div>
    </>
  );
};

export default DatePickerComp;
