import { ethers } from "ethers";
import { contractAddress } from "./address";
import wavePortal from "../abi/WavePortal.json";

export type Wave = {
   waver: string;
   timestamp: number;
   message: string;
};

async function getContract() {
   const { ethereum } = window;

   const provider = new ethers.providers.Web3Provider(ethereum);

   const signer = provider.getSigner();

   const wavePortalContract = new ethers.Contract(
      contractAddress,
      wavePortal.abi,
      signer
   );

   return wavePortalContract;
}

export async function wave(message: string) {
   const wavePortalContract = await getContract();

   const waveTxn = await wavePortalContract.wave(message);
   await waveTxn.wait();
}

export async function waveCount() {
   const wavePortalContract = await getContract();

   const count = await wavePortalContract.getTotalWaves();

   console.log("total count", count.toNumber());
   return count.toNumber();
}

export async function getAllWaves() {
   const wavePortalContract = await getContract();

   const allWaves: Wave[] = await wavePortalContract.getAllWaves();

   return allWaves.map((wave) => ({
      address: wave.waver,
      timestamp: new Date(wave.timestamp * 1000),
      message: wave.message,
   }));
}
