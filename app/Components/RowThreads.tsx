import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const RowThreads = (props : any) => {
  return (
    <Link href={"/General"}>
        <div className='flex justify-between p-2 border-2 border-grey'>
            <div className='flex'>
                <Image src={props.item.image} alt='' width={100} height={50}/>
                <div className='p-2'>
                    <h4>{props.item.title}</h4>
                    <p>Lancer par {props.item.user} il y a 3 jours</p>
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-col p-2'>
                    <p>User2</p>
                    <p>il y a 2 jours</p>
                </div>
                <div className='flex flex-col p-2'>
                    <p>Réponse: 2</p>
                    <p>Vues: 5</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default RowThreads