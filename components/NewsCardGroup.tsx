import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';

import { NewsData } from '@/lib/types';

const NewsCardGroup = ({
  year,
  data,
  isVisible,
}: {
  year: number;
  data: NewsData[];
  isVisible: boolean;
}) => {
  const [isExpanded, setExpanded] = useState(isVisible);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <div className="mb-2 flex w-full flex-row items-center justify-between">
        <div className="text-xl font-bold">{year}</div>
        <button
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          <div>
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </div>
        </button>
      </div>
      {data.map((newsData: NewsData, _) => {
        return (
          <>
            <section {...getCollapseProps()}>
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7671CE"
                  viewBox="0 0 24 24"
                  className="mr-3 md:mr-5"
                  style={{ minWidth: 20, minHeight: 20, maxWidth: 20, maxHeight: 20 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-col">
                  <div className="text-md font-bold">{newsData.content}</div>
                  <div className="text-sm">{newsData.explanation}</div>
                </div>
              </div>
            </section>
            <div className="mb-8"></div>
          </>
        );
      })}
    </>
  );
};

export default NewsCardGroup;
