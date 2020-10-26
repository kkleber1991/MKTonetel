import { Box, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/core'
import React from 'react'

export default function NameMail() {
    return (
        <Box>
            <FormControl id="Nome" color="white" >
                <FormLabel>Nome</FormLabel>
                <Input placeholder="Name" />
                <FormLabel pt={8} >E-mail</FormLabel>
                <Input type="email" />
            </FormControl>
        </Box>
    )
}
