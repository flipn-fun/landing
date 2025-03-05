import { useEffect, useState } from "react";

export default function useUserAgent() {
    const [isMobile, setIsMobile] = useState(false);
    const [innerHeight, setInnerHeight] = useState<string>('100vh');

    useEffect(() => {
        const checkIsMobile = () => {
            const _isMobile =
                window.navigator.userAgent.includes("Mobile") ||
                window.innerWidth < 650;
            setIsMobile(_isMobile);
            setInnerHeight(_isMobile ? window.innerHeight + 'px' : '100vh');
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);
        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    return {
        isMobile,
        innerHeight,
    };
}