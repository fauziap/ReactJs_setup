import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActiveLink = (path) => {
        return location.pathname === path ? 'bg-gray-300' : '';
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                    </div>
                    <div className="">
                        <div className=" flex items-baseline">
                            <NavLink exact to="/" className={`text-white px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('/')}`}>
                                Home
                            </NavLink>
                            <NavLink to="/lala" className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('/lala')}`}>
                                About
                            </NavLink>
                            <NavLink to="*" className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActiveLink('*')}`}>
                                NotFound
                            </NavLink>
                        </div>
                    </div>
                    <div className='w-full'>
                        <input className='rounded-full outline-none py-1 w-full px-3' type="text" />
                    </div>
                    <div className='space-x-3'>
                        <button className='text-white px-2 py-1 rounded-md text-sm font-medium bg-red-300'>lala</button>
                        <button className='text-white px-2 py-1 rounded-md text-sm font-medium bg-red-300'>lala</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
