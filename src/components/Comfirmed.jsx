import "./App.css";
import "styled-components";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const App = () => {
  //1 - Configurar los hooks
  const [users, setUsers] = useState([]);

  //2 - Función para mostrar los datos con fetch
  const URL = "https://gorest.co.in/public/v2/users";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  //3 - Configuramos las columns para Datatable
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "E-MAIL",
      selector: (row) => row.email,
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "100px",
        marginTop: "-20px",
        backgroundColor: "#03494D", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#03494D",
        fontSize: "20px",
        fontFamily: "bold",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        backgroundColor: "#03494D",
        fontSize: "20px",
        fontFamily: "bold",
      },
    },
  };
  //4 - Mostramos la data en DataTable
  return (
    <div className="App">
      <b style={{ fontSize: "50px" }}>Old Client</b>
      <DataTable columns={columns} data={users} customStyles={customStyles} />
    </div>
  );
};

export default App;
