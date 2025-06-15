import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ButtonContainer from "./ButtonContainer";
import "./Header.css";

const HeaderContainer = ({ searchQuery, setSearchQuery }) => (
  <header className="header">
    <Logo />
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <ButtonContainer />
  </header>
  
);

export default HeaderContainer;