import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState, useMemo } from 'react';
import defaultHeader from '../assets/default-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ANIMATION_PRESETS from '../assets/particlesPresets';

import styles from './[subdomain].module.css';

const particlesInit = async (main) => {
  // console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};

const particlesLoaded = (container) => {
  return;
};

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

  const memoizedParticles = useMemo(() => <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{...ANIMATION_PRESETS[bodyAnimationStyle], autoplay: true}} style={{height: '100vh', width: '100vw'}} />);

  useEffect(() => {
    document.body.style.backgroundColor = bodyColor;
    document.body.style.backgroundImage = bodyGradient || `url(${backgroundImage?.base64 || backgroundImage?.url})`;
  }, []);

  const onMouseEnter = (index) => {
    setHoveredLinkIndex(index);
  };

  const onMouseLeave = () => {
    setHoveredLinkIndex(null);
  };

  return <div>
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X10YJFYWXK" />
    <Script id={0}>
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
      <meta property="og:url" content={`https://${subdomain}.mostlink.io`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={`Check out ${username}'s site built with Mostlink.`} />
      <meta property="og:image" content="https://www.mostlink.co/static/media/example2.6e6ff089dce1fdf5fd71.png" />

      <title>{title}</title>
    </Head>
    {bodyAnimationStyle && memoizedParticles}
    <div className={styles.singleSiteWrapper}>
      <div className={styles.singleSiteContainer} style={{ backgroundColor: containerColor, backgroundImage: containerGradient }}>
        {
          headerEmoji 
            ?
            <div className={styles.headerEmoji}>{headerEmoji}</div>
            :
            <div className={styles.headerImage} id="headerImg">
              <style jsx>{`
                                #headerImg {
                                    background-image: url(${headerImage?.url || headerImage?.base64 || defaultHeader.src})
                                }
                            `}</style>
            </div>
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