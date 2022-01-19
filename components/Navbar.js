import Link from 'next/link';
import { useState } from 'react';
import Container from '@components/Container';

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [offcavnas, setOffcanvas] = useState(false);
    const [search, setSearch] = useState(false);
    const dropdownList = [
        { text: 'Internet', href: '/posts' },
        { text: 'Books', href: '/posts' },
        { text: 'Open Source', href: 'posts' },
    ];

    return (
        <nav className="py-10">
            <Container>
                <div className="flex items-center">
                    <div className="w-3/12 lg:hidden">
                        <button
                            onClick={() => { setOffcanvas(!offcavnas) }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="lg:w-2/12 w-6/12">
                        <Link href="/">
                            <a className="flex items-center justify-center lg:justify-start">
                                <div className="w-10 h-10 bg-gray-500 rounded-xl flex items-center justify-center mr-4 shadow-2xl">E</div>
                                Delta Epictetus
                            </a>
                        </Link>
                    </div>
                    <div className="w-3/12 lg:hidden text-right">
                        <button
                            onClick={() => setSearch(!search)}
                        >
                            <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:w-7/12 p-10 w-full lg:bg-none lg:static bg-gradient-to-b from-gray-600 to-gray-900 fixed h-full lg:h-auto lg:p-0 top-0 transition-all ${offcavnas ? 'left-0' : '-left-full'}`}>
                        <button
                            className="absolute top-10 right-10 lg:hidden"
                            onClick={() => setOffcanvas(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className="flex space-y-4 lg:space-x-14 lg:items-center flex-col lg:flex-row lg:space-y-0">
                            <li><Link href=""><a className="hover:underline">UI Design</a></Link></li>
                            <li><Link href=""><a className="hover:underline">Front-End</a></Link></li>
                            <li><Link href=""><a className="hover:underline">Back-End</a></Link></li>
                            <li className="relative">
                                <a
                                    href="# "
                                    className="hover:underline cursor-pointer flex items-center"
                                    onClick={() => setDropdown(!dropdown)}
                                >Lainnya
                                    <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                                {dropdown && (
                                    <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                                        {dropdownList.map(({ text, href }) => (
                                            <li key={text} className="border-b border-white/5 last:border-0">
                                                <Link href={href} >
                                                    <a className="flex py-3 px-6 hover:bg-gray-700/60">
                                                        {text}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className={`lg:w-3/12 absolute lg:static left-0 w-full px-10 lg:px-0 transition-all ${search ? 'top-10' : '-top-40'}`}>
                        <button
                            className="absolute top-2 right-14 lg:hidden"
                            onClick={() => setSearch(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <input className="bg-gray-700 py-2 px-6 w-full lg:rounded-full rounded-lg outline-none bg-search pl-10" placeholder="Search" />
                    </div>
                </div >
            </Container >
        </nav >
    );
}