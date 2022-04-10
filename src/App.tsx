import { ChakraProvider, Box, Text, VStack, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Connect } from "./components/Connect";
import { Wave } from "./components/Wave";
import { Waves } from "./components/Waves";

export const App = () => (
   <ChakraProvider theme={theme}>
      <VStack
         fontSize="xl"
         justifyContent="center"
         alignItems="center"
         width="full"
      >
         <Box w="full" display="flex" justifyContent="end">
            <ColorModeSwitcher justifySelf="flex-end" />
         </Box>

         <VStack spacing={8} w="full">
            <Text>Wave portal</Text>
            <Connect />
            <Wave />
            <Waves />
         </VStack>
      </VStack>
   </ChakraProvider>
);
