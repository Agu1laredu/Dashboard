import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiTicketLine, RiAddLine } from "react-icons/ri";

const CardTickettres = () => {
  const [isCard, setIscard] = useState(false);

  const Cards = [
    {
      Id: "1",
      ticket: "total",
      totalTickets: "33.000",
      text: "Total quantity",
      texto: "Completed projects",
    },
    {
      Id: "2",
      ticket: "inProcess",
      totalTickets: "65.000",
      text: "Total quantity",
      texto: "Maintenance projects",
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
          marginBottom: "20px",
          marginLeft: "10px",
        }}
      >
        <button
          style={{
            width: "200px",
            border: "2px solid black",
          }}
          onClick={() => setIscard(true)}
          className={`mr-2 ${
            !isCard
              ? "bg-secondary-200 text-secondary-900"
              : "bg-secondary-900 text-gray-300"
          } py-2 px-4 rounded-md text-sm font-medium`}
        >
          Completed
        </button>
        <button
          style={{ width: "200px", border: "2px solid black" }}
          onClick={() => setIscard(false)}
          className={`ml-2 ${
            isCard
              ? "bg-secondary-200 text-secondary-900"
              : "bg-secondary-900 text-gray-300"
          } py-2 px-4 rounded-md text-sm font-medium`}
        >
          Maintenance
        </button>
      </div>
      {filteredPlanilla.map(({ Id, totalTickets, texto, text }) => (
        <div key={Id} style={{ width: "300px" }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <RiTicketLine
                className="text-4xl p-2 box-content  rounded-xl"
                style={{ color: "#347add" }}
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

export default CardTickettres;
