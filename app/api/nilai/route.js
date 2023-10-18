import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET (){

 
    const result = await res.json()
    
    return NextResponse.json(result,{status:200})
}




export async function POST(request){
 const {id,ipa,ips,matematika,indonesia,fisika,kimia,inggris} = await request.json();
    

    const res = await prisma.nilaisiswa.create({
     
     data : {   siswa : {
                            connect: {
                            id : id
                                     }
                             },
                                 mapel :{
                            create:{
                                ipa :Number(ipa),
                                ips:Number(ips),
                                matematika :Number(matematika),
                                indonesia : Number(indonesia),
                                fisika : Number(fisika),
                                kimia : Number(kimia),
                                inggris : Number(inggris)
        
                            }} }
       
           
    })
    const result =  await res.json();

    return NextResponse.json(result,{status:200})
    

}

