'use client'

import Link from 'next/link';
import React from 'react'
import style from '../active-link/ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props{
  path:string;
  text:string;

}
export const ActiveLink = ({path,text}:Props) => {
  const pathName=usePathname();
  console.log(pathName)
  return (
    <div>
      <Link  href={path} className={`${style.link} ${pathName===path&&style.active_link} mr-1`}>
          {text}
        </Link>
    </div>
  )
}
