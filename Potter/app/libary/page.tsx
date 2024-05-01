/* eslint-disable @next/next/no-img-element */
import React from "react"
import MenuTab from "../components/MenuTab"
export default function libary(){
    return(
        <div>
            <MenuTab/>
            <div className="flex">
                <img src="/Rectangle 1877.png" alt="return-sign" className="mt-16 ml-3" />
                <a href="http://localhost:3000/profile" className="mt-16 ml-2 text-lg font-bold">Menu</a>
                <img src="/setting.png" alt="เฟือง" height={1} width={100} style={{marginLeft: '190px'}} className="size-9 mt-3"/>
                <img src="/share.png" alt="แชร์"  height={1} width={100} className="size-9 mt-3 ml-2"/>
            </div>
            
            <div className="max-w-3xl mx-auto px-8">
                            
                            
                    <input
                        role="tab-panel"
                        type="text"
                        required
                        placeholder="ค้นหาหนังสือ"
                        className="text-left text-black p-1 pl-5 mt-8 bg-gray-100 rounded-xl w-full"
                        />
                    <img src="/search.png" alt="ค้นหา" className="absolute -mt-7 " style={{ opacity: 0.5, marginLeft: '330px' }} />
                        
                    <div className="mt-10 ml-5 text-red-500">ปีเริ่มต้น</div>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="YYYY"
                        className="bg-gray-100 rounded-xl w-full mt-3 p-1 pl-5 border border-red-500"/>
                    
                    <div className="mt-8 ml-5 text-red-500">ปีสิ้นสุด</div>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="YYYY"
                        className="bg-gray-100 rounded-xl w-full mt-3 p-1 pl-5 border border-red-500"/>
                    
                    {/* ปุ่ม ค้นหา - ปุ่มล้างค่า */}

                    <div className="flex justify-center gap-6 mt-8">
                        <button
                            type="button"
                            className="bg-green-500 hover:bg-green-600 text-white font-simple py-1 px-6 rounded-xl mr-2"
                            >
                            ค้นหา
                        </button>

                        <button
                            type="button"
                            className="bg-yellow-400 hover:bg-yellow-500 text-white font-simple py-2 px-6 rounded-xl"
                            >
                            ล้างค่า
                        </button>
                    </div>

                    <div className="mt-10 ml-5 font-bold">หนังสือแนะนำ</div>

                        {/* หนังสือแนะนำ */}
                    <div style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
                        <div className="flex gap-9 mt-8">

                        <div className="text-center text-green font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book6.jpg" alt="book6" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#10B981' }}>มี</span>
                        </div>
                            
                        <div className="text-center text-green font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book4.jpg" alt="book4" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: 'red' }}>หมด</span>
                        </div>

                        <div className="text-center text-green  font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book5.jpg" alt="book5" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#10B981' }}>มี</span>
                        </div>

                        <div className="text-center text-green  font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book14.jpg" alt="book14" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#10B981' }}>มี</span>
                        </div>

                    </div>
                </div>
                {/* แถวที่ 2 */}
                <div style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
                        <div className="flex gap-9 mt-8">

                        <div className="text-center text-green font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book7.jpg" alt="book7" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#10B981' }}>มี</span>
                        </div>
                            
                        <div className="text-center text-green font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book8.jpg" alt="book8" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#10B981' }}>มี</span>
                        </div>

                        <div className="text-center text-green  font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book9.jpg" alt="book9" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#10B981' }}>มี</span>
                        </div>

                        <div className="text-center text-green  font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book15.jpg" alt="book15" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#FF00FF' }}>ไม่บอก อิอิ</span>
                        </div>

                    </div>
                </div>

                

                <div className="mt-10 ml-5 font-bold">ประวัติ</div>

                    {/* ประวัติ */}
                    <div style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
                        <div className="flex gap-9 mt-8">

                        <div className="text-center text-green font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book1.jpg" alt="book1" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#10B981' }}>คืนแล้ว</span>
                        </div>
                            
                        <div className="text-center text-green font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book2.jpg" alt="book2" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: 'red' }}>ยังไม่คืน</span>
                        </div>

                        <div className="text-center text-green  font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book3.jpg" alt="book3" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#10B981' }}>คืนแล้ว</span>
                        </div>

                        <div className="text-center text-green  font-bold" style={{ scrollSnapAlign: 'center' }}>
                            <div className="bg-gray-300 text-white py-3 px-1 rounded-xl" style={{ width: '120px', height: '180px' }}>
                                <img src="/Book11.jpg" alt="book11" className="w-full h-full object-cover" />
                            </div>
                            <span style={{ color: '#10B981' }}>คืนแล้ว</span>
                        </div>






                    </div>
                </div>

                <div className="bg-white" style={{ width: '120px', height: '180px' }}></div>

            
            </div>
        </div>
        

            
    )
}
