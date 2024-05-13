import React, { useState } from 'react';
interface NavItem {
  id: number;
  icon: string;
  name: string;
  subNav?: NavItem[];
}

interface NavbarProps {
  db: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ db }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (itemId: number) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((id) => id !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };
  return (
    <nav>
      <ul>
        {db.map((item) => (
          <li key={item.id}>
            <div className="border border-solid border-b-2 justify-between flex items-center p-4">
              <div>{item.name}</div>
              {item.subNav && (
                <div
                  className="cursor-pointer bg-green-500  w-8 h-8 flex justify-center ml-5 rounded-[6px] text-[28px] text-white items-center"
                  onClick={() => toggleItem(item.id)}
                >
                  {openItems.includes(item.id) ? '-' : '+'}
                </div>
              )}
            </div>
            {item.subNav && openItems.includes(item.id) && (
              <div className=" flex">
                {/* <div className="basis-9 flex justify-center items-start">
                  {' '}
                  <div className="w-[1px]  h-[88%] bg-black"></div>{' '}
                </div> */}
                <div className="ml-6 flex-1 ">
                  <Navbar db={item.subNav} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
