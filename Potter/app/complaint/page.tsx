/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"
export default function complaint(){
    return(
        <div>
            <MenuTab/>
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/profile" className="mt-16 ml-2 text-lg font-bold">เขียนคำร้อง</a>
                <img src="/setting.png" alt="เฟือง" height={1} width={100} style={{marginLeft: '190px'}} className="size-9 mt-3"/>
                <img src="/share.png" alt="แชร์"  height={1} width={100} className="size-9 mt-3 ml-2"/>
            </div>
            
            <div className="max-w-3xl mx-auto px-8">
                            
                <div className="text-left text-black p-1 pl-5 mt-8 bg-white-100 rounded-xl w-full">
                    รับเรื่องร้องเรียน

                    <a href="http://localhost:3000/complaint/writing">
                    <img src="/pngegg (3).png" alt="ค้นหา" className="absolute -mt-6 " style={{ marginLeft: '290px' ,width: '25px'}} />
                    </a>
                </div>
                    
            
            </div>
        </div>
        

            
    )
}
