"use client"
import { Button } from "antd"
import styled from "styled-components";
import Image from "next/image"

const ImageStack = styled.div`
  width: 800px;
  height: 800px;
  background-image: url("/hazimbakar-circle.jpg"), url("/abs4.png");
  background-position: center center, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: 300px, 600px;
  position: relative;
`;

const Introduction = () => {

  return (
    <div className="flex w-screen h-[800px] justify-center items-center font-sans">
      <div className="flex ml-48 flex-col gap-5">
        <div className="text-2xl flex items-end justify-center">IM <span className="text-5xl pl-2 pr-4 text-yellow-400">HAZIM BAKAR</span></div>
        <div>
          <div>JAVASCRIPT REACT JS</div>
          <div>DEVELOPER</div>
        </div>

        <div className="pt-20">
          <Button className="text-yellow-400 bg-inherit border-yellow-200 border-2 px-6 py-4">Contact ME!</Button>
        </div>
      </div>
      <ImageStack />
    </div>
  );
}
export default Introduction