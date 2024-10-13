import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "1 Adults" },
  { name: "2 Adults" },
  { name: "3 Adults" },
  { name: "4 Adults" },
];

const AdultsDropdown = () => {
  const {} = useContext(RoomContext);
  return (
    <Menu as="div">
      <Menu.Button>
        Adults <BsChevronDown className="" />
      </Menu.Button>
      <Menu.Items as="ul"></Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
