import { FormControl, FormLabel, Input, Flex, Box, Stack, SimpleGrid, Text, List, ListIcon, ListItem, Heading, Link, Button, Spacer, flexboxParser } from '@chakra-ui/core'
import React from 'react'
import { AiFillPhone, AiFillMail, AiOutlineLink } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import LinksUteis from '../dadosfooter/LinksUteis';
import Newslatter from '../dadosfooter/Newslatter';
import TemplateFree from '../dadosfooter/TemplateFree';


export default function DadosFooter() {
    return (
        <Box w="100%" bg="#202020" display="flex" justifyContent="center" >
        <SimpleGrid columns={[1, 2, 3]} spacing={40} w="95%">
                <Box h={190} flex={1} >
                    <TemplateFree />
                </Box>
                <Box h={190} flex={1} >
                    <LinksUteis />
                </Box>
                <Box h={190} flex={1} >
                    <Newslatter />
                </Box>
        </SimpleGrid>
        </Box>
    )
}

{/* <SimpleGrid minChildWidth={220} spacing={16}  ></SimpleGrid> */ }

        // <SimpleGrid w="100%" bg="#202020" display="flex" justify="center" >