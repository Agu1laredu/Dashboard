import React from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiThumbUpLine,
  RiChat3Line,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Header = () => {
  const Notificaciones = [
    {
      id: "1",
      Name: "Aguilar J.Eduardo",
      Type: "Aguilar J.Eduardo",
      Notification: "Confirmed in Builder team",
      date: "15/05/2023",
      Icon: (
        <img
          src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
          className="w-8 h-8 object-cover rounded-full"
        />
      ),
    },
    {
      id: "1",
      Name: "Agu1lar Nicolas",
      Type: "Comment",
      Notification: "Aguilar Nicolas has commented on your...",
      date: "10/05/2023",
      Icon: (
        <RiChat3Line className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
      ),
    },
    {
      id: "1",
      Name: "Aguilar Martin",
      Type: "Nuevo like",
      Notification: "Martin Aguilar likes your pub...",
      date: "14/05/2023",
      Icon: (
        <RiThumbUpLine className="p-2 bg-blue-200 text-blue-700 box-content rounded-full" />
      ),
    },

    {
      id: "1",
      Name: "Agu1lar Nicolas",
      Type: "Comment",
      Notification: "Aguilar Nicolas has commented on your...",
      date: "04/05/2023",
      Icon: (
        <RiChat3Line className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
      ),
    },
  ];
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <RiNotification3Line />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                4
              </span>
            </MenuButton>
          }
          align="end"
          arrow
          transition
          arrowClassName="bg-secondary-100"
          menuClassName="bg-secondary-100 p-4"
        >
          <h1 className="text-gray-300 text-center font-medium">
            Notificaciones (4)
          </h1>
          <hr className="my-6 border-gray-500" />
          {Notificaciones.map(
            ({ Id, Name, Notification, Icon, Type, date }) => (
              <MenuItem key={Id} className="p-0 hover:bg-transparent">
                <Link
                  to="/"
                  className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
                >
                  {Icon}

                  <div className="text-sm flex flex-col">
                    <span>{Type}</span>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[10px]" style={{ margin: " 1px" }}>
                        {date}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs">{Notification}</p>
                  </div>
                </Link>
              </MenuItem>
            )
          )}
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2503/2503707.png"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>Aguilar J.Eduardo</span>
              <RiArrowDownSLine />
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
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2503/2503707.png"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Aguilar J.Eduardo</span>
                <span className="text-xs text-gray-500">
                  Agu1laredu@hotmail.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line />
              Setting
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/cerrar-sesion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine />
              Sign off
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
