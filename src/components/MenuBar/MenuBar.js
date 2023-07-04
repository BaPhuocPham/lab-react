import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import "./MenuBar.css";
import { Link, useNavigate } from "react-router-dom";

export const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      className="navBar"
      alignLinks="right"
      brand={
        <Link to={`/`} className="brand-logo left">
          Movie web
        </Link>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem onClick={() => navigate("/")}>Home</NavItem>
      <NavItem onClick={() => navigate("contact")}>Contact</NavItem>
      <NavItem onClick={() => navigate("about")}>About</NavItem>
      <NavItem onClick={() => navigate("news")}>News</NavItem>
    </Navbar>
  );
};
