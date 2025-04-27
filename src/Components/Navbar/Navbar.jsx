import { Navigate, useNavigate } from 'react-router-dom';
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


<nav class="bg-blue-600 dark:border-x-gray-700 w-full">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

   </div>
    </nav>

</section>
        

<nav class="bg-gray-600 border-gray-200 dark:bg-gray-100 dark:border-x-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Digital App</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul >
        
        <li>
            <button  className="bg-blue-600   w-25 py-3  rounded-2xl  cursor-pointer border-gray-500 hover:bg-blue-700  "  onClick={handleClick} >Login</button>
            <button className=" w-25 py-3    mx-2  bg-gray-100  border-black hover:bg-blue-600  cursor-pointer  rounded-2xl"   onClick={handleClick1}>Sign up</button>
           
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-00 dark:divide-gray-00">
               <div>
              
               </div>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

</>

    );

}
