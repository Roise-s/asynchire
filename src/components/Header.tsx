
const Header = () => {
  return (
    <>
        <header className="sticky top-0 mb-20 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-2xl w-full bg-neutral-800 border border-neutral-700 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto">
            <div className="flex items-center">
            {/* Logo */}
            <span className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" aria-label="asynchire">
                <svg className="w-24 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12" className="stroke-blue-600 dark:stroke-blue-500" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12" className="stroke-blue-600 dark:stroke-blue-500" stroke="currentColor" strokeWidth="2"/>
                <circle cx="13" cy="16.5214" r="5" className="fill-blue-500" fill="currentColor"/>
                <p className="fill-blue-500 z-50">asynchire</p>
                </svg>
            </span>
            {/* End Logo */}

            <div className="ms-1 sm:ms-2">

            </div>
            </div>

            <div className="flex items-center gap-1 md:order-4 md:ms-4">
            <a className="w-full sm:w-auto whitespace-nowrap py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-[24px] bg-blue-500 border border-transparent text-white hover:bg-blue-600 focus:outline-hidden focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none" href="/Information-You-Should-Know">
                Get Started
            </a>
            </div>

            <div id="hs-pro-pnm" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-pro-pnm-collapse" role="region">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
                <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 hover:text-gray-800-hover hover:text-neutral-200-hover focus:outline-hidden focus:gray-100 focus:neutral-700 border-transparent text-neutral-200/80"  href="https://www.cellc.co.za/cellc/home" target="_blank" aria-current="page">Home</a>
                <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 hover:text-gray-800-hover hover:text-neutral-200-hover focus:outline-hidden focus:gray-100 focus:neutral-700 border-transparent text-neutral-200/80"  href="https://www.bluelabeltelecoms.co.za/careers.php" target="_blank" aria-current="page">Careers</a>
                <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 hover:text-gray-800-hover hover:text-neutral-200-hover focus:outline-hidden focus:gray-100 focus:neutral-700 border-transparent text-neutral-200/80"  href="https://cellc.com/who-we-are" target="_blank" aria-current="page">About us</a>
            </div>
            </div>
        </nav>
        </header>
    </>
  )
}

export default Header
