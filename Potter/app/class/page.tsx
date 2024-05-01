/* eslint-disable @next/next/no-img-element */

import React from "react";
import MenuTab from "@/app/components/MenuTab";
export default function Class(){
    return(
        <div>
            <MenuTab/>
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/profile" className="mt-16 ml-2 text-lg font-bold">คลาส</a>
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
                        className="relative block  px-5 tab rounded-xl">
                        <span className="text-gray-800 font-semibold">
                            ตารางเรียน
                        </span>
                    </button>
                    <button
                        role="tab"
                        aria-selected='true'
                        aria-controls="panel-1"
                        id='tab-1'
                        tabIndex={-1}
                        className="relative block px-5 tab rounded-xl">
                        <a href="http://localhost:3000/class/Test" className="text-gray-800 font-semibold">
                            ตารางสอบ
                        </a>
                    </button>
                </div>

                <img src="https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihbt7ypriSK4h31gVno-7egf8nSZsr4wm9Z5dGLESRGpy1-4RJ6MEJZlOy0t0LedCAdRTOSp6OeJS-5H8vvh1ZrW8OnbMpH0C_s=w2560-h1398-v0" alt="ตารางเรียน" 
                className="mt-8" />
                
                
                
                <div className="grid grid-cols-2 grid-rows-2 gap-5">
                <div 
                    role="tablist"
                    aria-label="tabs"
                    className=" h-40 grid grid-cols-2 px-0 mt-5 overflow-hidden rounded-xl transition bg-gray-300 -mx-1">
                    <div 
                    className=" h-40 bg-purple-600 mr-20">
                    </div>

                    <div className="text-violet-600 font-medium mr-20 absolute ml-7 mt-2 m-8 flex flex-col">
                        SF222
                    </div>
                    <div className="text-xs mt-10 ">SOFTWARE ENGINEERING MODELS AND ANALYSIS</div>
                    </div>

                
                
                <div 
                    role="tablist"
                    aria-label="tabs"
                    className="relative h-8 grid grid-cols-2 gap-12 basis-1/2 items-center px-10 mt-5 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -mx-1">
                    lorem 2
                    </div>
                
                <div 
                    role="tablist"
                    aria-label="tabs"
                    className="relative h-8 grid grid-cols-2 gap-12 basis-1/2 items-center px-10 mt-5 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -mx-1">
                    lorem 3
                    </div>

                <div 
                    role="tablist"
                    aria-label="tabs"
                    className="relative h-8 grid grid-cols-2 gap-12 basis-1/2 items-center px-10 mt-5 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -mx-1">
                    lorem 4
                    </div>

                </div>
                

                
                <div className="transition bg-gray-300 
                    rounded-xl
                    mx-24 
                    px-4
                    mt-5
                    ml-4
                    ">
                    
                    testing
                </div>
                
            
                     
                    
                    
                    
                
            </div>
            
            
            
        </div>
        

            
    )
}
