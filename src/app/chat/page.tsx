import React from "react";

import MenuTab from "../components/MenuTab";

export default function Chat(){
    return (
        <main className="">
            <div className="max-w-3xl mx-auto px-8">
                <div 
                    role="tablist"
                    aria-label="tabs"
                    className="relative w-max h-8 grid grid-cols-2 gap-12 items-center px-10 mt-20 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -mx-1">
                    <div className="absolute indicator my-auto top-0 bottom-0 w-44 h-6 ml-1  mt-1 rounded-xl bg-white  "></div>
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
                        <span className="text-gray-800 font-semibold">
                            โปรแกรม
                        </span>
                    </button>
                </div>

                <div className="bg-gray-200  rounded-2xl ">
                    <div 
                    role="tab-panel "
                    id="panel-1"
                    className="p-5 mt-10">
                        <h1 className="font-semibold -mt-2 ">
                            คณะหมูกรอบไข่ดาวพิเศษไข่ดาวเพิ่มข้าว
                        </h1>
                        <p className="text-xs mt-2">
                            รายละเอียด 
                        </p>     
                    </div>
                    <div 
                    role="tab-panel "
                    id="panel-2"
                    className="absolute top-0 invisible tab-panel p-5 mt-10 transition duration-300">
                        <h1 className="font-semibold -mt-2 ">
                            โปรแกรมจ้า
                        </h1>
                        <p className="text-xs mt-2">
                            รายละเอียด 
                        </p>     
                    </div>
                </div>
            </div>
            <MenuTab/>
        </main>
        
    )
}