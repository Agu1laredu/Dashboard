import React from "react";
import { Link } from "react-router-dom";
import { RiTicketLine, RiMore2Fill, RiAddLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const CardTicket = (props) => {
  const { ticket, totalTickets, text, texto } = props;

  let status = "";
  let textColor = "";

  switch (ticket) {
    case "pending":
      status = "bg-yellow-500/10 text-yellow-500";
      textColor = "black";
      break;
    case "inProcess":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "black";
      break;
    case "close":
      status = "bg-green-500/10 text-green-500";
      textColor = "black";
      break;
    case "total":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "black";
      break;
  }

  return (
    <div className=" p-8 rounded-xl" style={{ backgroundColor: "#03494D" }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <RiTicketLine
            className={`text-4xl ${status} p-2 box-content rounded-xl`}
          />
        </div>
      </div>
      {/* Number of tickets */}
      <div>
        <h1 className="text-4xl text-white font-bold mb-4">{totalTickets}</h1>
        <p className={textColor}>{text}</p>
      </div>
      <hr className="border border-dashed border-gray-500/50 my-4" />
      <div>
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:underline"
        >
          <RiAddLine /> {texto}
        </Link>
      </div>
    </div>
  );
};

export default CardTicket;
