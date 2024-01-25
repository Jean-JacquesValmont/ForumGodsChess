import React from 'react'
import Link from "next/link"

const CardTitle = (props : any) => {
  return (
    <Link href={"/"}>
        <div className='m-4 border-black border-b-2'>
            <div className='flex justify-between'>
                <h3 className='text-4xl'>{props.item.title}</h3>
                <p>0 fils de discussion</p>
            </div>
            <p className='text-xl'>{props.item.description}</p>
        </div>
  </Link>
  )
}

export default CardTitle