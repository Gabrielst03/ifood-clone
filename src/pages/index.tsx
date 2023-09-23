import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-24 py-40 ${inter.className}`}
    >
      <img src="/logo.png" className="w-20" alt="" />

      <div className='w-[400px] px-5 py-12 shadow-md rounded-lg'>

        <div className="flex flex-col gap-3">
          <input type="text" className='bg-zinc-100 rounded-lg outline-none w-full py-3 px-4' placeholder='Email' />
          <input type="password" className='bg-zinc-100 rounded-lg outline-none w-full py-3 px-4' placeholder='Senha' />
          <button className='bg-red-500 text-white font-semibold text-sm hover:opacity-90 duration-200 rounded-lg outline-none w-full py-3 px-4'>Entrar</button>
        </div>



      </div>

    </main>
  )
}
