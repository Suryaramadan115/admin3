import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient;

  


export const GET = async (request,{params:{search}})=>{
  
    const result = await prisma.datasiswa.findMany({
        where : {
            siswa :{
                    nama :{
                        startsWith : search
                }
            }
        },
        select :{
          id : true,
          siswa :{
            select :{
                nisn :true,
                nama :true,
                kelas:true
            }
          },
             alamat:{
                select:{ 
                              kampung : true,
                              desa:true,
                              kecamatan:true,
                              kabupaten:true
                          }
              },
                      jurusan:{
                          select:{
                              namajurusan:true
                          }
                      }
                   }
                  
          
    })

    return NextResponse.json(result,{status:200});

}
   
        

     

