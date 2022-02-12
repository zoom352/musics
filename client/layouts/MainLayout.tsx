import React from "react";
import Navbar from "../components/navbar";
import { Container } from "@mui/material"

const MainLayout: React.FC = ({children}) => {
    return (
        <>
          <Navbar/>
          <Container style={{margin: '90px 0'}}>
            {children}
          </Container>
        </>
    )
}

export default MainLayout
