import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { usePrivy } from '@privy-io/react-auth';

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

