import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  const PlanillaComifirmed = [
    {
      Id: "#29950",
      Type: "Employees",
      State: "Comfirmed",
      Procces: "30%",
    },

    {
      Id: "#20050",
      Type: "Client",
      State: "Comfirmed",
      Procces: "50%",
    },
    {
      Id: "#28950",
      Type: "Employees",
      State: "Comfirmed",
      Procces: "3%",
    },
    {
      Id: "#27450",
      Type: "Client",
      State: "Comfirmed",
      Procces: "70%",
    },
  ];

  const Procces = [
    {
      Id: "#14884",
      Type: "Client",
      State: "Procces",
      Procces: "30%",
    },

    {
      Id: "#48999",
      Type: "Employees",
      State: "Procces",
      Procces: "50%",
    },
    {
      Id: "#8888992",
      Type: "Client",
      State: "Procces",
      Procces: "3%",
    },
    {
      Id: "#15551",
      Type: "Employees",
      State: "Procces",
      Procces: "70%",
    },
  ];

  const Proccess = [
    {
      Id: "#15988",
      Type: "Client",
      State: "Procces",
      Procces: "30%",
    },

    {
      Id: "#1546664",
      Type: "Client",
      State: "Procces",
      Procces: "50%",
    },
  ];

  const Complete = [
    {
      Id: "#14899",
      Type: "Client",
      State: "Complete",
      Procces: "30%",
    },

    {
      Id: "#1456161",
      Type: "Employees",
      State: "Complete",
      Procces: "50%",
    },
  ];
  return (
    <div>
      <div
        className=" p-8 rounded-xl"
        style={{
          backgroundColor: "#03494D",
          borderRadius: "15px",
          marginTop: " 50px",
          height: "500px",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {Proccess.map(({ Id, Type, State, Procces }) => (
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

                <span className="py-1 px-2 bg-yellow-500/10 text-blue-500 rounded-lg">
                  <p>{State}</p>
                </span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Process</h5>
                <span>{Procces}</span>
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
        ))}{" "}
        {Complete.map(({ Id, Type, State, Procces }) => (
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

                <span className="py-1 px-2 bg-yellow-500/10 text-green-500 rounded-lg">
                  <p>{State}</p>
                </span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Process</h5>
                <span>{Procces}</span>
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
        {PlanillaComifirmed.map(({ Id, Type, State, Procces }) => (
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

                <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
                  <p>{State}</p>
                </span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Process</h5>
                <span>{Procces}</span>
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
        {Complete.map(({ Id, Type, State, Procces }) => (
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

                <span className="py-1 px-2 bg-yellow-500/10 text-green-500 rounded-lg">
                  <p>{State}</p>
                </span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Process</h5>
                <span>{Procces}</span>
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
        {Procces.map(({ Id, Type, State, Procces }) => (
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

                <span className="py-1 px-2 bg-yellow-500/10 text-blue-500 rounded-lg">
                  <p>{State}</p>
                </span>
              </div>
              <div>
                <h5 className="md:hidden text-white font-bold mb-2">Process</h5>
                <span>{Procces}</span>
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
