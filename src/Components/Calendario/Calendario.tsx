import React from "react";
import "moment/locale/es";
import "./Calendario.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);
export const Calendario = () => {
  return (
    <div className="flex justify-center w-[100%] h-[100vh]">
      <Calendar
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "90%", width: "98%", backgroundColor: 'white', padding: '1rem', borderRadius: 10 }}
      />
    </div>
    //TODO: Calendar where I can add tasks by day
  );
};
