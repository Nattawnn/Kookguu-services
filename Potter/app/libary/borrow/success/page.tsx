/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"

export default function success(){
    return(
        
        <div>
            <MenuTab/>
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/libary" className="mt-16 ml-2 text-lg font-bold">libary</a>
                <img src="/setting.png" alt="เฟือง" height={1} width={100} style={{marginLeft: '190px'}} className="size-9 mt-3"/>
                <img src="/share.png" alt="แชร์"  height={1} width={100} className="size-9 mt-3 ml-2"/>
            </div>
            
            <div className="max-w-3xl mx-auto px-8">

                <div className="flex justify-center mt-5">
                    <div className="text-center text-green font-bold">
                        <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '130px' }}>
                            <img src="/Book10.jpg" alt="book10" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* รายละเอียด */}
                <div className="bg-gray-200 mt-14 rounded-xl px-7 py-5" style={{height: '200px'}}>
                    <div className="text-sm" style={{ color: 'red' }}>Title:</div>
                    <div className="text-sm text-gray-500" >โครงการศึกษาตลาดนักท่องเที่ยวต่างประเทศกลุ่มคุณภาพสูง: อิตาลี และสเปน: อิตาลี: รายงานฉบับสมบูรณ</div>
                    <div className="text-sm mt-4" style={{ color: 'red' }}>Borrowing date:</div>
                    <div className="text-sm text-gray-500">1/1/2024</div>
                    
                </div>

                <div className="flex justify-center mt-20">
                   <div className="text-green-500 font-bold text-sm">Success</div>
                </div>
                <div className="flex justify-center mt-2">
                    <img src="/success.png" alt="success" style={{ width: '50px' }}/>
                </div>

                
            </div>
        </div>
        

            
    )
}
