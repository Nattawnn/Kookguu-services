/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"


export default function somsri(){
    return(
        <div>
            <MenuTab/>
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/chat/friend" className="mt-16 ml-2 text-lg font-bold">สมศรี</a>
                <img src="/setting.png" alt="เฟือง" height={1} width={100} style={{marginLeft: '190px'}} className="size-9 mt-3"/>
                <img src="/share.png" alt="แชร์"  height={1} width={100} className="size-9 mt-3 ml-2"/>
            </div>
            
            <div className="max-w-3xl mx-auto px-8">
                
            <div className="p-3 mt-2 bg-gray-200 rounded-xl" style={{ display: 'flex', flexDirection: 'column', minHeight: '75vh' }}>
                    <div className="flex-grow bg-gray-200 rounded-xl">
                        {/* รูป */}
                        <img src="/plus.png" alt="Your Image" className="ml-3" style={{ alignSelf: 'flex-start', width: '50px', height: '50px' }} />
                    </div>
                    {/* กล่องข้อความสีขาว */}
                    <div style={{ position: 'relative' }}>
                        <input
                            role="tab-panel"
                            type="text"
                            placeholder="Aa"
                            required
                            className="text-left text-black p-1 bg-white rounded-xl w-full"
                        />
                    </div>
                </div>

                    
                   
                
            </div>
        </div>
    )
}
