import React from 'react'
import TopBar from '../pages/topbar'
import { useSelector } from "react-redux";
import TopbarAdmin from '../pages/topbarAdmin';


const success = (props) => {
  const successStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Lora , serif",
    color: "#444",
    fontSize: "80px",
    textAlign: "center",
    marginTop:"200px",
    backgroundColor:"#FFB6C1",
}
const nameOfUser = useSelector((state) => state.login.userName);
  return (<>
    {nameOfUser==="Admin" ? <><TopbarAdmin /></> :<> <TopBar /> </>}                                        
    <div style={successStyles}>
       {props.object}  {props.title} Successfully.
    </div>
    </>
  )
}

export default success
