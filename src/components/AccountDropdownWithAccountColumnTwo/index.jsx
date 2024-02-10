import React from "react";

import { Img, Text } from "components";

const AccountDropdownWithAccountColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black-900_0a flex flex-col items-center justify-end p-[9px] rounded w-full">
          <div className="flex flex-col gap-[13px] items-start justify-start mt-2 w-auto">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_user_gray_50.svg"
                alt="user_One"
              />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.manageaccounttext}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img className="h-6 w-6" src="images/img_bag.svg" alt="bag" />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.myordertext}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_iconcancel.svg"
                alt="iconcancel"
              />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.mycancellationstext}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-6 rounded-[1px] w-6"
                src="images/img_signal_gray_50.svg"
                alt="signal"
              />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.myreviewstext}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_trophy.svg"
                alt="trophy"
              />
              <Text
                className="text-center text-gray-50 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.logouttext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AccountDropdownWithAccountColumnTwo.defaultProps = {
  manageaccounttext: "Manage My Account",
  myordertext: "My Order",
  mycancellationstext: "My Cancellations",
  myreviewstext: "My Reviews",
  logouttext: "Logout",
};

export default AccountDropdownWithAccountColumnTwo;
