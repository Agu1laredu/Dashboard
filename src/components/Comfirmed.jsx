import React, { useState } from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { Link } from "react-router-dom";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  const Planilla = [
    {
      Id: "#14884",
      Type: "Client",
      State: "Confirmed",
      Process: "30%",
    },

    {
      Id: "#48999",
      Type: "Employees",
      State: "Process",
      Process: "50%",
    },
    {
      Id: "#8888992",
      Type: "Client",
      State: "Process",
      Process: "3%",
    },
    {
      Id: "#15551",
      Type: "Employees",
      State: "Process",
      Process: "70%",
    },
    {
      Id: "#15988",
      Type: "Client",
      State: "Confirmed",
      Process: "30%",
    },

    {
      Id: "#1546664",
      Type: "Client",
      State: "Process",
      Process: "50%",
    },
    {
      Id: "#14899",
      Type: "Client",
      State: "Complete",
      Process: "30%",
    },

    {
      Id: "#1456161",
      Type: "Employees",
      State: "Complete",
      Process: "50%",
    },
    {
      Id: "#29950",
      Type: "Employees",
      State: "Confirmed",
      Process: "30%",
    },

    {
      Id: "#20050",
      Type: "Client",
      State: "Confirmed",
      Process: "50%",
    },
    {
      Id: "#28950",
      Type: "Employees",
      State: "Complete",
      Process: "3%",
    },
    {
      Id: "#27450",
      Type: "Client",
      State: "Confirmed",
      Process: "70%",
    },
  ];

  const filteredPlanilla = Planilla.filter(
    ({ Type }) =>
      (isClient && Type === "Client") || (!isClient && Type === "Employees")
  );

  return (
    <div>
      <div
        className="p-8 rounded-xl"
        style={{
          backgroundColor: "#03494D",
          borderRadius: "15px",
          marginTop: "50px",
          height: "500px",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <div
          className="flex justify-center"
          style={{ position: "relative", top: "-10px", left: "-35%" }}
        >
          <button
            style={{ width: "200px", border: "2px solid black" }}
            onClick={() => setIsClient(true)}
            className={`mr-2 ${
              !isClient
                ? "bg-secondary-200 text-secondary-900"
                : "bg-secondary-900 text-gray-300"
            } py-2 px-4 rounded-md text-sm font-medium`}
          >
            Clients
          </button>
          <button
            style={{ width: "200px", border: "2px solid black" }}
            onClick={() => setIsClient(false)}
            className={`ml-2 ${
              isClient
                ? "bg-secondary-200 text-secondary-900"
                : "bg-secondary-900 text-gray-300"
            } py-2 px-4 rounded-md text-sm font-medium`}
          >
            Employees
          </button>
        </div>
        {filteredPlanilla.map(({ Id, Type, State, Process }) => (
          <div key={Id}>
            <div
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl"
              style={{
                cursor: "pointer",
              }}
            >
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
                <span>{Id}</span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Type</h5>
                <p>{Type}</p>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">State</h5>

                <span className="py-1 px-2  rounded-lg">
                  <p
                    style={{
                      color:
                        State === "Process"
                          ? "blue"
                          : State === "Confirmed"
                          ? "yellow"
                          : State === "Complete"
                          ? "Green"
                          : "black",
                    }}
                  >
                    {State}
                  </p>
                </span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Process</h5>
                <span>{Process}</span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">
                  Type Contract
                </h5>
                <Menu
                  menuButton={
                    <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                      Acciones
                    </MenuButton>
                  }
                  align="end"
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
                      Dashboard tickets
                    </Link>
                  </MenuItem>
                  <MenuItem className="p-0 hover:bg-transparent">
                    <Link
                      to="/perfil"
                      className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                    >
                      Información
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
