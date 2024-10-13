import React, { createContext, useEffect, useState } from "react";

// create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  return <RoomContext.Provider>{children}</RoomContext.Provider>;
};

export default RoomProvider;
