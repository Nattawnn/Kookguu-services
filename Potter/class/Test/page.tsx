/* eslint-disable @next/next/no-img-element */

import React from "react";
import MenuTab from "@/app/components/MenuTab";
export default function Test(){
    return(
        <div>
            <MenuTab/>
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/class" className="mt-16 ml-2 text-lg font-bold">คลาส</a>
                <img src="/setting.png" alt="เฟือง" height={1} width={100} style={{marginLeft: '190px'}} className="size-9 mt-3"/>
                <img src="/share.png" alt="แชร์"  height={1} width={100} className="size-9 mt-3 ml-2"/>
            </div>
            
            <div className="max-w-3xl mx-auto px-8">
                <div 
                    role="tablist"
                    aria-label="tabs"
                    className="relative w-100 h-8 grid grid-cols-2 gap-12 items-center px-10 mt-5 overflow-hidden shadow-2xl shadow-900/20 rounded-xl transition bg-gray-300 -mx-1">
                    <div className="absolute indicator my-auto top-0 bottom-0 w-48 h-6 ml-44  mt-1 rounded-xl bg-white  "></div>
                    <button
                        role="tab"
                        aria-selected='true'
                        aria-controls="panel-1"
                        id='tab-1'
                        tabIndex={0}
                        className="relative block  px-5 tab rounded-xl">
                        <a href="http://localhost:3000/class" className="text-gray-800 font-semibold">
                            ตารางเรียน
                        </a>
                    </button>
                    <button
                        role="tab"
                        aria-selected='true'
                        aria-controls="panel-1"
                        id='tab-1'
                        tabIndex={-1}
                        className="relative block px-5 tab rounded-xl">
                        <span className="text-gray-800 font-semibold">
                            ตารางสอบ
                        </span>
                    </button>
                </div>

                <img src="https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihacQG7XREU_WMGCN6yfdaQiiDkGzPGMBEk-bELhHg4EgzorYwWo86WpFrmebCd7tzvGoe32naPHk0cWCRMWKv2hWSKuVvOpEyI=w1276-h1395-v0" 
                alt="รูปตารางสอบ" 
                className="mt-10"/>

                
                    
                    
                    
                     
                    
                    
                    
                
            </div>
            
            
            
        </div>
        

            
    )
}
