import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

const HeaderMenu = ({ menuItems, menuOpenerElement }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="focus:outline-none">
                {menuOpenerElement}
            </Menu.Button>

            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-black shadow-lg focus:outline-none">
                    <div className="py-1 flex flex-col divide-y divide-gray-300 dark:divide-gray-800">
                        {menuItems.map(([title, link]) =>
                            typeof link === "string"
                                ? <Menu.Item key={title}>
                                    <Link
                                        to={link}
                                        className={`py-[10px] pl-5 hover:text-red-500 hover:pl-6 transition-all text-left`}
                                    >
                                        {title}
                                    </Link>
                                </Menu.Item>
                                : <Menu.Item key={title}>
                                    <button
                                        className="py-[10px] pl-5 hover:text-red-500 hover:pl-6 transition-all text-left"
                                        key={title}
                                        onClick={link}
                                    >
                                        {title}
                                    </button>
                                </Menu.Item>
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default HeaderMenu;