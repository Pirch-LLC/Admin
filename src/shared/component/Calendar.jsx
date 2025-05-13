import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const events = [
  {
    title: "Frog Life Cycle",
    date: "2025-04-07",
    extendedProps: { icon: "🐸", color: "green", teacher: "Mason" },
  },
  {
    title: "Reading Time",
    date: "2025-04-09",
    extendedProps: { icon: "📘", color: "blue", teacher: "Mason" },
  },
  {
    title: "Art Project",
    date: "2025-04-11",
    extendedProps: { icon: "🎨", color: "orange", teacher: "Mason" },
  },
];

const renderEventContent = (eventInfo) => {
  const { icon, color, teacher } = eventInfo.event.extendedProps;

  return (
    <div className={`custom-event border-${color}`}>
      <div className="icon">{icon}</div>
      <div className="info">
        <div className="title">{eventInfo.event.title}</div>
        <div className="teacher">- {teacher}</div>
      </div>
    </div>
  );
};

const Calendar = () => {
  return (
    <div className="calendar-wrapper p-4 ">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        events={events}
        eventContent={renderEventContent}
        showNonCurrentDates={false} 
        fixedWeekCount={false}
      />
    </div>
  );
};

export default Calendar;
