import React from 'react';

import MenuTab from '@/app/components/MenuTab';

export default function UserProfile() { // Using a descriptive tag
  return (
    <main className="flex flex-col">  {/* Main container as column */}
        <div className='mt-20'>
            <a href="/profile">
                <img src="/left.png" alt="" className='absolute ml-2'/>
            </a>
            <h1 className="text-xl font-bold ml-9 ">การศึกษา</h1>
            <hr className="h-4 font-bold mt-2" />
            <MenuSection title="ผลการศึกษา" icon="/edu2.png" /> {/* Using a reusable MenuSection component */}
            <hr className="h-4 font-bold mt-2" />
            <MenuSection title="ลงทะเบียนเรียน" icon="/register.png" />
            <hr className="h-4 font-bold mt-2" />
            <MenuSection title="เขียนคำร้อง" icon="/write.png" />
            <hr className="h-4 font-bold mt-2" />
            <MenuTab/>
        </div>
    </main>
  );
}


function MenuSection({ title, icon = null }: { title: any; icon?: any }) {
    return (
      <div className="flex -mt-2 items-center">
        {icon && <img src={icon} className="ml-2" alt={title} width={30} height={40}/>}
        <h1 className="ml-3 font-serif text-lg">{title}</h1>
        <img src="/rectangle.png" className="-mt-1 ml-auto mr-4" />
        <hr className="h-4 font-bold mt-6" />
      </div>
    );
  }
  


