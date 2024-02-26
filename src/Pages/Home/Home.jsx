// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from 'prop-types';


import "./Home.css"; 
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({sidebar}) => {

    const [category , setCategory] = useState(0);

    return (
        <>
        <Sidebar sidebar = {sidebar} category = {category} setCategory = {setCategory}/>
        <div className={` container ${sidebar ? "" : "large-container"}`}>
            <Feed  category = {category}/>

        </div>
            
        </>
    );
};

Home.propTypes = {
    sidebar: PropTypes.any.isRequired,
  };


export default Home; 