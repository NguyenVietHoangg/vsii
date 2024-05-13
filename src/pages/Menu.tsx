import React from 'react';
import Navbar from '../components/Navbar';
const Menu: React.FC = () => {
  const dbNavbar = [
    {
      id: 1,
      icon: '',
      name: 'Danh mục 1',
      subNav: [
        {
          id: 2,
          icon: '',
          name: 'Danh mục 1.1',
          subNav: [
            {
              id: 3,
              icon: '',
              name: 'Danh mục 1.1.1'
            },
            {
              id: 6,
              icon: '',
              name: 'Danh mục 1.1.2'
            },
            {
              id: 5,
              icon: '',
              name: 'Danh mục 1.1.3'
            }
          ]
        },
        {
          id: 6,
          icon: '',
          name: 'Danh mục 1.2'
        },
        {
          id: 7,
          icon: '',
          name: 'Danh mục 1.3'
        }
      ]
    },
    {
      id: 8,
      icon: '',
      name: 'Danh mục 2',
      subNav: [
        {
          id: 9,
          icon: '',
          name: 'Danh mục 2.1'
        },
        {
          id: 10,
          icon: '',
          name: 'Danh mục 2.2'
        },
        {
          id: 11,
          icon: '',
          name: 'Danh mục 2.3'
        }
      ]
    }
  ];
  return (
    <div className="w-full px-5 flex  flex-col items-start">
      <h5 className="text-[20px] font-bold">List Menu </h5>
      <div className="mt-4 border border-t-[20px] border-[#1A73E8] w-full rounded-[8px]">
        <Navbar db={dbNavbar} />
      </div>
    </div>
  );
};

export default Menu;
