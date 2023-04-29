import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiTicketLine, RiAddLine } from "react-icons/ri";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const CardTickets = () => {
  const [isCard, setIscard] = useState(false);

  const Cards = [
    {
      Id: "1",
      ticket: "total",
      totalTickets: "45.000",
      text: "Total quantity",
      texto: "Development",
    },
    {
      Id: "2",
      ticket: "inProcess",
      totalTickets: "30.000",
      text: "Total quantity",
      texto: " Designers",
    },
  ];
  const filteredPlanilla = Cards.filter(
    ({ Id }) => (isCard && Id === "1") || (!isCard && Id === "2")
  );

  return (
    <div
      className=" p-8 rounded-xl"
      style={{
        backgroundColor: "#03494D",
        width: "100%",
        margin: "10px",
      }}
    >
      <div
        className="flex items-center gap-4 text-3xl"
        style={{
          position: "relative",
          margin: "auto",
        }}
      >
        <button
          style={{
            width: "100%",
            border: "2px solid black",
          }}
          onClick={() => setIscard(true)}
          className={`mr-2 ${
            !isCard
              ? "bg-secondary-200 text-secondary-900"
              : "bg-secondary-900 text-gray-300"
          } py-2 px-4 rounded-md text-sm font-medium`}
        >
          <BiChevronsLeft
            className=" p-2 box-content  rounded-xl"
            style={{ fontSize: "20px", margin: "auto" }}
          />
        </button>
        <button
          style={{ width: "100%", border: "2px solid black" }}
          onClick={() => setIscard(false)}
          className={`ml-2 ${
            isCard
              ? "bg-secondary-200 text-secondary-900"
              : "bg-secondary-900 text-gray-300"
          } py-2 px-4 rounded-md text-sm font-medium`}
        >
          <BiChevronsRight
            className=" p-2 box-content  rounded-xl"
            style={{ fontSize: "20px", margin: "auto" }}
          />
        </button>
      </div>
      {filteredPlanilla.map(({ Id, totalTickets, texto, text }) => (
        <div key={Id} style={{ width: "300px" }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <RiTicketLine
                className="text-4xl p-2 box-content  rounded-xl"
                style={{ color: "#e9b308" }}
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl text-white font-bold mb-4">
              {totalTickets}
            </h1>
            <p>{text}</p>
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
      ))}
    </div>
  );
};

export default CardTickets;
