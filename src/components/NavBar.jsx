export default function NavBar (){
    return (
        <nav 
className="z-0 relative" 
x-data="{open:false,menu:false, lokasi:false}">
  <div className="relative z-10 bg-newGreen shadow">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div className="relative flex items-center justify-between h-18">
        <div className="flex items-center px-2 lg:px-0">
          <a className="flex-shrink-0" href="#">
            <img className="block lg:hidden h-13 w-16" src="https://i.postimg.cc/wxPpJQ80/logo.png" alt="Logo"/>
            <img className="hidden lg:block h-18 w-24" src="https://i.postimg.cc/wxPpJQ80/logo.png" alt="Logo"/>
          </a>
          <div className="hidden lg:block lg:ml-2">
            <div className="flex">
              <a href="#" className="ml-4 px-3 py-2 rounded-md text-lg leading-5 font-medium text-gray-800 font-semibold hover:bg-newYellow hover:text-newBlue transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Home </a>
              <a href="#" className="ml-4 px-3 py-2 rounded-md text-lg leading-5 font-medium text-gray-800 font-semibold hover:bg-newYellow hover:text-newBlue transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Buy watch </a>
              <a href="#" className="ml-4 px-3 py-2 rounded-md text-lg leading-5 font-medium text-gray-800 font-semibold hover:bg-newYellow hover:text-newBlue transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Sell watch </a>
              <a href="#" className="ml-4 px-3 py-2 rounded-md text-lg leading-5 font-medium text-gray-800 font-semibold hover:bg-newYellow hover:text-newBlue transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "> Promos </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
          <div className="max-w-lg w-full lg:max-w-xs">
            <label htmlFor="search" className="sr-only">Search </label>
            <form methode="get" action="#" className="relative z-50">
              <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </button>
              <input type="text" name="s" id="s" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
            </form>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button onClick={"menu=!menu"} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div x-show="menu" className="block md:hidden">
      <div class="px-2 pt-2 pb-3">
        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Location </a>
        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Article </a>
        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Recipe </a>
        <a href="#" className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Promo </a>
      </div>
    </div>
  </div>
</nav>
    )
}