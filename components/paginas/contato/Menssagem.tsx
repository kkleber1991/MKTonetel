import { Box, Button, Textarea, Text } from '@chakra-ui/core'
import React from 'react'

export default function Menssagem() {
    return (
        <Box alignContent="center" >
            <Text color="white" textAlign="start" fontWeight="bold" pb={2}>Mensagem:</Text>
            <Textarea placeholder="Em que posso ajudar?" />
            <Button borderColor="white" textColor="white" variant="outline" colorScheme="none" >Enviar</Button>
        </Box>
    )
}
