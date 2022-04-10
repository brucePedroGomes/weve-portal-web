import { Button, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { wave } from "../contract/wave";

export function Wave() {
   const [message, setMessage] = useState("");

   function handleWave() {
      if (message) {
         wave(message);
      }
   }

   return (
      <VStack w="full" maxW="container.sm" spacing="8">
         <Textarea
            onChange={(event) => setMessage(event.currentTarget.value)}
         />
         <Button onClick={handleWave}>Wave me!</Button>;
      </VStack>
   );
}
