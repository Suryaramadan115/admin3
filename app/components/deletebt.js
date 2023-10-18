"use client"
import { useState, } from "react"
import { useRouter } from "next/navigation"

export default function Deletebt({data}) {
    const router = useRouter();


const [isOpen,setIsOpen] = useState(false)

 const handlemodal = ()=>{
    setIsOpen(!isOpen)
 }
 const handleDelete = async()=>{
    try{
        await fetch(`http://localhost:3000/api/siswa/${data.siswa.nisn}`,{
            method : "DELETE"
        })
       setIsOpen(!isOpen)
       router.refresh();

    }catch(e){
        console.log(e)
    }
   
   
 }
    
  return (
    <div>
        <div>
            <button onClick={handlemodal}  className='p-5 rounded-lg bg-blue-600 text-center text-slate-100 font-nunito font-semibold'>DELETE</button>

        </div>
        <div className={!isOpen ? "hidden":"block"}>
            <div className='w-[600px] h-[200px] bg-red-600 font-nunito  rounded-xl absolute top-[100px] left-[530px] py-7  '>
             <div className='w-full h-full flex-col justify-center items-center '>
                <h1 className="text-3xl tracking-[2px] font-young text-slate-200 text-center mt-[10px] ">are u sure to delete <br/> <span className="text-zinc-100 text-2xl font-young tracking-[1px] font-semibold">  {data.siswa.nama} </span> </h1>
                <div className='flex justify-center gap-x-3 mt-6'>
                    <button onClick={handleDelete} className="bg-slate-700 font-young tracking-[1px] text-slate-100 p-5 rounded-xl ">  DELETE</button>
                    <button className="bg-yellow-500 font-young tracking-[1px] text-slate-100 p-5 rounded-xl" onClick={handlemodal}> CANCEL</button>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}
