import { Box, SimpleGrid, Popover, PopoverTrigger, PopoverContent, Image, Center } from '@chakra-ui/core'
import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'

const img = [
    '/portfolio-img1.jpg',
    '/portfolio-img2.jpg',
    '/portfolio-img3.jpg',
    '/portfolio-img4.jpg',
    '/portfolio-img5.jpg',
    '/portfolio-img6.jpg',
    '/portfolio-img7.jpg',
    '/portfolio-img8.jpg',
    '/portfolio-img9.jpg',
    '/portfolio-img0.jpg'
]

export default function Portfolio() {
    return (
        <Box h="100%">
            <SimpleGrid columns={[1,2,3]} spacingX="40px" spacingY="40px" p={6} >
                <Box>
                    <Image src="/portfolio-img1.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
                <Box>
                    <Image src="/portfolio-img2.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
                <Box>
                    <Image src="/portfolio-img3.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
                <Box>
                    <Image src="/portfolio-img4.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
                <Box>
                    <Image src="/portfolio-img5.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
                <Box>
                    <Image src="/portfolio-img6.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
                <Box>
                    <Image src="/portfolio-img7.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
                <Box>
                    <Image src="/portfolio-img8.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
                <Box>
                    <Image src="/portfolio-img9.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
                <Box>
                    <Image src="/portfolio-img10.jpg" h={[80,140,190,240]} boxSize="100%" />
                </Box>
            </SimpleGrid>
        </Box>
    )
}
