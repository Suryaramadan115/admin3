import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function GET(request){
    const res = await prisma.datasiswa.findMany({
        select :{
            id: true,
            siswa :{
                select :{
                 id : true,
                nisn :true,
                 nama: true,
                 kelas : true
                }

            },
            alamat:{
                select :{
                    kampung :true,
                    desa : true,
                    kecamatan :true,
                    kabupaten:true
                }
            },
            jurusan : {
                select : {
                    namajurusan : true
                }
            }
        }
        

        })
        
    return NextResponse.json(res,{status:200
    })

}


export async function POST (request){
    const body = await request.json();
    
    const {nisn,nama,kelas,kampung,desa,kecamatan,kabupaten,post,namajurusan} = body;

    const user = await prisma.siswa.findUnique({
        where : {
            nisn : String(nisn)
        }
    })

    if(user){
        return new NextResponse("user sudah anda mohon isi kembali",{status:400})
    }



  
     const result = await prisma.siswa.create({
        data: {
            nisn : String(nisn),
            nama :nama,
            kelas :Number(kelas),
            datasiswa :{
                create : 
                    {
                        alamat :{
                            create : 
                                {
                                    kampung:kampung,
                                    desa : desa,
                                    kecamatan  :kecamatan,
                                    kabupaten : kabupaten,
                                    post : Number(post)

                                }
                            
                        },
                        jurusan :{
                            connect:{
                                id : namajurusan
                            }
                        }
                        

                    }
                
                
            }


        }
     })
    
    return NextResponse.json(result,{status:200})
    }
    

