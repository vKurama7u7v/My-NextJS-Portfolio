'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Routes } from '../config';

function SidebarMenu() {

  const [open, setOpen] = useState<boolean>(true);

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen ${open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
    >
      <div className="flex justify-end py-3">
        <button onClick={() => setOpen(!open)}>open</button>
      </div>
      <div className="relative flex flex-col gap-4 mt-4">
        {Routes?.map((menu, i) => (
          <Link
            href={menu?.link}
            key={i}
            className={`mt-5 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>icon</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SidebarMenu