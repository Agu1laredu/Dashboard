import React, { useState } from "react";
import CardTicket from "../../components/CardTicket";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiSearch2Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { Link } from "react-router-dom";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import PlanillaPage from "../../components/Comfirmed";

const Home = () => {
  function renderCardTickets() {
    const cards = [
      {
        ticket: "total",
        totalTickets: "$145,000",
        text: "Total quantity",
        texto: "Donations received",
      },
      {
        ticket: "pending",
        totalTickets: "5,000",
        text: "Total quantity",
        texto: "Employees",
      },
      {
        ticket: "inProcess",
        totalTickets: "130,000",
        text: "Total quantity",
        texto: "Clients",
      },
      {
        ticket: "close",
        totalTickets: "125,000",
        text: "Total quantity",
        texto: "Finishing projects",
      },
    ];

    return cards.map((card) => (
      <CardTicket
        key={card.ticket}
        ticket={card.ticket}
        totalTickets={card.totalTickets}
        text={card.text}
        texto={card.texto}
      />
    ));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">
          Good morning, Aguilar J.Eduardo!
        </h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        {renderCardTickets()}
      </div>
      <div>
        <h1 className="text-2xl text-white my-10">Planilla</h1>
      </div>
      <div
        className=" p-8 rounded-xl"
        style={{
          backgroundColor: "#03494D",
          borderRadius: "15px",
          marginTop: " 50px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h5 className="md:hidden text-white font-bold mb-4">
            Mantenimientos
          </h5>
          <div style={{ position: "relative", left: "30px", top: "30px" }}>
            <div
              className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4"
              style={{ marginTop: "40px" }}
            >
              <h5>ID</h5>
              <h5 style={{ marginLeft: "-15px" }}>Type</h5>
              <h5 style={{ marginLeft: "-15px" }}>State</h5>
              <h5 style={{ marginLeft: "-50px" }}>Process</h5>
              <h5 style={{ marginLeft: "-50px" }}>Type Contract</h5>
            </div>
          </div>
          <PlanillaPage />
        </div>
      </div>
    </div>
  );
};

export default Home;
