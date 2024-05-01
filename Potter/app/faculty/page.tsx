/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "../components/MenuTab"

export default function Faculty(){
    return(
        
        <div>
            <MenuTab/>
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/profile?stuid=lp-k&password=%5Bl%5B%5Dl%5B" className="mt-16 ml-2 text-lg font-bold">คณะ</a>
                <img src="/setting.png" alt="เฟือง" height={1} width={100} style={{marginLeft: '190px'}} className="size-9 mt-3"/>
                <img src="/share.png" alt="แชร์"  height={1} width={100} className="size-9 mt-3 ml-2"/>
            </div>
            
            <div className="max-w-3xl mx-auto px-8">
                <div 
                    role="tablist"
                    aria-label="tabs"
                    className="relative w-100 h-8 grid grid-cols-2 gap-12 items-center px-10 mt-5 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -mx-1">
                    <div className="absolute indicator my-auto top-0 bottom-0 w-48 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
                    <button
                        role="tab"
                        aria-selected='true'
                        aria-controls="panel-1"
                        id='tab-1'
                        tabIndex={0}
                        className="relative block  px-6 tab rounded-xl">
                        <span className="text-gray-800 font-semibold">
                            คณะ
                        </span>
                    </button>
                    <button
                        role="tab"
                        aria-selected='true'
                        aria-controls="panel-1"
                        id='tab-1'
                        tabIndex={-1}
                        className="relative block px-6 tab rounded-xl">
                        <a href="http://localhost:3000/faculty/program" className="text-gray-800 font-semibold">
                            โปรแกรม
                        </a>
                    </button>
                </div>

                <div className="text-gray-400 mt-4 ">กลุ่มวิทยาศาสตร์และเทคโนโลยี</div>
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-2 bg-gray-300 rounded-xl">
                        <h1 className="font-semibold -mt-2 ml-2 ">
                            คณะวิทยาศาสตร์และเทคโนโลยี
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-300 rounded-xl">
                        <h1 className="font-semibold -mt-2 ml-2 ">
                            คณะวิศวกรรมศาสตร์
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-300 rounded-xl">
                        <h1 className="font-semibold -mt-2 ml-2 ">
                            คณะสถาปัตยกรรมศาสตร์และการผังเมือง
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-300 rounded-xl">
                        <h1 className="font-semibold -mt-2 ml-2 ">
                            สถาบันเทคโนโลยีนานาชาติสิรินธร
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    <div className="text-gray-400 mt-4 ">กลุ่มสังคมศาสตร์และมนุษยศาสตร์</div>
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-2 bg-gray-300 rounded-xl">
                        <h1 className="font-semibold -mt-2 ml-2 ">
                            คณะนิติศาสตร์
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-300 rounded-xl">
                        <h1 className="font-semibold -mt-2 ml-2 ">
                            คณะรัฐศาสตร์
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-3 mt-5 bg-gray-300 rounded-xl">
                        <h1 className="font-semibold -mt-2 ml-2 ">
                            คณะสังคมสงเคราะห์ศาสตร์
                        </h1>
                        <p className="text-xs mt-2 ml-2">
                            รายละเอียด 
                        </p>     
                    </div>
                
            </div>
        </div>
        

            
    )
}
