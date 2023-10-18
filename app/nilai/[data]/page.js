"use client"

import Navbar from '../../components/navbar';
import { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

export default function AddNilai({params:{data}}) {
  const router = useRouter()
  const [id,setID] = useState(data)


 
const [ipa,setIpa] = useState("")
const [ips,setIps] = useState("")
const [matematika,setMatematika] = useState("")
const [indonesia,setIndonesia] = useState("")
const [fisika,setFisika] = useState("")
const [kimia,setKimia] = useState("")
const [inggris,setInggris] = useState("")


  const handlesubmit = async (e)=>{
    e.preventDefault()
    try{
      const res = await fetch('/api/nilai',{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body :  JSON.stringify({
          id,ipa,ips,indonesia,matematika,inggris,fisika,kimia
        })
      })
     
        router.push('/nilai')
       

    }catch(e){
      console.log("error to loading",e)
    }
   

    
  }







  return (
<>
<Navbar/>
<h1 className='font-caveat text-center text-4xl font-semibold text-blue-600 uppercase tracking-[2px]'> add nilai</h1>
<Suspense fallback={<Loading/>}>

<div className="flex flex-col mt-[100px]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 rounded-md ">
          <div className="overflow-hidden bg-zinc-400">
          <form className='flex flex-col items-center justify-center gap-y-3 bg-zinc-300' onSubmit={handlesubmit}>

            <table className="w-full text-left text-sm font-light mx-auto  rounded-xl bg">
              <thead
                className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4 text-lg font-young font-extrabold text-blue-700 text-center bg-zinc-400 ">ID siswa</th>
                  <th scope="col" className="px-6 py-4 text-slate-700 tracking-[2px] font-young font-bold text-xl text-center ">IPA</th>
                  <th scope="col" className="px-6 py-4 text-slate-700 tracking-[2px] font-young font-bold text-lg text-center ">INDONESIA</th>
                  <th scope="col" className="px-6 py-4 text-slate-700 tracking-[2px] font-young font-bold text-lg text-center ">MATEMATIKA</th>
                  <th scope="col" className="px-6 py-4 text-slate-700 tracking-[2px] font-young font-bold text-lg text-center ">IPS</th>
                  <th scope="col" className="px-6 py-4 text-slate-700 tracking-[2px] font-young font-bold text-lg text-center ">INGGRIS</th>
                  <th scope="col" className="px-6 py-4 text-slate-700 tracking-[2px] font-young font-bold text-lg text-center ">FISIKA</th> 
                  <th scope="col" className="px-6 py-4 text-slate-700 tracking-[2px] font-young font-bold text-lg text-center ">KIMIA</th>



                </tr>
              </thead>

              <tbody>

                <tr
                  className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">

                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <input 
                  value={id}
                  onChange={(e)=>{setID(e.target.value)}}
                  type='text' placeholder='nisn' className='ml-[20px] p-3 rounded-md ring-2 ring-slate-700 shadow-white w-[100px]'  />

                  </td>
                  

                  <td className="whitespace-nowrap px-6 py-4 ">
                  <input
                   value={ipa}
                   onChange={(e)=>{setIpa(e.target.value)}}
                  type='text' placeholder='ipa' className=' p-3 rounded-md ring-2 ring-slate-700 shadow-white w-[100px]'  />

                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  <input
                   value={indonesia}
                   onChange={(e)=>{setIndonesia(e.target.value)}}
                  type='text' placeholder='INDONESIA' className=' w-[150px] p-3 rounded-md ring-2 ring-slate-700 shadow-white w-[100px]'  />

                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  <input
                   value={matematika}
                   onChange={(e)=>{setMatematika(e.target.value)}}
                  type='text' placeholder='MATEMATIKA' className=' w-[150px] p-3 rounded-md ring-2 ring-slate-700 shadow-white w-[100px]'  />

                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  <input
                   value={ips}
                   onChange={(e)=>{setIps(e.target.value)}}
                  type='text' placeholder='IPS' className=' p-3 rounded-md ring-2 ring-slate-700 shadow-white w-[100px]'  />

                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  <input 
                   value={inggris}
                   onChange={(e)=>{setInggris(e.target.value)}}
                  type='text' placeholder='INGGRIS' className=' p-3 rounded-md ring-2 ring-slate-700 shadow-white w-[100px]'  />

                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  <input
                   value={fisika}
                   onChange={(e)=>{setFisika(e.target.value)}}
                  type='text' placeholder='FISIKA' className=' p-3 rounded-md ring-2 ring-slate-700 shadow-white w-[100px]'  />

                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                  <input
                   value={kimia}
                   onChange={(e)=>{setKimia(e.target.value)}}
                  type='text' placeholder='KIMIA' className=' p-3 rounded-md ring-2 ring-slate-700 shadow-white w-[100px]'  />

                  </td>


                </tr>


                
              </tbody>

            </table>
            <button className='text-center text-zinc-200 bg-blue-600 rounded-xl p-4 font-young font-bold tracking-[2px] hover:bg-blue-800 '> TAMBAHKAN DATA</button>
            </form>

          </div>
        </div>
      </div>
    </div>
    </Suspense>

 
</>
 );
}

   