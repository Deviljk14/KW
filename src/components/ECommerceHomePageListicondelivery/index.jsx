import React from "react";

import { Img, List, Text } from "components";

const ECommerceHomePageListicondelivery = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col gap-6 items-center justify-start w-auto">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
            style={{ backgroundImage: "url('images/img_services.svg')" }}
          >
            <Img
              className="h-10 w-10"
              src="images/img_icondelivery.svg"
              alt="icondelivery"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <Text
              className="text-black-900 text-xl w-auto"
              size="txtPoppinsSemiBold20"
            >
              {props?.deliverytext}
            </Text>
            <Text
              className="text-black-900 text-center text-sm w-auto"
              size="txtPoppinsRegular14Black900"
            >
              {props?.deliverysubtext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start sm:left-[70px] sm:relative sm:right-[] sm:top-[] w-[262px]">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
            style={{ backgroundImage: "url('images/img_services.svg')" }}
          >
            <Img
              className="h-10 w-10"
              src="images/img_iconcustomerservice.svg"
              alt="iconcustomerser"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            <Text
              className="text-black-900 text-xl w-auto"
              size="txtPoppinsSemiBold20"
            >
              {props?.customerservicetext}
            </Text>
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtPoppinsRegular14Black900"
            >
              {props?.customerservicesubtext}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start w-auto">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-5 w-20"
            style={{ backgroundImage: "url('images/img_services.svg')" }}
          >
            {!!props?.checkmark ? (
              <Img
                className="h-10 w-10"
                alt="checkmark"
                src={props?.checkmark}
              />
            ) : null}
          </div>
          <div className="flex flex-col gap-2 items-center justify-start w-auto">
            {!!props?.moneybacktext ? (
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtPoppinsSemiBold20"
              >
                {props?.moneybacktext}
              </Text>
            ) : null}
            {!!props?.moneybacksubtext ? (
              <Text
                className="text-black-900 text-sm w-auto"
                size="txtPoppinsRegular14Black900"
              >
                {props?.moneybacksubtext}
              </Text>
            ) : null}
          </div>
        </div>
      </List>
    </>
  );
};

ECommerceHomePageListicondelivery.defaultProps = {
  deliverytext: "FREE AND FAST DELIVERY",
  deliverysubtext: "Free delivery for all orders over $140",
  customerservicetext: "24/7 CUSTOMER SERVICE",
  customerservicesubtext: "Friendly 24/7 customer support",
};

export default ECommerceHomePageListicondelivery;
