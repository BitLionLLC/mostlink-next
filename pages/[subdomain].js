import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import defaultHeader from '../assets/default-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../lib/fontawesomePublic';

import styles from './[subdomain].module.css';
import { imageFieldSrc } from '../lib/imageField';

const ParticlesBackdrop = dynamic(() => import('../components/ParticlesBackdrop'), {
  ssr: false,
  loading: () => null,
});

function Site({ site, links, username, subdomain }) {
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);

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
  }, [bodyColor]);

  useEffect(() => {
    const bg =
      bodyGradient ||
      (imageFieldSrc(backgroundImage) ? `url(${imageFieldSrc(backgroundImage)})` : '');
    if (!bg) {
      document.body.style.backgroundImage = '';
      return;
    }
    const apply = () => {
      document.body.style.backgroundImage = bg;
    };
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = requestIdleCallback(apply, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(apply, 0);
    return () => clearTimeout(t);
  }, [bodyGradient, backgroundImage]);

  const onMouseEnter = (index) => {
    setHoveredLinkIndex(index);
  };

  const onMouseLeave = () => {
    setHoveredLinkIndex(null);
  };

  return <div>
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-X10YJFYWXK" />
    <Script id="gtag-init" strategy="lazyOnload">
      {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-X10YJFYWXK');
            `}
    </Script>
    <Head>
      {/* Twitter and Open Graph */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@mostlinkco" />
      <meta name="twitter:creator" content="@thebitlion" />
      <meta property="og:url" content={`https://${subdomain}.mostlink.co`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={`Check out ${username}'s site built with Mostlink.`} />
      <meta property="og:image" content="https://www.mostlink.co/static/media/example2.6e6ff089dce1fdf5fd71.png" />

      <title>{title}</title>
    </Head>
    {bodyAnimationStyle ? <ParticlesBackdrop bodyAnimationStyle={bodyAnimationStyle} /> : null}
    <div className={styles.singleSiteWrapper}>
      <div className={styles.singleSiteContainer} style={{ backgroundColor: containerColor, backgroundImage: containerGradient }}>
        {
          headerEmoji 
            ?
            <div className={styles.headerEmoji}>{headerEmoji}</div>
            :
            <img
              className={styles.headerImage}
              src={imageFieldSrc(headerImage) || defaultHeader.src}
              alt=""
              width={200}
              height={200}
              decoding="async"
              fetchPriority="high"
            />
        }
        <h1 className={styles.singleTitle} style={{ color: titlesColor }}>{title}</h1>
        <h3 className={styles.singleSubtitle} style={{ color: titlesColor }}>{subtitle}</h3>
        {links ?
          <ul className={styles.linksList}>
            {links?.map((link, i) => {
              const hoverStyle = {color: linkBackgroundColor, background: linkTextColor};
              const nonHoverStyle = {color: linkTextColor, background: linkBackgroundColor};

              return <a href={link.href.startsWith('http') ? link.href : 'https://' + link.href} 
                target="_blank" rel="noreferrer" className={styles.individualLink} 
                style={{ color: hoveredLinkIndex === i ? hoverStyle.color : nonHoverStyle.color, background: hoveredLinkIndex === i ? hoverStyle.background: nonHoverStyle.background }} 
                key={link.href} onMouseEnter={() => onMouseEnter(i)} onMouseLeave={onMouseLeave}
              >
                <div className={styles.linkTextAndLiveStatus}>
                  <div className={styles.linkText}>{link.text}</div>
                  {link.live ? <div>{link.live.isLive ? <><span>-</span><span style={{color: liveNotificationColor}}> LIVE!</span></> : '- not live'}</div> : null}
                </div>
                <FontAwesomeIcon icon={link?.icon?.split('_')} width="16" />
              </a>;
            })}
          </ul>
          : null}
      </div>
    </div>
  </div>;
}

export async function getServerSideProps(context) {
  const { subdomain } = context.query;
  const res = await fetch(`${process.env.API_HOST}/api/sites/static/next/subdomain-${subdomain}`) || {};
  const data = await res.json();
  const { site, links, username } = data;

  return {
    props: {
      site: site ?? null,
      links: links ?? null,
      username: username ?? null,
      subdomain,
    },
  };
}
  
export default Site;