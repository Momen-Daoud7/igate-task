import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header/Header";
import Table from "./table/Table";

const DataTable = () => {
  const nav = useNavigate();
  const token = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!token) {
      nav("/login");
    }
  }, [nav, token]);

  return (
    <section className="dataTable">
      <Header />
      <Table />
    </section>
  );
};

export default DataTable;
