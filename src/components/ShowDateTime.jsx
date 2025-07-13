import React from "react";

const ShowDateTime = ({ timestamp, className = "", hideDate = false, hideTime = false }) => {
  const date = new Date(timestamp);

  const pad = (n) => String(n).padStart(2, "0");

  const formattedDate = `${date.getFullYear()}-${pad(
    date.getMonth() + 1
  )}-${pad(date.getDate())}`;

  const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className={className} title={`${formattedDate} | ${formattedTime}`}>
      <p className={`text-nowrap ${hideDate ? "hidden" : ""}`}>{formattedDate}</p>
      <p className={`text-nowrap ${hideTime ? "hidden" : ""}`}>{formattedTime}</p>
    </div>
  );
};

export default ShowDateTime;
