import bs58 from "bs58";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { ComputeBudgetProgram, PublicKey, SystemProgram, Transaction, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { useContext } from 'react';
import { usePrivy } from '@privy-io/react-auth';

const lookupTableAddress = new PublicKey('2ATmQ41kVt7tpxWkyv82CGcVg6CWVWjp7GPuexoXTonR')

export function useAccount() {
  const {
    connected,
    connecting,
    disconnect,
    publicKey,
    signTransaction,
    sendTransaction,
    signMessage,
    wallet,
    connect
  } = useWallet();
  const { connection } = useConnection();
  const { authenticated, user, logout } = usePrivy();

  return {
    connected,
    connecting,
    connect,
    disconnect,
    address: publicKey?.toString(),
    publicKey,
    isPrivyWallet: false,
    walletProvider: {
      publicKey,
      signAndSendTransaction: async (
        transaction: any,
        sendOptions: any = {},
        isVersionedTransaction: boolean = false,
      ) => {
        
      },
      signMessage
    }
  };
}

