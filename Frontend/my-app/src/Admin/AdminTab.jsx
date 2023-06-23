import React from 'react'
import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
export const AdminTab = () => {
    return (
        <>
            <Tabs variant='unstyled' orientation="vertical" pt={"15vh"}>
                <TabList>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
                    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
