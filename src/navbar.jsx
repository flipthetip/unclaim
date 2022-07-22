import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'


import { useState } from 'react'

export const Navbar = props => {
  return (
    <div className='navbar bg-none text-white text-xs max-h-1 md:pl-2'>
      <div className='navbar-start'>       
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='red'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>

          </label>

          <ul
            tabIndex='0'
            className='p-2 mt-2 shadow menu menu-compact dropdown-content bg-stone-500 rounded-box w-52 pr-0'
          >
          <li>

              <button className='tracking-wide uppercase'>
                HOME 👻
              </button>

          </li>
        <li>

              <button className='tracking-wide uppercase'>
                STOVE 🔥
              </button>

          </li>
          <li>

              <button className='tracking-wide uppercase'>
                BULK TRANSFER ⚡
              </button>

          </li>
          <li>

              <button className='tracking-wide uppercase'>
                STAKING ⛏️
                </button>
          </li>
            <li>
            <WalletMultiButton className='max-h-5' />
            </li>
            <div className='mr-16 mt-4 w-full rounded-none content-center text-xs mb-2'>
            Coded in the Shadows | 👻 TSC Buidl
            </div>
          </ul>
        </div>

      </div>

      <div className='bg-red-700 hidden navbar-center lg:flex rounded-none'>
        
        <ul className='shadow-white menu menu-horizontal'>

        <li>

              <button className='tracking-wide uppercase'>
                HOME
              </button>

          </li>
        <li>

              <button className='tracking-wide uppercase'>
                STOVE
              </button>

          </li>
          <li>

              <button className='tracking-wide uppercase'>
                BULK TRANSFER
              </button>

          </li>
          <li>

              <button className='tracking-wide uppercase'>
                STAKING
              </button>

          </li>
          {/* <li>
            <Link href='nftminter' passHref>
              <button className='tracking-wide uppercase'>
                NFT Minter
              </button>
            </Link>
          </li> 
          <li>
            <Link href='gatedentry' passHref>
              <button className='tracking-wide uppercase'>
                GETTED
              </button>
            </Link>
          </li>
          <li>
            <Link href='minthash' passHref>
              <button className='tracking-wide uppercase'>
                HASHER
              </button>
            </Link>
          </li>
          <li>
            <Link href='holdersnapshot'>
              <button className='tracking-wide uppercase'>
                SNAPPER
              </button>
            </Link>
          </li>
          <li>
            <Link href='multisend' passHref>
              <button className='tracking-wide uppercase'>
                BURNT
              </button>
            </Link>
          </li> 
*/}
          <li>

            <WalletMultiButton className='max-h-5' />

          </li>

        </ul>
      </div>
    </div>
  )
}
