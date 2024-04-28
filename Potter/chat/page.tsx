/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "../components/MenuTab"
import MenuSection from "../components/Menusection"
export default function chat(){
    return(
        <div>
            <MenuTab/>
            
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/profile?stuid=lp-k&password=%5Bl%5B%5Dl%5B" className="mt-16 ml-2 text-lg font-bold">chat</a>
                <img src="/setting.png" alt="เฟือง" height={1} width={100} style={{marginLeft: '190px'}} className="size-9 mt-3"/>
                <img src="/share.png" alt="แชร์"  height={1} width={100} className="size-9 mt-3 ml-2"/>
            </div>
            
            <div className='mt-4'>
        <h1 className="text-xl font-bold ml-2">การสื่อสาร</h1>
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="ติดต่อซัพพอร์ต (IT.)" link=""/> {/* Using a reusable MenuSection component */}
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="ติดต่ออาจารย์" link="http://localhost:3000/chat/teacher"/>
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="เพื่อน" link="http://localhost:3000/chat/friend"/>
        <hr className="h-4 font-bold mt-2" />
      </div>


            

           

                
                
            
        </div>
        

            
    )
}
