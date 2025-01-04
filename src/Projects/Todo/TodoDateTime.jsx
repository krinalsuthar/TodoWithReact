import { useState, useEffect } from "react";
export const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString();
      setDateTime(`${date} - ${time}`);
    }, 1000);
    return () => clearInterval(interval);
  });
  return <h3 className="text-center mb-3">{dateTime}</h3>;
};
