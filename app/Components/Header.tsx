import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black sticky top-0 z-10 text-white font-bold text-2xl">
        <div className='flex justify-between'>
            <div>
                <Link href="/">
                    <Image className="m-4" src='/image/New_logo_Dimension.png' alt="Logo GodsChess" width={200} height={100}/>
                </Link>
            </div>
            <div className='flex items-center p-2'>
                <Link href="/Login">
                    <p className='p-4'>Connexion</p>
                </Link>
                <Link href="/Inscription">
                    <p>Inscription</p>
                </Link>
            </div>
        </div>
        
    </header>
  )
}

export default Header