import React from "react";
import CardTicket from "../../components/CardTickesComponents/CardTicket";
import CardTickets from "../../components/CardTickesComponents/Cardticketdos";
import CardTicketss from "../../components/CardTickesComponents/CardTickettres";
import CardTicketcuatro from "../../components/CardTickesComponents/CardTicketcuatro";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import PlanillaPage from "../../components/Comfirmed";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">
          Good morning, Aguilar J.Eduardo!
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <CardTicket style={{ width: "300px" }} />
        <CardTickets style={{ width: "300px" }} />
        <CardTicketss style={{ width: "300px" }} />
        <CardTicketcuatro style={{ width: "300px" }} />
      </div>
      <div>
        <h1
          className="text-2xl text-white my-10 "
          style={{
            width: "80px",
            borderBottom: `4px solid #03494D`,
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            transition: "border-bottom-color 0.5s ease-in-out",
            cursor: "pointer",
          }}
        >
          Board
        </h1>
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
