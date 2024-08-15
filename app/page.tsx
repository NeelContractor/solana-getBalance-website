"use client"

import { useState } from "react";
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js"

export default function Home() {
  const [value, setValue] = useState<string>("")
  const [balance, setBalance] = useState<number | null>(null);

  const handleValue = async (input: string): Promise<void> => {
    setValue(input);
    const balance = await balanceOfAccount(input);
    setBalance(balance / LAMPORTS_PER_SOL);
  }

  async function balanceOfAccount(key: string): Promise<number> {
    try {
      const address = new PublicKey(key);
      const connection = new Connection(clusterApiUrl("devnet"));
      const balance = connection.getBalance(address);
      return balance;
    } catch (e) {
      console.error("Error fetching Balance:", e);
      return 0;
    }
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen text-white font-bold">
      <div className="mb-20 font-extrabold text-5xl">Check your Solana Wallet Balance</div>
      <input
        className="border-2 w-5/12 bg-black text-center"
        onChange={(event => handleValue(event.target.value))}
        type="text"
        value={value}
        placeholder="Enter Solana Address"
      />
      <div className="mt-4 text-2xl">
        {balance !== null ? `Balance: ${balance} SOL` : "Enter an address to check the balance"}
      </div>
    </div >
  );
}
