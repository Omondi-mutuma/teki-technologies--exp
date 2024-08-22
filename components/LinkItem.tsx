"use client"
import { NAV_LINKS } from '@/constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

const LinkItem = () => {
  const navLinksRef = useRef([]);

  useEffect(() => {
    gsap.to(navLinksRef.current, {
      stagger: 0.3,
      duration: 0.5,
      ease: 'power3.out',
    });
  }, []);

  return (
    NAV_LINKS.map( (nav, index) => (
        <li key={index}  ref={el => navLinksRef.current[index] = el}
        >
          <a className='flex items-center gap-1 body-xs'>
            {nav.name}
            {nav.icon && <nav.icon />}
          </a>
          
        </li>
    ) )
  )
};

export default LinkItem