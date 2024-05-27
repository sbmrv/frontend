import React, { FC, useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

export interface NcInputNumberProps {
  className?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  label?: string;
  desc?: string;
  roomOFbeds?: number;
  setRoomOFbeds?: any;
}

const NcInputNumber: FC<NcInputNumberProps> = ({
  className = "w-full",
  defaultValue = 0,
  min = 0,
  max,
  onChange,
  label,
  desc,
  roomOFbeds,
  setRoomOFbeds,
}) => {
  // const [value, setValue] = useState(defaultValue);

  const handleClickDecrement = (roomOFbeds: any) => {
    if (min >= roomOFbeds) return;
    setRoomOFbeds((state: any) => {
      return state - 1;
    });
    onChange && onChange(roomOFbeds - 1);
  };
  const handleClickIncrement = (roomOFbeds: any) => {
    if (max && max <= roomOFbeds) return;
    setRoomOFbeds((state: any) => {
      return state + 1;
    });
    onChange && onChange(roomOFbeds + 1);
  };

  const renderLabel = () => {
    return (
      <div className="flex flex-col">
        <span className="font-medium text-neutral-800 dark:text-neutral-200">
          {label}
        </span>
        {desc && (
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-normal">
            {desc}
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      className={`nc-NcInputNumber flex items-center justify-between space-x-5 ${className}`}
      data-nc-id="NcInputNumber"
    >
      {label && renderLabel()}

      <div
        className={`nc-NcInputNumber flex items-center justify-between w-28`}
      >
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
          type="button"
          onClick={() => {
            handleClickDecrement(roomOFbeds ? roomOFbeds : defaultValue);
          }}
          // disabled={min >= roomOFbeds}
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        <span>{roomOFbeds ? roomOFbeds : defaultValue}</span>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
          type="button"
          onClick={handleClickIncrement}
          // disabled={max ? max <= roomOFbeds : false}
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NcInputNumber;