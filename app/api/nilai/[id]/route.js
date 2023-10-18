import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();


export async function PATCH(request,{params:{id}}){

    const{ipa,ips,matematika,indonesia,fisika,kimia,inggris} = await request.json();

    if(!ipa || !ips || !matematika || !indonesia || !fisika || !kimia || !inggris){
        return new NextResponse("masukan data dengan lengkap",{status:400})
    }

    
 

    const res = await prisma.nilaisiswa.update({
        where : {
            id : id
            
        },
        data :{
            mapel :{
                create :{
                    ipa : Number(ipa),
                    ips : Number(ips),
                    indonesia : Number(indonesia),
                    matematika : Number(matematika),
                    fisika : Number(fisika),
                    kimia : Number(kimia),
                    inggris : Number(inggris)



                }
            }
        }
    })
    const result = await res.json();

 return NextResponse.json(result,{status:200})
}