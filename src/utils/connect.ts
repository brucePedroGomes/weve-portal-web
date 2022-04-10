export async function connectWallet(): Promise<string> {
   const { ethereum } = window;

   if (!ethereum) {
      alert("Get MetaMask");
      return "";
   }

   const accounts = await ethereum.request({
      method: "eth_requestAccounts",
   });

   return accounts?.[0] ?? "";
}

export async function isConnected(): Promise<string> {
   const { ethereum } = window;

   if (!ethereum) return "";

   const accounts = await ethereum.request({ method: "eth_accounts" });

   return accounts?.[0] ?? "";
}
