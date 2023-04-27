import React from "react";
import CardTicket from "../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { Link } from "react-router-dom";
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
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card */}
        <CardTicket
          ticket="total"
          totalTickets="$145,000"
          text="Total quantity"
          texto="Donations received"
        />
        <CardTicket
          ticket="pending"
          totalTickets="5,000"
          text=" Total quantity"
          texto="Employees"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="130,000"
          text="Total quantity"
          texto="Clients"
        />
        <CardTicket
          ticket="close"
          totalTickets="10,000"
          text="Total quantity"
          texto="Finishing projects"
        />
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
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                  Acciones
                </MenuButton>
              }
              align="st"
              arrow
              arrowClassName="bg-secondary-100"
              transition
              menuClassName="bg-secondary-100 p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Clients
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                >
                  Employees
                </Link>
              </MenuItem>
            </Menu>
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
