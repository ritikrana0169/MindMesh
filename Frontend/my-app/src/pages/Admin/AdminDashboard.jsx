import { Avatar, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Link as NavLink } from "react-router-dom";
import AdminNav from "./AdminNav";
import { AdminTab } from "./AdminTab";


const AdminDashboard = () => {

  return (
    <>
        <Flex
            style={{
            width: "100vw",
            height: "11vh",
            backgroundColor: "black",
            color: "white",
            padding: "15px",
            justifyContent: "space-between",
            position: "fixed",
            zIndex: "100",
            }}
        >
            <NavLink to="/admin">
            <Avatar
                height="8vh"
                width="8vw"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIkaZBDG0b3QQ5c_Uxa8j-Q0nFqOw6g6viA&usqp=CAU"
                cursor="pointer"
                marginTop={"-1"}
            />
            </NavLink>
            <Heading as="h1">Admin Dashboard</Heading>
            <NavLink to="/">
            <Button
                backgroundColor="white"
                size="lg"
                color={"black"}
                fontSize="lg"
                fontWeight="bold"
            >
                Logout
            </Button>
            </NavLink>
        </Flex>
        <AdminNav />
    </>
  );
};

export default AdminDashboard;