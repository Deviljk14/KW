import React from "react";

import { Line, Text } from "components";

const CartRoadmap = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-black-900_87 text-sm w-auto"
          size="txtPoppinsRegular14Black90087"
        >
          {props?.accounttext}
        </Text>
        <Line className="bg-black-900_87 h-px rotate-[-117deg] w-[2%]" />
        <Text
          className="text-black-900_87 text-sm w-auto"
          size="txtPoppinsRegular14Black90087"
        >
          {props?.myaccounttext}
        </Text>
        {!!props?.linefourteen ? (
          <Line className="bg-black-900_87 h-px rotate-[-117deg] w-[2%]" />
        ) : null}
        {!!props?.producttext ? (
          <Text
            className="text-black-900_87 text-sm w-auto"
            size="txtPoppinsRegular14Black90087"
          >
            {props?.producttext}
          </Text>
        ) : null}
        {!!props?.linefifteen ? (
          <Line className="bg-black-900_87 h-px rotate-[-117deg] w-[2%]" />
        ) : null}
        {!!props?.viewcarttext ? (
          <Text
            className="text-black-900_87 text-sm w-auto"
            size="txtPoppinsRegular14Black90087"
          >
            {props?.viewcarttext}
          </Text>
        ) : null}
        {!!props?.linesixteen ? (
          <Line className="bg-black-900_87 h-px rotate-[-117deg] w-[2%]" />
        ) : null}
        {!!props?.checkouttext ? (
          <Text
            className="text-black-900 text-sm w-auto"
            size="txtPoppinsRegular14Black900"
          >
            {props?.checkouttext}
          </Text>
        ) : null}
      </div>
    </>
  );
};

CartRoadmap.defaultProps = {
  accounttext: "Account",
  myaccounttext: "My Account",
};

export default CartRoadmap;
