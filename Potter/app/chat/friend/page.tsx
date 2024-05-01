/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"
export default function friend(){
    return(
        <div>
            <MenuTab/>
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/chat" className="mt-16 ml-2 text-lg font-bold">เพื่อน</a>
                <img src="/setting.png" alt="เฟือง" height={1} width={100} style={{marginLeft: '190px'}} className="size-9 mt-3"/>
                <img src="/share.png" alt="แชร์"  height={1} width={100} className="size-9 mt-3 ml-2"/>
            </div>
            
            <div className="max-w-3xl mx-auto px-8">
                

                <div className="text-gray-400 mt-4 ">รายชื่อ</div>
                    <a href="http://localhost:3000/chat/friend/somsri">
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-2 bg-gray-200 rounded-xl">
                        <h1 className="font-semibold ml-2 ">
                            สมศรี BTS
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>  
                    </div>
                    </a>
                    <a href="http://localhost:3000/chat/friend/Tony">  
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-200 rounded-xl">
                        <h1 className="font-semibold ml-2 ">
                            Tony
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    </a>
                    <a href="http://localhost:3000/chat/friend/rutana">
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-200 rounded-xl">
                        <h1 className="font-semibold ml-2 ">
                            รัตนา พาตลุย
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    </a>
                    <a href="http://localhost:3000/chat/friend/john">
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-200 rounded-xl">
                        <h1 className="font-semibold ml-2 ">
                            จอร์น โนอาร์
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    </a>
                    <a href="http://localhost:3000/chat/friend/somsak">
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-200 rounded-xl">
                        <h1 className="font-semibold ml-2 ">
                            สมศักด์ ฟัคกิ้ง
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    </a>
                    <a href="http://localhost:3000/chat/friend/sawad">
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-200 rounded-xl">
                        <h1 className="font-semibold ml-2 ">
                            สวัสด์ จันทร์อังคาร
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    </a>
                    <a href="http://localhost:3000/chat/friend/shalong">
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-200 rounded-xl">
                        <h1 className="font-semibold ml-2 ">
                            เฉลิม ฉลอง
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    </a>
            </div>
        </div>
        

            
    )
}
