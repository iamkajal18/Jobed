import { Button } from "@/components/ui/button";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

// const Navbar = () => {
//   const user = false;
//   return (
//     <div className="bg-white w-auto">
//       <div className="flex items-center justify-between mx-4 sm:mx-6 lg:mx-10 max-w-5xl h-16">
//         {/* Logo Section */}
//         <div>
//           <h1 className=" font-bold text-2xl sm:text-3xl">
//             Jobed<span className="text-cyan-600">In</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className=" flex items-center ml-4 gap-2">
//           <ul className="hidden sm:flex font-medium items-center gap-4 md:gap-6">
//             <li className="text-sm md:text-base hover:text-cyan-600">Home</li>
//             <li className="text-sm md:text-base hover:text-cyan-600">Job</li>
//             <li className="text-sm md:text-base hover:text-cyan-600">Browse</li>
//           </ul>

//           {/* User Authentication Links / Profile */}
//           {!user ? (
//             <div className="flex items-center gap-1">
//               <div className="sm:hidden flex justify-center py-2">
//                 <ul className="flex font-medium items-center gap-2">
//                   <li className="text-sm hover:text-cyan-600">Home</li>
//                   <li className="text-sm hover:text-cyan-600">Job</li>
//                   <li className="text-sm hover:text-cyan-600">Browse</li>
//                 </ul>
//               </div>
//               <Link to="/sign-in/">
//                 <Button
//                   variant="link"
//                   className="text-sm sm:text-base text-blue-600 font-small hover:text-blue-800"
//                 >
//                   Sign in
//                 </Button>
//               </Link>
//               <Link to="/sign-up/">
//                 <Button
//                   variant="link"
//                   className="text-sm sm:text-base text-blue-600 font-medium hover:text-blue-800"
//                 >
//                   Sign up
//                 </Button>
//               </Link>
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer w-8 h-8 sm:w-9 sm:h-9">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     className="rounded-full"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="w-56">
//                 <div className="flex gap-2">
//                   <Avatar className="cursor-pointer w-9 h-9">
//                     <AvatarImage
//                       src="https://github.com/shadcn.png"
//                       className="w-9 h-9 rounded-full"
//                     />
//                   </Avatar>
//                   <div>
//                     <h2 className="text-lg font-semibold text-gray-800">
//                       Kajal Kasaudhan
//                     </h2>
//                     <div className="flex gap-2 text-sm text-gray-600">
//                       <p>Java</p>
//                       <p>React</p>
//                       <p>Python</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 mt-2">
//                   <User2 />
//                   <Button
//                     variant="link"
//                     className="text-blue-600 font-medium hover:text-blue-800"
//                   >
//                     View Profile
//                   </Button>
//                   <LogOut />
//                   <Button
//                     variant="link"
//                     className="text-red-600 font-medium hover:text-red-800"
//                   >
//                     Logout
//                   </Button>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//     </div>
//   );
// };

// export default Navbar;
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Login', href: '/sign-in', current: true },
  { name: 'SignUp', href: '/sign-up', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="Jobedin.jpg "
                className="h-8 w-auto rounded-lg hover:h-20 w-70 "
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
