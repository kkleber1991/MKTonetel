import { Box, Flex, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/core'
import React from 'react'
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import { GiWorld } from 'react-icons/gi'

export default function TemplateFree() {
    return (
        <VStack pt={5}
        display={{ md: "flex" }} bg="none" h={140} >
            <Text color="white" >
                <List spacing={3}>
                    <Text  >Esse é um template gratuito feito por Kedllon Kleber</Text>
                    <ListItem>
                        <ListIcon as={AiFillPhone} color="gray.500" />
                                xx-9 9999-9999
                </ListItem>
                    <ListItem>
                        <ListIcon as={AiFillMail} color="gray.500" />
                                e-mail@email.com
                </ListItem>
                    <ListItem>
                        <ListIcon as={GiWorld} color="gray.500" />
                                www.kedllon.solutions
                </ListItem>
                </List>
            </Text>
        </VStack>
    )
}
