 import { extendTheme } from '@chakra-ui/react'

 export const theme = extendTheme({
    fonts : {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif'
    },
    styles: {
        global : {
            body : {
                bg: 'gray.900',
                color: 'gray.50',
            }
        }
    }

 })