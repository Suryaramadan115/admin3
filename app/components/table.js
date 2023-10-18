"use client"

import { Suspense, useEffect, useState } from "react";
import Deletebt from "./deletebt";
import Searchbt from "./searchbt";
import Link from "next/link";
import Loading from "../loading";

export default  function Table() {
  const [resp,setResponsing] = useState([]);

  useEffect(()=>{



    const fetching = async()=>{
    const res = await fetch('/api/siswa')
  const result = await res.json()
    
     setResponsing(result)

    
    }
      
    fetching();
    },[])

    
    
  return (
    <div className="flex flex-col  ">
      <Searchbt getdata={(result)=>{setResponsing(result)}}/>
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden mt-[100px]">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">

           
            <tr>
              <th scope="col" className="px-6 py-4 tracking-[1px] font-extrabold text-slate-600 text-center">#</th>
              <th scope="col" className="px-6 py-4 tracking-[1px]  font-extrabold text-slate-600 text-center">NISN</th>
              <th scope="col" className="px-6 py-4 tracking-[1px]  font-extrabold text-slate-600 text-center">NAMA</th>
              <th scope="col" className="px-6 py-4 tracking-[1px]  font-extrabold text-slate-600 text-center">KELAS</th>
              <th scope="col" className="px-6 py-4 tracking-[1px]  font-extrabold text-slate-600 text-center">ALAMAT</th>
              <th scope="col" className="px-6 py-4 tracking-[1px]  font-extrabold text-slate-600 text-center">JURUSAN</th>
              <th scope="col" className="px-6 py-4 tracking-[1px]  font-extrabold text-slate-600 text-center">HANDLER</th>



            </tr>
          </thead>
          <Suspense fallback={<Loading/>}>

          <tbody>
          
          {resp.map((data,index)=>{
            index += 1;

           console.log(data)



         
                return (
                  <tr className="border-b dark:border-neutral-500 " key={data.id}>
                
                    <td className="whitespace-nowrap px-6 py-4 font-medium ">{index ++}</td>
                    <td className="whitespace-nowrap px-6 py-4 tracking-[1.5px] font-bold text-slate-500 font-young text-center">{data.siswa.nisn}</td>
                    <td className="whitespace-nowrap px-6 py-4 tracking-[1.5px] font-bold text-slate-500 font-young text-center">{data.siswa.nama}</td>
                    <td className="whitespace-nowrap px-6 py-4 tracking-[1.5px] font-bold text-slate-500 font-young text-center">{data.siswa.kelas}</td>
                    
                        <td className="whitespace-nowrap px-6 py-4 tracking-[1.5px] font-bold text-slate-500 font-young tracking-[2px] text-center" >kap.{data.alamat.kampung},ds.{data.alamat.desa}
                        <br/>
                        kec.{data.alamat.kecamatan},kab.{data.alamat.kabupaten}</td>
                        <td className="whitespace-nowrap px-6 py-4 tracking-[1.5px] font-bold text-slate-500 font-young text-center">{data.jurusan.namajurusan}</td>
                        <td className="whitespace-nowrap px-6 py-4 tracking-[1.5px] font-bold text-slate-500 font-young text-center flex"> <Deletebt data={data} /> <Link className="p-3 bg-yellow-600 font-young text-xl rounded-xl ml-2 uppercase text-slate-100" href={`/nilai/${data.siswa.id}`}>add nilai </Link>   </td>
                    
                
           


                        
                 
                     

           </tr>
                )
          })}


                 
      
            
                
      
          
           
          </tbody>
          </Suspense>

        </table>
      </div>
    </div>
  </div>
</div>

    
  )
}
