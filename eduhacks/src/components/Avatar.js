import Link from 'next/link'
import React from 'react'

export default function Avatar({size}) {
  let sizeConst = 'size-14';
  if(size==='big'){
    sizeConst='size-36';
  }
  const classes = `hover:cursor-pointer ${sizeConst} rounded-full overflow-hidden`;
  return (
    <Link href={"/profile"}>
      <div className={classes}>
        <img src={'/1.jpg'} className='shadow-md shadow-gray-500 ' />
      </div>
    </Link>
  )
}
