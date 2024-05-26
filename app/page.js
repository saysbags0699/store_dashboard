'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const CombinedDataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/combined');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
            >
              Shop Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
            >
              Score
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
            >
              Label
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
            >
              Logo
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          {[data.route1, data.route2].map((item, index) => (
            <tr
              key={index}
              className={`border-b dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : ''}`}
            >
              {/* <td className="px-6 py-4">
                <Image src={item.logo.url_list[0]} alt="Shop Logo" width={48} height={48} className="w-12 h-12" />
              </td> */}
              <td
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.shop_name}
              </td>
              <td className="px-6 py-4">{item.score}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CombinedDataComponent;
