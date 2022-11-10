import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./header/Header";
import Table from "./table/Table";

const DataTable = () => {
  const {token} = useSelector(state => state.auth);
  const nav = useNavigate();

  useEffect(() => {
    console.log(token)
    if(!token) {
      nav("/login")
    }
  },[nav,token])

  return (
    <section className="dataTable">
      <Header />
      <Table />
    </section>
  );
};

export default DataTable;
