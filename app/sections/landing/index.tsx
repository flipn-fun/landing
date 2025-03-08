"use client"

import { motion } from 'framer-motion';
import styles from './Landing.module.css';
import useWhiteList from './useWhiteList';
import useUserAgent from './useUserAgent';
import { useEffect, useMemo, useState } from 'react';



const Landing = () => {
    const queryParams = urlFormat(typeof window === 'undefined' ? '' : window.location.href)
    const [address, setAddress] = useState('')

    const { isJoined, joinWhiteList } = useWhiteList({ address });
    const { isMobile, innerHeight } = useUserAgent();

    const isError = useMemo(() => {
        if (!address) return true;
        return !/^[1-9A-Za-z]{32,44}$/.test(address);
    }, [address])

    useEffect(() => {
        if (queryParams['address']) {
            setAddress(queryParams['address'])
        }
    }, [])



    return (
        <div style={{ height: innerHeight, overflow: 'auto' }}>
            <div className={styles.container + " " + (isMobile ? styles.mobile : styles.pc)}>
                <div className={styles.titleIcon}>
                    <img style={{ width: 86 }} src="/img/landing/logo.svg" alt="Logo" />
                </div>

                <div className={styles.left}>
                    <div className={styles.doorSection + " " + styles.mainPic}>
                        <img src="/img/landing/pic1.gif" alt="Door illustration" />
                    </div>

                    <div className={styles.spinningLogo + " " + styles.mainPic}>
                        <img src="/img/landing/pic3.gif" alt="Spinning logo" />
                    </div>
                </div>

                <div className={styles.middle}>
                    <div className={styles.frogSection + " " + styles.mainPic}>
                        <img src="/img/landing/pic2.gif" alt="Frog illustration" />
                    </div>

                    <div className={styles.chartSection + " " + styles.mainPic}>
                        <img src="/img/landing/pic4.gif" alt="Trading chart" />
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.heroSection}>
                        <img src="/img/landing/logo.svg" alt="Hero title" className={styles.icon} />
                        <h1 className={styles.heroTitle}>Memecoins are supposed to be fun MMGA - Make Memes Great Again</h1>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <p className={styles.heroDesc}>Trade and launch memecoins as easy as scrolling Tiktok. Coming soon to Solana.</p>
                        </motion.div>

                        {
                            <div className={styles.connectedWrapper}>
                                <div className={styles.connected}>
                                    <input placeholder='Your Solana address' className={styles.connectedAddress} value={address} onChange={(e) => {
                                        setAddress(e.target.value)
                                    }} />
                                    {/* <div className={styles.connectedIcon} onClick={() => {
                                        disconnect();
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91613 16H10.5731C11.0656 16 11.4652 15.57 11.4652 15.04C11.4652 14.51 11.0656 14.08 10.5731 14.08H2.00906C1.92728 13.974 1.78417 13.662 1.78417 13.164V2.838C1.78417 2.34 1.92728 2.028 2.00906 1.92H10.5731C11.0656 1.92 11.4652 1.49 11.4652 0.96C11.4652 0.43 11.0656 0 10.5731 0H1.91613C0.823322 0 0 1.22 0 2.838V13.162C0 14.78 0.823322 16 1.91613 16ZM12.3929 12.2771L15.7266 8.69156L15.7383 8.67941C15.913 8.49136 16.0004 8.24579 16.0003 8.00023C16.0003 7.75467 15.913 7.5091 15.7383 7.32106L15.7237 7.30575L12.3948 3.72341C12.0454 3.34741 11.4823 3.34741 11.1329 3.72341C10.7835 4.09941 10.7835 4.70541 11.1329 5.08141L12.953 7.03906H6.83918C6.34667 7.03906 5.94709 7.46906 5.94709 7.99906C5.94709 8.52906 6.34667 8.95906 6.83918 8.95906H12.9542L11.1329 10.9191C10.7835 11.2951 10.7835 11.9011 11.1329 12.2771C11.3057 12.4651 11.5343 12.5591 11.7629 12.5591C11.9915 12.5591 12.2201 12.4651 12.3929 12.2771Z" fill="#FF00D9" />
                                        </svg>
                                    </div> */}
                                </div>
                                {
                                    isJoined && !isError ? <div className={styles.tipWrapper}>
                                        <img src="/img/landing/tip.svg" />
                                        <div className={styles.followedTip}>
                                            You’ve asked for a waitlist, Follow us on X for the latest news
                                        </div>
                                    </div> : <button style={{ opacity: isError ? 0.5 : 1 }} className={styles.followButton} onClick={async () => {
                                       
                                       if (isError) {
                                            return
                                        }
                                        joinWhiteList(address)

                                        const name = 'Memecoins are supposed to be fun MMGA - Make Memes Great Again'

                                        window.open(
                                            `https://twitter.com/intent/tweet?text=${encodeURIComponent(name)}&url=${encodeURIComponent(window.location.href)}`,
                                            "_blank"
                                        );


                                    }}>Join Waitlist for the earliest token launches.</button>
                                }
                            </div>


                            // : <div className={styles.connectBtnWrapper}>
                            //     <WalletModalButton
                            //         style={{
                            //             background: "#FFD700",
                            //             borderRadius: 12,
                            //             padding: "0 10px",
                            //             marginTop: 60
                            //         }}
                            //     >
                            //         Connect Wallet
                            //     </WalletModalButton>
                            //     <div className={styles.waitlist}>Connect your wallet and join the waitlist!</div>
                            // </div>
                        }

                        <div className={styles.light1}>
                            <img src="/img/landing/light1.svg" alt="Light 1" />
                        </div>

                        <div className={styles.light2}>
                            <img src="/img/landing/light2.svg" alt="Light 2" />
                        </div>

                        <div className={styles.light3}>
                            <img src="/img/landing/light3.svg" alt="Light 3" />
                        </div>
                    </div>

                    {
                        isMobile && (
                            <motion.div
                                style={{
                                    width: '100vw',
                                    display: 'flex',
                                    marginTop: 25,
                                    overflow: 'hidden'
                                }}
                            >
                                <motion.div
                                    animate={{
                                        x: ['0%', '-300vw'],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        repeatType: 'loop',
                                        ease: 'linear',
                                    }}
                                    style={{
                                        width: '400vw',
                                        display: 'flex',
                                        gap: 10,
                                    }}
                                >
                                    <img src="/img/landing/pic1.gif" alt="Door illustration" style={{ width: '100vw', marginTop: 50, display: 'block', borderRadius: 16 }} />
                                    <img src="/img/landing/pic3.gif" alt="Spinning logo" style={{ width: '100vw', display: 'block', borderRadius: 16, marginBottom: 50 }} />
                                    <img src="/img/landing/pic2.gif" alt="Frog illustration" style={{ width: '100vw', marginTop: 50, display: 'block', borderRadius: 16 }} />
                                    <img src="/img/landing/pic4.gif" alt="Trading chart" style={{ width: '100vw', display: 'block', borderRadius: 16, marginBottom: 50 }} />
                                </motion.div>
                            </motion.div>
                        )}

                    <div className={styles.featuresSection}>
                        <img src="/img/landing/pc-text.png" alt="Features" className={styles.pcText} />
                        <img src="/img/landing/mobile-text.png" alt="Features" className={styles.mobileText} />
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.footerText}>Build on Solana</div>
                    <div className={styles.footerIcons}>
                        <img className={styles.footerIcon} onClick={() => {
                            window.open("https://docs.flipn.fun/", '_blank')
                        }} src="/img/landing/gitbook.svg" alt="X" />
                        <img className={styles.footerIcon} src="/img/landing/x.svg" alt="X" />
                        <img className={styles.footerIcon} src="/img/landing/telegram.svg" alt="Telegram" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export function urlFormat(url: string) {
    if (!url) {
        return {}
    }

    const queryString = url.split('?')[1] || '';
    const queryParams: { [key: string]: string } = {};

    if (queryString) {
        const pairs = queryString.split('&');
        for (const pair of pairs) {
            const [key, value] = pair.split('=');
            queryParams[decodeURIComponent(key)] = decodeURIComponent(value || '');
        }
    }

    return queryParams
}

export default Landing;
