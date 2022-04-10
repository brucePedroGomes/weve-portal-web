import { Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { wave, waveCount } from "../contract/wave";

export function Wave() {
   const [count, setCount] = useState(0);

   function handleCount() {
      waveCount().then((res) => setCount(res));
   }

   return (
      <Stack>
         <Button onClick={wave}>Wave me!</Button>;
         <Button onClick={handleCount}>Count {count}</Button>
      </Stack>
   );
}
