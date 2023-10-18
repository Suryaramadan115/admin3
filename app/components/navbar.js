import Link from "next/link";
import logo from "../../public/logoo.png"
import Image from "next/image";

export default function Navbar() {

  return (
    <>

    <div className='w-full h-[100px]  flex justify-between items-center container  mx-auto'>

      <Image src={logo} width={100} height={100} className="my-5 rounded-xl" />
        <h1 className="text-[30px] font-caveat text-red-700 font-extrabold tracking-[3px] "> MY ADMIN</h1>
        <ul className='flex gap-x-5 font-semibold uppercase ml-7 text-slate-700 font-young'>
            <li className='text-xl hover:text-slate-500'>
              <Link href={'/'}>Form</Link>
            </li>
            <li className='text-xl hover:text-slate-500'>
              <Link href={'/data'}>SISWA</Link>
            </li>
            <li className='text-xl hover:text-slate-500 '>
              <Link href={'/nilai'}>NILAI</Link>
            </li>
        </ul>
   

    </div>
    </>


  )
}
