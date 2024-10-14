import React, { createContext, useState, useEffect } from "react";

// import dummy data
import { roomData } from "../data";

// create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adults");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const newRoom = roomData.filter((room) => {
      return total <= room.maxPerson;
    });

    setRooms(newRoom);
  };

  return (
    <RoomContext.Provider
      value={{ rooms, setRooms, adults, setAdults, kids, setKids, handleClick }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
