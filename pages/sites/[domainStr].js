import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import defaultHeader from '../../assets/default-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ANIMATION_PRESETS from "../../assets/particlesPresets";

import styles from './[domainStr].module.css';

function Site({ site, links }) {
    const {
        bodyColor,
        containerColor,
        headerEmoji,
        headerImage,
        title,
        subtitle,
        titlesColor,
        linkTextColor,
        linkBackgroundColor,
        backgroundImage,
        liveNotificationColor,
        containerGradient,
        bodyGradient,
        bodyAnimationStyle
    } = site || {};

    useEffect(() => {
        document.body.style.backgroundColor = bodyColor;
        document.body.style.backgroundImage = bodyGradient || `url(${backgroundImage?.base64 || backgroundImage?.url})`;
    }, [])

    const particlesInit = async (main) => {
        // console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    
      const particlesLoaded = (container) => {
        // console.log(container);
    };

    return <div>
        <Head>
            <title>{title}</title>
        </Head>
        {bodyAnimationStyle && <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{...ANIMATION_PRESETS[bodyAnimationStyle], autoplay: true}} style={{height: '100vh', width: '100vw'}} />}
        <div className={styles.singleSiteWrapper}>
            <div className={styles.screenshotArea} id="screenshot-area">
                <div className={styles.singleSiteContainer} style={{ backgroundColor: containerColor, backgroundImage: containerGradient }}>
                {
                    headerEmoji 
                    ?
                        <div className={styles.headerEmoji}>{headerEmoji}</div>
                    :
                        <Image 
                            src={headerImage?.url || headerImage?.base64 || defaultHeader} 
                            alt={title} className={styles.headerImage}
                            width="200" height="200"
                            priority={true}
                        />
                }
                <h1 className={styles.singleTitle} style={{ color: titlesColor }}>{title}</h1>
                <h3 className={styles.singleSubtitle} style={{ color: titlesColor }}>{subtitle}</h3>
                {links ?
                    <ul className={styles.linksList}>
                        {links?.map((link) => {
                            return <a href={link.href.startsWith("http") ? link.href : "https://" + link.href} target="_blank" rel="noreferrer" className={styles.individualLink} style={{ color: linkTextColor, backgroundColor: linkBackgroundColor }} key={link.href}>
                                <div className={styles.linkTextAndLiveStatus}>
                                    <div className={styles.linkText}>{link.text}</div>
                                    {link.live ? <div>{link.live.isLive ? <><span>-</span><span style={{color: liveNotificationColor}}> LIVE!</span></> : "- not live"}</div> : null}
                                </div>
                                <FontAwesomeIcon icon={link?.icon?.split("_")} width="16" />
                            </a>
                        })}
                    </ul>
                : null}
            </div>
            </div>
        </div>
    </div>
}

export async function getServerSideProps(context) {
    const { domainStr } = context.query;
    const res = await fetch(`https://api.mostlink.co/api/sites/static/next/${domainStr}`);
    const data = await res.json();
    const { site, links } = data;
  
    return { props: { site, links } }
}
  
export default Site;