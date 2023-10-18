import React, { Suspense } from 'react';
import Navbar from '../components/navbar';
import { PrismaClient } from '@prisma/client';
import Updatenilai from '../components/addnilai';
import Loading from '../loading';
const prisma = new PrismaClient();

const fetchingdata = async ()=>{

    const res = await prisma.nilaisiswa.findMany({
        
        select : {
           id : true,
            siswa :{
              select :{
                nisn:true,
                nama :true

              }
            },
            mapel :{
              select :{
                ipa:true,
                ips:true,
                matematika:true,
                indonesia:true,
                fisika:true,
                kimia:true,
                inggris:true
              }
            }

          
           
        }

    })
 return res ;

}

export default async function NilaiData() {
const nilai = await fetchingdata();

  return (
    <>
    <Navbar/>
    <div className="flex flex-col mt-[50px]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead
                className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" rowSpan={2} className="px-6 py-4 row-span-2 bg-blue-700 text-slate-200  text-center">#</th>
                  <th scope="col" className="px-6 py-4 row-span-2 bg-blue-700 text-slate-200  text-center">ID</th>

                  <th scope="col" className="px-6 py-4 row-span-2 bg-blue-700 text-slate-200  text-center">NISN</th>
                  <th scope="col" className="px-6 py-4 row-span-2 bg-blue-700 text-slate-200  text-center">NAMA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center"> IPA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center "> IPS</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center "> INDONESIA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center "> MATEMATIKA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center "> INGGRIS</th>
                  <th scope="col" className="px-6 py-4  bg-blue-700 text-slate-200  text-center"> FISIKA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center"> KIMIA</th>
                  <th scope="col" className="px-6 py-4 bg-blue-700 text-slate-200  text-center"> HANDLER</th>



                </tr>
              </thead>
              <Suspense fallback={<Loading/>}>

              <tbody>
                {nilai.map((data,index)=>{
                  index += 1
                  
           
                    return (
                        <tr key={data.id}
                        className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-center font-young font-semibold text-slate-600">{index}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">{data.id}</td>

                        <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">{data.siswa.nisn}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600 ">{data.siswa.nama}</td>
                        <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">{data.mapel.ipa}</td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">{data.mapel.ips}</td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">{data.mapel.indonesia}</td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">{data.mapel.matematika} </td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">{data.mapel.fisika}</td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">{data.mapel.kimia}</td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600">{data.mapel.inggris}</td>
                                          <td className="whitespace-nowrap px-6 py-4 text-center font-young font-semibold text-slate-600"> <Updatenilai data={data}/> </td>

      
      
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
    </>
  );
}