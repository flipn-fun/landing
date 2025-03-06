import { useEffect, useRef, useState } from 'react';
export default function useWhiteList({ address }: { address: string | undefined }) {
  const [isWhiteListed, setIsWhiteListed] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const joinList = useRef<any>({});

  const checkWhiteList = async (address: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/pre_wait_list?address=${address}`);
      const data = await response.json();
      setIsWhiteListed(!!data?.data);
      return !!data?.data;
    } catch (error) {
      console.error('error:', error);
      return false;
    }
  };

  const joinWhiteList = async (address: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/pre_wait_list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ address })
      });
      const data = await response.json();
      if (data.code === 0) {
        joinList.current[address] = true;
        setIsJoined(true);
      }
      return !!data?.data;
    } catch (error) {
      console.error('error:', error);
      return false;
    }
  };

//   useEffect(() => {
//     if (address) {
//         checkWhiteList(address);
//     }
//   }, [address])

  useEffect(() => {
    if (address && typeof window !== "undefined" && (window as any).location.href.includes('isShare=1')) {
        joinWhiteList(address).then((res: any) => { 
            if (res) {
                joinList.current[address] = true;
                setIsJoined(true);
            }
        })
    }
  }, [address])

  useEffect(() => {
    if (address && joinList.current[address]) {
        setIsJoined(true);
    } else {
        setIsJoined(false);
    }
  }, [address])

  return {
    isWhiteListed,
    joinWhiteList,
    isJoined
  };
}