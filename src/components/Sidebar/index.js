import React from 'react';
import { Links } from "../../common/Links";
import { Link } from "react-router-dom";

export default function Sidebar({ id = "", className = "" }) {
    return (
        <>
            <button onClick={() => { document.querySelector(`#${id}`).classList.toggle("-translate-x-full") }} data-drawer-target={id} data-drawer-toggle={id} aria-controls={id} type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id={id} className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${className}`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    <button className='block xl:hidden lg:hidden md:hidden sm:hidden' onClick={() => { document.querySelector(`#${id}`).classList.toggle("-translate-x-full") }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="space-y-2">
                        {Links.filter(link => link.showInNavigation).map((link, key) => {
                            return (
                                <li key={key}>
                                    <Link className='flex items-center p-2 text-base font-bold text-gray-900 rounded-lg' to={link.path}>{link.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </aside>
        </>
    )
}
