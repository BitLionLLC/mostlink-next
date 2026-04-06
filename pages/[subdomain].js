import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import defaultHeader from '../assets/default-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../lib/fontawesomePublic';

import styles from './[subdomain].module.css';
import { imageFieldSrc } from '../lib/imageField';
import ParkingPage from '../components/ParkingPage';

const ParticlesBackdrop = dynamic(() => import('../components/ParticlesBackdrop'), {
  ssr: false,
  loading: () => null,
});

function Site({ site, links, username, subdomain, parking }) {
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
    if (parking) {
      return;
    }
    document.body.style.backgroundColor = bodyColor;
  }, [parking, bodyColor]);

  useEffect(() => {
    if (parking) {
      return;
    }
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
  }, [parking, bodyGradient, backgroundImage]);

  useEffect(() => {
    if (parking || !site?._id) {return;}
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventType: 'pageview', siteId: site._id }),
    }).catch(() => {});
  }, [site?._id, parking]);

  const handleLinkClick = (link) => {
    if (!site?._id) {return;}
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType: 'linkclick',
        siteId: site._id,
        linkHref: link.href,
        linkTitle: link.text,
      }),
    }).catch(() => {});
  };

  if (parking) {
    return <ParkingPage hostLabel={`${subdomain}.mostlink.co`} />;
  }

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
                onClick={() => handleLinkClick(link)}
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
  const res = await fetch(
    `${process.env.API_HOST}/api/sites/static/next/subdomain-${subdomain}`
  );
  if (!res.ok) {
    return { notFound: true };
  }
  const data = await res.json();
  if (data.error) {
    return { notFound: true };
  }
  if (data.parking) {
    return {
      props: {
        parking: true,
        username: data.username ?? null,
        subdomain: String(subdomain),
        site: null,
        links: null,
      },
    };
  }
  if (!data.site) {
    return { notFound: true };
  }
  return {
    props: {
      parking: false,
      site: data.site,
      links: data.links ?? null,
      username: data.username ?? null,
      subdomain: String(subdomain),
    },
  };
}
  
export default Site;