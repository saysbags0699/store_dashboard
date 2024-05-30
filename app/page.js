"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  BsFillStarFill,
  BsFillHandbagFill,
  BsFillAlarmFill,
  BsFillChatQuoteFill,
} from "react-icons/bs";

const CombinedDataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/combined");
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
      <div className="m-12 bg-gray-100 rounded-3xl">
        <table className="min-w-full  divide-y divide-gray-200 dark:divide-gray-700 rounded-3xl">
          <thead className="bg-gray-50 rounded-3xl">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400 rounded-3xl"
              >
                Logo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Skor Toko
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400"
              >
                Kategori
              </th>
              <th
                scope="col"
                className="py-3 text-center  font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400 rounded-3xl"
              >
                Matric Score
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 text-xs rounded-3xl">
            {[data.route1, data.route2].map((item, index) => (
              <tr
                key={index}
                className={`border-b dark:border-gray-700 ${
                  index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <Image
                    src={item.logo.url_list[0]}
                    alt="Shop Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.shop_name}
                </td>
                <td className="px-6 py-4 text-lg font-semibold">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <p className="text-3xl">{item.score}</p>
                      <BsFillStarFill className="text-xs" />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                        {item.label}
                      </div>
                      <p className="text-xs font-light">
                        7 days ago {item.dailyScoreList}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4 flex justify-center items-center">
  {/* rating produk */}
  <div className="px-2 py-4 flex justify-center items-center">
    <div className="flex space-x-3 items-center">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
        <BsFillHandbagFill className="text-xl" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg flex items-center space-y-2">
          {item.ratingProduk}
          <BsFillStarFill className="text-xs" />
        </p>
        <div className="bg-gray-200 p-1 rounded-full px-2">
          <p>performa {item.metricScoreRatingProduk}</p>
        </div>
      </div>
    </div>
  </div>
  {/* rating Pengiriman */}
  <div className="px-2 py-4 flex justify-center items-center">
    <div className="flex space-x-3 items-center">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
        <BsFillAlarmFill className="text-xl" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg flex items-center space-y-2">
          {item.keterlambatan}
          <BsFillStarFill className="text-xs" />
        </p>
        <div className="bg-gray-200 p-1 rounded-full px-2">
          <p>performa {item.metricScoreKeterlambatan}</p>
        </div>
      </div>
    </div>
  </div>
  {/* rating Respon Chat */}
  <div className="px-2 py-4 flex justify-center items-center">
    <div className="flex space-x-3 items-center">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
        <BsFillChatQuoteFill className="text-xl" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg flex items-center space-y-2">
          {item.responsChat}
          <BsFillStarFill className="text-xs" />
        </p>
        <div className="bg-gray-200 p-1 rounded-full px-2">
          <p>performa {item.metricScoreResponsChat}</p>
        </div>
      </div>
    </div>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CombinedDataComponent;
