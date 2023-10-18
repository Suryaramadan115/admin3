
"use client"

import {  useState } from "react"
import { useRouter } from "next/navigation";


export default function Hero() {
  const router = useRouter();



const [nisn,setnisn] = useState()
const [nama,setNama] = useState("")

const [kelas,setKelas] = useState()

const [kampung,setKampung] = useState("")

const [desa,setDesa] = useState("")
const [kecamatan,setKecamatan] = useState("")

const [kabupaten,setKabupaten] = useState("")
const [post,setPost] = useState()
const [namajurusan,setJurusan] = useState("")



 async function handleSubmit(e){
  e.preventDefault()
  
  try {
    const res=  await fetch("api/siswa",{
      method :"POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(
        {
          nisn:nisn, 
          nama : nama,
          kelas:kelas,
          kampung : kampung,
          desa : desa,
          kecamatan :kecamatan,
          kabupaten :kabupaten,
          post : post,
          namajurusan :namajurusan
        }
        
      )
     }

    
       
     
     )
     router.push('/data')


  }catch(e){
    console.log(e)
  }
  
  



 }







  return (
    
   <div className="mx-auto min-h-screen mt-[50px] justify-center flex ">
    <form onSubmit={handleSubmit} className=" shadow-md flex flex-col items-center gap-y-10 border w-full h-[500px] ring-2 ring-slate-500 rounded-md p-6 justify-center bg-white">

  <input
  value={nisn}
  onChange={(e)=>{setnisn(e.target.value)}}
  type="text" placeholder="MASUKAN NISN" className=" ring-slate-900  outline-zinc-400 ring-2 shadow-lg  rounded-md w-[75%] h-[35px] text-center "/> 
 
  <input
   value={nama}
   onChange={(e)=>{setNama(e.target.value)}}
  type="text" placeholder="MASUKAN NAMA" className="ring-slate-900  outline-zinc-400 ring-2 shadow-lg rounded-md  w-[75%] h-[35px] text-center"/> 


  <input
   value={kelas}
   onChange={(e)=>{setKelas(e.target.value)}}
  type="text" placeholder="MASUKAN KELAS" className="ring-slate-900  outline-zinc-400 ring-2 shadow-lg rounded-md w-[75%] h-[35px] text-center"/> 

  <div className="w-full space-x-3 flex justify-center">
  <input
   value={kampung}
   onChange={(e)=>{setKampung(e.target.value)}}
  type="text" placeholder="kampung" className="ring-slate-900  outline-zinc-400 ring-2 shadow-lg  rounded-md w-[18%] h-[35px] text-center"/>
  <input
   value={desa}
   onChange={(e)=>{setDesa(e.target.value)}}
  type="text" placeholder="desa" className="ring-slate-900  outline-zinc-400 ring-2 shadow-lg  w-[18%] h-[35px] text-center"/>
  <input
   value={kecamatan}
   onChange={(e)=>{setKecamatan(e.target.value)}}
  type="text" placeholder="kecamatan" className="ring-slate-900  outline-zinc-400 ring-2 shadow-lg  rounded-md w-[18%] h-[35px] text-center"/>
  <input
   value={kabupaten}
   onChange={(e)=>{setKabupaten(e.target.value)}}
  type="text" placeholder="kabupaten" className="ring-slate-900  outline-zinc-400 ring-2 shadow-lg  rounded-md w-[18%] h-[35px] text-center"/>
  <input 
   value={post}
   onChange={(e)=>{setPost(e.target.value)}}
  type="text" placeholder="pos" className="ring-slate-900  outline-zinc-400 ring-2 shadow-lg  rounded-md  w-[10%] h-[35px] text-center"/>


  </div>
  <select 
   onChange={(e)=>{setJurusan(e.target.value)}}
  className="cursor-pointer w-full h-[40px] rounded-md text-center tracking-[1px] bg-blue-500 font-bold font-young text-zinc-100">
     <option className="">pilih jurusan</option>
    <option value='652fae10e93925d5c9a38a63'>multimedia</option>
    <option value='652fadebe93925d5c9a38a5c'>butik busana</option>
    <option value='652fae10e93925d5c9a38a62'>perhotelan</option>


  </select>

  <button type="submit" className="  w-[50%] uppercase text-xl font-nunito bg-yellow-300  h-[60px] rounded-xl text-slate-500 tracking-[1px]  font-bold hover:bg-slate-400"> send data</button>

    </form>

   </div>
   
    
  )
}
