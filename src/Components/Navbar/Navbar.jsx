import { useNavigate } from 'react-router-dom';
  export const Navbar = () =>{

     const navigate = useNavigate();
    
    const handleClick = () => {
      navigate('/login');
    };
    const handleClick1 = () => {
      navigate('/sign-up');
    };
    return (

 <>
<section>


<nav className="bg-blue-600 dark:border-x-gray-700 w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

   </div>
    </nav>

</section>
        

<nav className="bg-gray-600 border-gray-200 dark:bg-gray-100 dark:border-x-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Digital App</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul >
        
        <li>
            <button  className="bg-blue-600   w-25 py-3  rounded-2xl  cursor-pointer border-gray-500 hover:bg-blue-700  "  onClick={handleClick} >Login</button>
            <button className=" w-25 py-3    mx-2  bg-gray-100  border-black hover:bg-blue-600  cursor-pointer  rounded-2xl"   onClick={handleClick1}>Sign up</button>
           
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-00 dark:divide-gray-00">
               <div>
              
               </div>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


    <div className="relative overflow-hidden group">
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-opacity-80 bg-gray-800 text-white">
        {/* Background floating images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="https://img.freepik.com/premium-vector/banking-finance-banking-networking-business-global-internet-connection-financial-technology-digital-marketing-world-map-point-line-composition-earth-planet-globe-wireframe-hands-vector_127544-2396.jpg?w=1060"
            alt="Banking Background"
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-float-slow brightness-200"
          />
          {/* <img
            src=""
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-60 animate-float-slower brightness-200"
          /> */}
          <img
            src="https://img.freepik.com/free-vector/money-transfer-realistic-composition-with-credit-cards-payment-terminal-laptop-cash-blue_1284-28205.jpg?ga=GA1.1.948707587.1745726549&semt=ais_hybrid&w=740"
            alt="Crypto Floating"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-70 transition duration-700 ease-in-out animate-float brightness-110"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-3xl px-4 py-8 bg-opacity-90 content">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-indigo-500 text-shadow-lg">
            Global Transaction
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-8 text-gray-200">
            Seamless banking and transactions across the globe. Experience the new digital economy.
          </p>
          <div className="flex gap-6">
            <a
              href="#get-started"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  



</>

    );

}
