import Image from 'next/image'
import React from 'react'
import LinkItem from './LinkItem'
import Button from './Button'
import { ICONS } from '@/constants'


const Navbar = () => {
  return (
    <header className='border-b border-white border-opacity-50 py-3 w-full flex flex-1 flex-row justify-between px-3 items-center '>
      <Image className='hover:cursor-pointer'
        src="/logo.png"
        alt='logo'
        height={38}
        width={38}
      />

      <nav className='custom-border rounded-full py-2 px-10 items-center hidden md:flex'>
        <ul className='w-full flex items-center gap-10'>
          <LinkItem />
        </ul>
      </nav>

      <div className='flex gap-3 items-center'>
        <div className='custom-border rounded-lg py-1 px-1'>
          <Button label='Join waitlist' type='button' value='' variant='gradientButton'/>
        </div>
        <div className='lg:hidden'>
          <ICONS.MenuButton size={32} />
        </div>
      </div>
    </header>
  )
}

export default Navbar