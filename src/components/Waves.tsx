import { HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAllWaves } from "../contract/wave";
import { formatAccount } from "../utils";

type WaveState = {
   address: string;
   message: string;
   timestamp: Date;
};

export function Waves() {
   const [waves, setWaves] = useState<WaveState[]>([]);

   useEffect(() => {
      getAllWaves().then((res) => setWaves(res));
   }, []);

   return (
      <Stack spacing="8">
         <Text padding="6">Waves </Text>
         {waves.length &&
            waves.map((wave, i) => (
               <Stack
                  key={i}
                  border="1px solid pink"
                  padding="6"
                  borderRadius="2xl"
               >
                  <HStack>
                     <Text fontWeight="bold" fontSize="sm">
                        {formatAccount(wave.address)}
                     </Text>

                     <Text fontSize="sm" opacity="0.6">
                        {wave.timestamp.toISOString()}
                     </Text>
                  </HStack>

                  <Text fontSize="xl">{wave.message}</Text>
               </Stack>
            ))}
      </Stack>
   );
}
