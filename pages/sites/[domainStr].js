import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './[domainStr].module.css';

function Site({ site, links }) {
    const [linksWithLive, setLinksWithLive] = useState([]);

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
        backgroundImage
    } = site;

    useEffect(() => {
        document.body.style.backgroundColor =  bodyColor;
        document.body.style.backgroundImage = `url(${backgroundImage?.base64 || backgroundImage?.url})`;
    }, [])

    return <div className={styles.singleSiteWrapper}>
        <div className={styles.screenshotArea} id="screenshot-area">
            <div className={styles.singleSiteContainer} style={{ backgroundColor: containerColor }}>
            {
                headerEmoji 
                ?
                    <div className={styles.headerEmoji}>{headerEmoji}</div>
                :
                    <Image 
                        src={headerImage?.url || headerImage?.base64 || "https://via.placeholder.com/300x300?text=image+here"} 
                        alt={title} className={styles.headerImage}
                        width="200" height="200"
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
                                {link.live ? <div>{link.live.isLive ? "- LIVE!" : "- not live"}</div> : null}
                            </div>
                            <FontAwesomeIcon icon={link?.icon?.split("_")} />
                        </a>
                    })}
                </ul>
            : null}
        </div>
        </div>
    </div>
}

export async function getServerSideProps(context) {
    const { domainStr } = context.query;
    const res = await fetch(`http://localhost:4000/api/sites/static/next/${domainStr}`);
    const data = await res.json();
    const { site, links } = data;
  
    return { props: { site, links } }
}
  
export default Site;