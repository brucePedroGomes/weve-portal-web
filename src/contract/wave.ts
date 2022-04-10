import { ethers } from "ethers";
import { contractAddress } from "./address";
import wavePortal from "../abi/WavePortal.json";

export async function wave() {
   const { ethereum } = window;

   if (!ethereum) return;

   const provider = new ethers.providers.Web3Provider(ethereum);

   const signer = provider.getSigner();

   const wavePortalContract = new ethers.Contract(
      contractAddress,
      wavePortal.abi,
      signer
   );

   const count = await wavePortalContract.getTotalWaves();

   console.log("Retrieved total wave count...", count.toNumber());

   const waveTxn = await wavePortalContract.wave();
   console.log("Mining...", waveTxn.hash);

   await waveTxn.wait();

   console.log("mined", waveTxn.hash);

   const countUpdated = await wavePortalContract.getTotalWaves();
   console.log("Retrieved total wave count...", countUpdated.toNumber());
}

export async function waveCount() {
   const { ethereum } = window;

   if (!ethereum) return;

   const provider = new ethers.providers.Web3Provider(ethereum);

   const signer = provider.getSigner();

   const wavePortalContract = new ethers.Contract(
      contractAddress,
      wavePortal.abi,
      signer
   );

   const count = await wavePortalContract.getTotalWaves();

   console.log("total count", count.toNumber());
   return count.toNumber();
}
