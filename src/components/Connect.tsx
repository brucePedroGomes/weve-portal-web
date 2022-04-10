import { Button, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { transformAccount } from "../utils";
import { connectWallet, isConnected } from "../utils/connect";

export function Connect() {
   const [account, setAccount] = useState("");

   useEffect(() => {
      isConnected().then((res) => setAccount(res));
   }, []);

   function handleConnectWallet() {
      connectWallet().then((res) => setAccount(res));
   }

   return (
      <>
         <Stack>
            {account ? (
               <Text>wallet: {transformAccount(account)}</Text>
            ) : (
               <Button onClick={handleConnectWallet}>
                  Connect your wallet
               </Button>
            )}
         </Stack>
      </>
   );
}
