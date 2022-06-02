/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import useAuth from '../hooks/useAuth'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductsList() {
  const { users, state, dispatch, setAuthIsDone,authIsDone,auth } = useAuth();

  console.log('some state',state.products?.data?.product.map(nutrients=>nutrients.nutritions.Oats.protein))
  return (
    <Menu as="div" className="relative inline-block text-left z-20 ">
      <div>
        <Menu.Button className="inline-flex justify-center w-24  rounded-md border border-gray-300 shadow-sm px-2 py-1  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {state.nutrients ? state.nutrients : <div className='text-[16px]' >Options</div>}
          {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
        
        <Menu.Items className="origin-top-right absolute mt-2 w-36 rounded-md  h-40 overflow-scroll scrollbar-hide shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-2">
          
          <Menu.Item>
              {({ active }) => (
                
                <div className='flex justify-between '>

                <div
                  
                  onClick={(e)=>dispatch({ type:'ADD_NUTRIENTS', payload:'Oats'})}
                  className={classNames(
                    active ? 'bg-gradient-to-r from-sky-200 via-white to-white  text-black cursor-pointer' : ' text-gray-700 cursor-pointer',
                    'block px-4  text-[16px]  '
                    )}
                    >
                  Oats

                </div>
                <img src='https://res.cloudinary.com/dydzpejva/image/upload/v1654045355/food/oats_xh9lv8.png' className='w-5 h-5 mx-4 mt-2 rounded-full' />
                  </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                   <div className='flex justify-between'>

                   <div
                     
                     onClick={(e)=>dispatch({ type:'ADD_NUTRIENTS', payload:'Rise'})}
                     className={classNames(
                       active ? 'bg-gradient-to-r from-sky-200 via-white to-white  text-black cursor-pointer' : 'text-gray-700 cursor-pointer ',
                       'block px-4  text-[16px] '
                       )}
                       >
                     Rise
   
                   </div>
                   <img src='https://res.cloudinary.com/dydzpejva/image/upload/v1654045624/food/rise_cjesuv.png' className='w-5 h-5 mx-4 mt-2 rounded-full' />
                     </div>
              )}
            </Menu.Item>
            
            <Menu.Item>
              {({ active }) => (
                   <div className='flex justify-between '>

                   <div
                     
                     onClick={(e)=>dispatch({ type:'ADD_NUTRIENTS', payload:'Meat'})}
                     className={classNames(
                       active ? 'bg-gradient-to-r from-sky-200/40 via-white to-white  text-black cursor-pointer' : 'text-gray-700 cursor-pointer',
                       'block px-4   text-[16px]'
                       )}
                       >
                         Meal
   
                   </div>
                   <img src='https://res.cloudinary.com/dydzpejva/image/upload/v1654045349/food/chicken_orkxv1.png' className='w-5 h-5 mx-4 mt-2 rounded-full' />
                     </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                   <div className='flex justify-between'>
                 
                   <div
                     
                     onClick={(e)=>dispatch({ type:'ADD_NUTRIENTS', payload:'Crannbery'})}
                     className={classNames(
                       active ? 'bg-gradient-to-r from-sky-200/40 via-white to-white  text-black cursor-pointer' : 'text-gray-700 cursor-pointer',
                       'block px-4  text-[16px]'
                       )}
                       >
                       Blueberry
   
                   </div>
                   <img src='https://res.cloudinary.com/dydzpejva/image/upload/v1654045354/food/blueberry_cpnkkr.png' className='w-5 h-5 mx-4 mt-2 rounded-full' />
                     </div>
              )}
            </Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}