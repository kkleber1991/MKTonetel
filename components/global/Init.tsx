import { Box, Divider, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/core'
import React from 'react'
import Home from '../paginas/home/Home'

export default function Init() {
    return (
        <Flex justify="center" >
            <Box w="95%" bg="none" h={400} >
                <Tabs bg="#202020" variant="unstyled" colorScheme="green" align="end" >
                    <TabList color="white">
                        <Tab _selected={{ color: "white", bg: "#d54ab6" }}>HOME</Tab>
                        <Tab _selected={{ color: "white", bg: "#d54ab6" }}>SOBRE</Tab>
                        <Tab _selected={{ color: "white", bg: "#d54ab6" }}>PORTFÓLIO</Tab>
                        <Tab _selected={{ color: "white", bg: "#d54ab6" }}>CONTATO</Tab>
                    </TabList>
                    <Divider />
                    <TabPanels>
                        <TabPanel>
                            <Home />
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
