import { Box, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'

export default function ImgContato() {
    return (
        <Box
            mb={15}
            backgroundImage="url('/contact-header.jpg')"
            backgroundPosition="center"
            bgRepeat="no-repeat"
            h={[300, 400, 600]}
            objectFit="none" >
        </Box>
    )
}
