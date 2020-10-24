import { Box, Divider, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/core'
import React from 'react'
import Home from '../paginas/home/Home'
import HVStack from '../paginas/home/HVStack'
import ImgHome from '../paginas/home/ImgHome'

export default function Init() {
    return (
        <Flex justify="center" >
            <Box w="95%" bg="none" >
                <Tabs bg="#202020" variant="unstyled" colorScheme="green" align="end" >
                    <TabList color="white">
                        <Tab w={60} _selected={{ color: "white", bg: "#d54ab6" }}>HOME</Tab>
                        <Tab w={80} _selected={{ color: "white", bg: "#d54ab6" }}>SOBRE</Tab>
                        <Tab w={100} _selected={{ color: "white", bg: "#d54ab6" }}>PORTFÓLIO</Tab>
                        <Tab w={90} _selected={{ color: "white", bg: "#d54ab6" }}>CONTATO</Tab>
                    </TabList>
                    <Divider />
                    <TabPanels>
                        <TabPanel>
                            <ImgHome />
                            <Home />
                            <HVStack />
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Flex>
    )
}

// line,enclosed,enclosed-colored, soft-rounded, solid-rounded, unstyled
