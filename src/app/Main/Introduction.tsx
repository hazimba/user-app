"use client"
import { Button } from "antd"
import styled from "styled-components";
import Image from "next/image"

const ImageStack = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
  background-image: url("/hazimbakar-circle.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 350px;

  .rotating-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/abs4.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 600px;
    transform-origin: center center;
    animation: rotate 100s linear infinite;
    z-index: 1;
  }

  /* Keyframes for rotating animation */
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Introduction = () => {

  return (
    <div className="flex w-screen h-screen justify-center items-center font-sans">
      <div className="flex ml-48 justify-between h-[350px] flex-col gap-5">
        <div>
          <div className="text-2xl flex items-end justify-center">IM <span className="text-5xl pl-2 pr-4 text-yellow-400">HAZIM BAKAR</span></div>
          <div>
            <div>SOFTWARE DEVELOPER</div>
            <div>FRONTEND DEVELOPER</div>
            <div>WEB DEVELOPMENT</div>
            <div>UI/UX DESIGNER</div>
            <div>REACT JS</div>
          </div>
        </div>

        <div className="">
          <Button className="text-yellow-400 bg-inherit border-yellow-200 border-2 px-6 py-4 group-hover:hidden">
            Contact ME!
          </Button>
        </div>
      </div>
      <ImageStack>
        <div className="rotating-image"></div>
      </ImageStack>
    </div>
  );
}
export default Introduction