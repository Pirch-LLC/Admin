import React from "react";

export default function UpcomingEvents() {
  return (
    <div className="upcoming-dates p-2 px-4 bg-light-color border-round-2xl flex flex-column">
      <h2 className="lobster-regular font-normal">Upcoming Events</h2>

      <strong className="font-semibold mt-2">Math</strong>
      <p className="m-0 sub-heading upcoming-dates">18 April 2025 at 14:30</p>

      <strong className="font-semibold mt-2">Science</strong>
      <p className="m-0 sub-heading upcoming-dates">20 April 2025 at 13:30</p>

      <strong className="font-semibold mt-2">Geography</strong>
      <p className="m-0 sub-heading">23 April 2025 at 14:30</p>
    </div>
  );
}
