import { AspectRatio, Box } from '@chakra-ui/core'
import React from 'react'

export default function Mapa() {
    return (
        <Box>
            <AspectRatio ratio={16 / 9}>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.082718477953!2d-47.87217224938972!3d-15.79959178899428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b3d688fe7b3%3A0xa63529fc2cb9639b!2zTWluaXN0w6lyaW8gZGEgQ2nDqm5jaWEsIFRlY25vbG9naWEsIElub3Zhw6fDo28gZSBDb211bmljYcOnw7Vlcw!5e0!3m2!1spt-BR!2sbr!4v1603753745777!5m2!1spt-BR!2sbr" 
            width="600" 
            height="450" 
            aria-hidden="false" />
            </AspectRatio>
        </Box>
    )
}
