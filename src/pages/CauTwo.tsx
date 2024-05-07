import React, { useState } from 'react';

const CauTwo: React.FC = () => {
  const items = [
    {
      id: 1,
      name: 'Hoang'
    },
    {
      id: 2,
      name: 'Dung'
    },
    {
      id: 3,
      name: 'Lanh'
    },
    {
      id: 4,
      name: 'Dong'
    },
    {
      id: 5,
      name: 'Hoa'
    }
  ];
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filterItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#84d6fc] gap-2 w-[400px] flex flex-col justify-start items-start rounded-[8px] p-4 ">
      <h3 className="text-[20px] w-full text-center ">Câu 2 cua iem</h3>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="border w-full px-2 "
      />
      <p>Danh sách tên</p>
      <ul className="pl-5">
        {filterItems.length > 0 ? (
          filterItems.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>Không tìm thấy dữ liêu</li>
        )}
      </ul>
    </div>
  );
};

export default CauTwo;
