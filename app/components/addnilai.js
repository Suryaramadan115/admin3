"use client"

import { Suspense, useState } from "react"
import { useRouter } from "next/navigation";
import Loading from "../loading";

export default function Updatenilai({data}) {
    const router = useRouter();
    const [ipa,setipa] = useState(data.mapel.ipa)
    const [nisn,setnisn] = useState(data.siswa.nisn)

    const [ips,setips] = useState(data.mapel.ips)
    const [matematika,setmatematika] = useState(data.mapel.matematika)
    const [indonesia,setindonesia] = useState(data.mapel.indonesia)
    const [fisika,setfisika] = useState(data.mapel.fisika)
    const [kimia,setkimia] = useState(data.mapel.kimia)
    const [inggris,setinggris] = useState(data.mapel.inggris)


    const [isopen,setisopen] = useState(false);

    const handlemodal = ()=>{
        setisopen(!isopen);
    }
    
    const handleupdate = async(e)=>{
        e.preventDefault();

        const res = await fetch(`api/nilai/${data.id}`,{
             method : "PATCH",
             headers : {
                "Content-Type" : "application/json"
             },
             body : JSON.stringify({
                ipa,ips,indonesia,matematika,fisika,kimia,inggris

             })

        })
        setisopen(false)
        router.refresh();
        

    }
    



  return (
    <div>
  <div className="flex flex-row items-center justify-center">
    <button onClick={handlemodal}>
    <svg className="text-center w-[50px] h-[50px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
<h1 className="text-lg text-slate-600 tracking-[2px] uppercase font-caveat">update</h1>
    </button>
  </div>
   <div className={!isopen ?"hidden" : "block "}>
    <form onSubmit={handleupdate} className="w-full h-[600px] absolute top-[130px] left-0 mx-auto  ">

   <table className="min-w-full text-left text-sm font-light h-[400px] ">
              <thead
                className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center"> NISN</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center"> IPA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center "> IPS</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center "> INDONESIA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center "> MATEMATIKA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center "> INGGRIS</th>
                  <th scope="col" className="px-6 py-4  bg-blue-700 text-slate-200  text-center"> FISIKA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center"> KIMIA</th>



                </tr>
              </thead>
              <Suspense fallback={<Loading/>}>

              <tbody>
              
           
                        <tr key={data.id}
                        className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                             <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">
                        <input
                         className="w-[100px] ring-2 ring-slate-600"
                          value={nisn}
                          onChange={(e)=>{setnisn(e.target.value)}}
                          type="text" placeholder="masukan data"/>
                          
                        
                        </td>
                       
                        <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">
                        <input
                         className="w-[100px] ring-2 ring-slate-600"
                          value={ipa}
                          onChange={(e)=>{setipa(e.target.value)}}
                          type="text" placeholder="masukan data"/>
                          
                        
                        </td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">
                                          <input
                         className="w-[100px] ring-2 ring-slate-600"
                          value={ips}
                          onChange={(e)=>{setips(e.target.value)}}
                          type="text" placeholder="masukan data"/>
                          
                                          </td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">
                                          <input
                         className="w-[100px] ring-2 ring-slate-600"
                          value={indonesia}
                          onChange={(e)=>{setindonesia(e.target.value)}}
                          type="text" placeholder="masukan data"/>
                          
                                          </td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">
                                          <input
                         className="w-[100px] ring-2 ring-slate-600"
                          value={matematika}
                          onChange={(e)=>{setmatematika(e.target.value)}}
                          type="text" placeholder="masukan data"/>
                          
                                          </td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">
                                          <input
                         className="w-[100px] ring-2 ring-slate-600"
                          value={fisika}
                          onChange={(e)=>{setfisika(e.target.value)}}
                          type="text" placeholder="masukan data"/>
                          
                                          </td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">
                                          <input
                         className="w-[100px] ring-2 ring-slate-600"
                          value={kimia}
                          onChange={(e)=>{setkimia(e.target.value)}}
                          type="text" placeholder="masukan data"/>
                          
                                          </td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">
                                          <input
                         className="w-[100px] ring-2 ring-slate-600"
                          value={inggris}
                          onChange={(e)=>{setinggris(e.target.value)}}
                          type="text" placeholder="masukan data"/>
                          
                                          </td>

      
      
                      </tr>

                    

              
               

              </tbody>
              </Suspense>

            </table>
            <div className=" flex flex-row justify-center items-center gap-3">
            <button type="submit" className="w-[50%] p-3 rounded-lg bg-blue-700 text-slate-100 font-young tracking-[2px]">SAVE</button>
            <button 
            onClick={handlemodal}
            className="w-[50%] p-3 rounded-lg bg-zinc-800 text-slate-100 font-young tracking-[2px]">CANCEL</button>


            </div>
            </form>

    
   </div>
    </div>
  )
}
