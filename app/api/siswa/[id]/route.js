import { PrismaClient, role } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()


export async function PATCH (request,{params:{id}}){

    
    const {nisn,nama,kelas,kampung,desa,kecamatan,kabupaten,post,jurusan} = await request.json()


const siswa = await prisma.siswa.update({
    where : {
        nisn :String(id)
    },
    data: {
        
            nisn : String(nisn),
        nama :String(nama),
        kelas :Number(kelas),
        datasiswa :{
                create : [
                    {
                        alamat :{
                            create : 
                                {
                                    kampung:String(kampung),
                                    desa : String(desa),
                                    kecamatan  :String(kecamatan),
                                    kabupaten : String(kabupaten),
                                    post :Number(post)
    
    
                                }
                            
                        },
                        jurusan : {
                            create :{
                                namajurusan :String(jurusan)
                            }
                        }
                        
                       
                        
    
                    }
                ]

            
           
        }


    
            
        }
        
})


return NextResponse.json(siswa,{status:200})

}

export async function DELETE(request,{params:{id}}){
  
const user = await prisma.siswa.findUnique({
    where :{
    nisn : id
    }
})

    if (!user) {
        return new NextResponse("can't delete this data",{status:400})

    }

const siswa = await prisma.siswa.delete({
    where : {
        nisn : id,
    },
        
            select : {
                id :true,
                nisn:true,
                nama :true,
                kelas :true,
                datasiswa : {
                    include : {
                        alamat : {
                            select :{
                                kampung :true,
                                desa:true,
                                kecamatan:true,
                                kabupaten:true
                            }
                        },
                        jurusan : {
                            select:{
                                namajurusan:true
                            }
                        }

                    }
                }
            }
        
    
})

return NextResponse.json(siswa,{status:200})
}