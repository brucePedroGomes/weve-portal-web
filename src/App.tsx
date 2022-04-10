import {
   ChakraProvider,
   Box,
   Text,
   VStack,
   theme,
   Button,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Connect } from "./components/Connect";

export const App = () => (
   <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
         <Box w="full" display="flex" justifyContent="end">
            <ColorModeSwitcher justifySelf="flex-end" />
         </Box>

         <VStack spacing={8}>
            <Text>Wave portal</Text>
            <Connect />
            <Button>Wave Me</Button>
         </VStack>
      </Box>
   </ChakraProvider>
);
