import React from "react";

import { Img, Text } from "components";

const Men = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col items-center justify-start pt-[39px] sm:px-5 px-[39px] rounded w-full">
          <Img
            className="h-[391px] md:h-auto object-cover w-[81%]"
            src="images/img_image46.png"
            alt="imageFortySix"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[1.28px] w-auto"
              size="txtInterMedium32"
            >
              Tom Cruise
            </Text>
            <Text
              className="text-base text-black-900 w-auto"
              size="txtPoppinsRegular16"
            >
              Founder & Chairman
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_icontwitter_black_900.svg"
              alt="icontwitter"
            />
            <Img
              className="h-6 w-6"
              src="images/img_iconinstagram_black_900.svg"
              alt="iconinstagram"
            />
            <Img
              className="h-6 w-6"
              src="images/img_iconlinkedin_black_900.svg"
              alt="iconlinkedin"
            />
          </div>
        </div>
      </div>
    </>
  );
};

Men.defaultProps = {};

export default Men;
