import React, { createContext, useState, useEffect } from "react";

// import dummy data
import { roomData } from "../data";

// create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);

  return (
    <RoomContext.Provider value={{ rooms, setRooms }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
