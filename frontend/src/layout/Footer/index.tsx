import React from "react";
import { AiOutlineSmile } from "react-icons/ai";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className='flex h-20 text-lg justify-center items-center'>
      All rights reserved.
      <AiOutlineSmile />
    </div>
  );
}
