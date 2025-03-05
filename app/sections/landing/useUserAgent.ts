import { useEffect, useState } from "react";

export default function useUserAgent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const _isMobile =
                window.navigator.userAgent.includes("Mobile") ||
                window.innerWidth < 650;
            setIsMobile(_isMobile);

        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);
        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    return {
        isMobile
    };
}