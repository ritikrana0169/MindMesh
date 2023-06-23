import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import React from "react";

import { AdminEditUsers } from "./AdminEditUsers";
import { AdminDeleteUsers } from "./AdminDeleteQuestions";
import { AdminUsers } from "./AdminUsers";

const AdminNav = () => {
    return (
        <>
            <Tabs variant="unstyled" orientation="vertical" paddingTop="80px">
                <TabPanels>
                    <TabPanel>
                        <AdminUsers />
                    </TabPanel>
                    <TabPanel>
                        <AdminEditUsers />
                    </TabPanel>
                    <TabPanel>
                        <AdminDeleteUsers />
                    </TabPanel>
                </TabPanels>

                <TabList width={"16vw"} borderLeft="2px solid black">
                    <Tab
                        _selected={{ color: 'white', bg: 'green.400' }}
                        style={{ fontSize: "large", fontWeight: "bold", height: "7vh" }}
                    >
                        Users
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "yellow.400" }}
                        style={{ fontSize: "large", fontWeight: "bold", height: "7vh" }}
                    >
                        Edit Users
                    </Tab>
                    <Tab
                        _selected={{ color: "white", bg: "red.400" }}
                        style={{ fontSize: "large", fontWeight: "bold", height: "7vh" }}
                    >
                        Delete Users
                    </Tab>
                    {/* <Tab
            _selected={{ color: "white", bg: "orange.400" }}
            style={{ fontSize: "large", fontWeight: "bold", height: "7vh" }}
          >
            Orders
          </Tab> */}
                </TabList>
            </Tabs>
        </>
    );
};

export default AdminNav;
