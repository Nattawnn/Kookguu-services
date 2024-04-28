import React from 'react';

import MenuTab from '../components/MenuTab';

export default function UserProfile() { // Using a descriptive tag
  return (
    <main className="flex flex-col">  {/* Main container as column */}
      <div className="bg-yellow-400 py-3 mx-2 mt-20 rounded-xl flex items-center">
        <img src="profile.png" className="ml-2 mt-1 mr-4" alt="Profile Picture" />
        <div className="flex-grow">
          <h3 className="font-inter text-black text-xl ">นาย โรเลม ยิปซี</h3>
          <p className="font-inter text-black text-sm">6512345678</p>
          <p className="text-black text-sm font-inter">คณะหมูกรอบไข่ดาวพิเศษไข่ดาวเพิ่มข้าว</p>
        </div>
      </div>
      <div className='mt-4'>
        <h1 className="text-xl font-bold ml-2">Main Menu</h1>
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="การศึกษา" icon="education.png" /> {/* Using a reusable MenuSection component */}
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="คณะ" icon="faculty.png" />
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="สถิติ" icon="statistic.png" />
        <hr className="h-4 font-bold mt-2" />
      </div>
      <div className='mt-4'>
        <h1 className="text-xl font-bold ml-2">Favourite</h1>
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="ชมรม" icon="" /> 
        <hr className="h-4 font-bold mt-2" />
        <MenuSection title="Tu Blog" icon="" /> 
        <hr className="h-4 font-bold mt-2" />
      </div>
      {/* <div className='mt-4'>
      <h1 className="text-xl font-bold ml-2">Popular</h1>
        <div className='mt-5 flex flex-wrap'> 
            <p className='bg-gray-100 w-72 h-72 ml-5 '></p>
            <p className='bg-gray-100 w-72 h-72 ml-5 '></p>
            <p className='bg-gray-100 w-72 h-72 ml-5 '></p>
            <p className='bg-gray-100 w-72 h-72 ml-5 '></p>
        </div>
      </div> */}
      {/*เดี๋ยวมาดูต่อว่าต้องใช้ flexไหน*/}

      <div className=''>
        <MenuTab/>

      </div>

    </main>
  );
}


function MenuSection({ title, icon = null }: { title: any; icon?: any }) {
    return (
      <div className="flex -mt-2 items-center">
        {icon && <img src={icon} className="ml-2" alt={title} />}
        <h1 className="ml-3 font-serif text-lg">{title}</h1>
        <img src="rectangle.png" className="-mt-1 ml-auto mr-4" />
        <hr className="h-4 font-bold mt-6" />
      </div>
    );
  }
  


