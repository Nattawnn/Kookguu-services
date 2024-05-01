/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "@/app/components/MenuTab"


export default function shalong(){
    return(
        <div>
            <MenuTab/>
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/chat/friend" className="mt-16 ml-2 text-lg font-bold">ฉลอง</a>
                <img src="/setting.png" alt="เฟือง" height={1} width={100} style={{marginLeft: '190px'}} className="size-9 mt-3"/>
                <img src="/share.png" alt="แชร์"  height={1} width={100} className="size-9 mt-3 ml-2"/>
            </div>
            
            <div className="max-w-3xl mx-auto px-8">
                
                <div className="p-3 mt-2 bg-gray-200 rounded-xl" style={{ display: 'flex', flexDirection: 'column', minHeight: '75vh' }}>


               
                <div className="flex place-items-end  absolute bottom-40">
                <img src="/plus.png" alt="Your Image" className="ml-1 absolute mb-0.5"  width={25}/>
                <input role="tab-panel" type="text" placeholder="Aa" required
                    className="text-left text-black p-1 pl-3 bg-white rounded-xl ml-10 pr-10 " />
                    <img src="/microphone.png" alt="mic" width={30} className="ml-1"/>
                </div>
                
                        
                    
                </div>

                    
                   
                
            </div>
        </div>
    )
}
