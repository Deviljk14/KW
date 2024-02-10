import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import ECommerceHomePageColumnwhatareyoulookiOne from "components/ECommerceHomePageColumnwhatareyoulookiOne";
import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";

const SERVICEPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <ECommerceHomePageTopheader className="bg-black-900 flex flex-col items-end justify-start p-3 w-full" />
          <div className="flex md:flex-col flex-row font-inter md:gap-10 gap-[148px] items-center justify-start max-w-[1179px] mt-10 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[190px] items-start justify-between w-auto md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.72px]"
                  size="txtInterBold24"
                >
                  STARTUP IDEA
                </Text>
              </div>
              <div className="flex flex-row font-poppins gap-12 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-base text-black-900 text-center w-auto"
                    size="txtPoppinsRegular16"
                  >
                    Home
                  </Text>
                  <Img
                    className="h-px w-12"
                    src="images/img_underline.svg"
                    alt="underline"
                  />
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtPoppinsRegular16"
                  >
                    Services
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtPoppinsRegular16"
                  >
                    About
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer min-w-[61px] text-base text-black-900 text-center"
                  onClick={() => navigate("/signup")}
                  size="xs"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="flex flex-row font-poppins gap-6 items-center justify-start w-auto">
              <ECommerceHomePageColumnwhatareyoulookiOne className="bg-gray-100 flex flex-col gap-2.5 items-center justify-center pl-5 pr-3 py-[7px] rounded w-auto" />
              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <Img
                  className="h-8 w-8"
                  src="images/img_wishlist.svg"
                  alt="wishlist"
                />
                <div className="flex flex-col h-8 items-center justify-start w-8">
                  <Img
                    className="common-pointer h-8 w-8"
                    src="images/img_cart1.svg"
                    alt="cartOne"
                    onClick={() => navigate("/cart")}
                  />
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-px mt-4"
            src="images/img_line3.svg"
            alt="lineThree"
          />
        </div>
        <div className="flex flex-col font-inter items-end mt-10 md:px-10 sm:px-5 px-[65px] w-full">
          <div className="bg-black-900 h-96 md:h-[352px] p-4 md:px-5 relative w-[96%] md:w-full">
            <Img
              className="absolute h-[352px] inset-y-[0] my-auto object-cover right-[14%] w-2/5"
              src="images/img_heroendframe.png"
              alt="heroendframe"
            />
            <Text
              className="absolute leading-[60.00px] left-[5%] text-5xl sm:text-[38px] md:text-[44px] text-gray-50 top-[23%] tracking-[1.92px] w-[44%] sm:w-full"
              size="txtInterSemiBold48"
            >
              Sell Your Product Easily with STARTUP IDEA{" "}
            </Text>
            <div className="absolute bottom-[23%] flex flex-row font-poppins gap-2 items-center justify-center left-[5%] w-auto">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-base text-center text-gray-50 w-auto"
                  size="txtPoppinsMedium16"
                >
                  Shop Now
                </Text>
                <Line className="bg-gray-50 h-px w-full" />
              </div>
              <Img
                className="h-6 w-6"
                src="images/img_arrowright_gray_50.svg"
                alt="arrowright"
              />
            </div>
            <Img
              className="absolute bottom-[13%] h-3.5 left-[28%] w-[110px]"
              src="images/img_frame883.svg"
              alt="frame883"
            />
          </div>
        </div>
        <div className="flex flex-col font-poppins items-center mt-[91px] sm:pl-5 pl-[27px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
            size="txtPoppinsBold36"
          >
            <>Seller&#39;s Registration Form</>
          </Text>
          <div className="bg-gray-50_01 flex flex-col font-nunito items-start justify-start max-w-[1212px] mt-[68px] mx-auto p-[74px] md:px-5 rounded-[10px] shadow-bs2 w-full">
            <div className="flex flex-col justify-start mb-1 w-[81%] md:w-full">
              <Text
                className="text-deep_orange-600 text-xl"
                size="txtNunitoBold20"
              >
                Photos and Videos
              </Text>
              <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start mt-[26px] w-[94%] md:w-full">
                <div className="bg-gray-200 border border-gray-400 border-solid flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-lg w-[47%] md:w-full">
                  <Img
                    className="h-24 w-24"
                    src="images/img_cameraalt.svg"
                    alt="cameraalt"
                  />
                  <Text
                    className="mb-[22px] text-center text-gray-900 text-lg"
                    size="txtNunitoMedium18"
                  >
                    Upload Photos
                  </Text>
                </div>
                <div className="bg-gray-200 border border-gray-400 border-solid flex flex-col gap-6 items-center justify-end p-[72px] md:px-10 sm:px-5 rounded-lg w-[47%] md:w-full">
                  <Img
                    className="h-12"
                    src="images/img_upload.svg"
                    alt="upload"
                  />
                  <Text
                    className="text-center text-gray-900 text-lg"
                    size="txtNunitoMedium18"
                  >
                    Upload Videos
                  </Text>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[7px] mt-[78px] text-deep_orange-600 text-xl"
                size="txtNunitoBold20"
              >
                Uploaded Photos and Videos
              </Text>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:ml-[0] ml-[11px] mt-3.5 w-[99%]"
                orientation="horizontal"
              >
                <div className="h-[178px] relative w-full">
                  <Img
                    className="h-[178px] m-auto object-cover rounded-[5px] w-full"
                    src="images/img_rectangle65.png"
                    alt="rectangleSixtyFive"
                  />
                  <div className="absolute flex flex-col items-center justify-start right-[3%] top-[2%] w-[3%]">
                    <div className="bg-deep_orange-600 h-1 rounded-[50%] w-1"></div>
                    <div className="bg-deep_orange-600 h-1 mt-1 rounded-[50%] w-1"></div>
                    <div className="bg-deep_orange-600 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                </div>
                <div className="h-[178px] relative w-full">
                  <Img
                    className="h-[178px] m-auto object-cover rounded-[5px] w-full"
                    src="images/img_rectangle66.png"
                    alt="rectangleSixtySix"
                  />
                  <div className="absolute flex flex-col items-center justify-start right-[3%] top-[2%] w-[3%]">
                    <div className="bg-deep_orange-600 h-1 rounded-[50%] w-1"></div>
                    <div className="bg-deep_orange-600 h-1 mt-1 rounded-[50%] w-1"></div>
                    <div className="bg-deep_orange-600 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                </div>
                <div className="h-[178px] relative w-full">
                  <Img
                    className="h-[178px] m-auto object-cover rounded-[5px] w-full"
                    src="images/img_rectangle67.png"
                    alt="rectangleSixtySeven"
                  />
                  <div className="absolute flex flex-col items-center justify-start right-[3%] top-[2%] w-[3%]">
                    <div className="bg-deep_orange-600 h-1 rounded-[50%] w-1"></div>
                    <div className="bg-deep_orange-600 h-1 mt-1 rounded-[50%] w-1"></div>
                    <div className="bg-deep_orange-600 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                </div>
                <div className="h-[178px] relative w-full">
                  <Img
                    className="h-[178px] m-auto object-cover rounded-[5px] w-full"
                    src="images/img_rectangle65.png"
                    alt="rectangleSixtyEight"
                  />
                  <div className="absolute flex flex-col items-center justify-start right-[3%] top-[2%] w-[3%]">
                    <div className="bg-deep_orange-600 h-1 rounded-[50%] w-1"></div>
                    <div className="bg-deep_orange-600 h-1 mt-1 rounded-[50%] w-1"></div>
                    <div className="bg-deep_orange-600 h-1 mt-1 rounded-[50%] w-1"></div>
                  </div>
                </div>
              </List>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[69px] mt-4 w-[85%] md:w-full">
                <Text className="text-black-900 text-lg" size="txtNunitoBold18">
                  Image 1
                </Text>
                <Text className="text-black-900 text-lg" size="txtNunitoBold18">
                  Image 2
                </Text>
                <Text className="text-black-900 text-lg" size="txtNunitoBold18">
                  Image 3
                </Text>
                <Text className="text-black-900 text-lg" size="txtNunitoBold18">
                  Image 1
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold h-[59px] leading-[normal] md:ml-[0] ml-[335px] mr-48 mt-[70px] rounded-[10px] text-center text-lg w-[326px]"
                color="purple_A700"
                size="lg"
                variant="fill"
              >
                Submit{" "}
              </Button>
            </div>
          </div>
          <footer className="bg-black-900 flex font-poppins items-center justify-center mt-[576px] md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center mb-[23px] mt-[79px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[87px] items-start justify-center w-auto md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col font-inter items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-50 sm:text-xl tracking-[0.72px]"
                          size="txtInterBold24Gray50"
                        >
                          Startup IDEA
                        </Text>
                      </div>
                      <Text
                        className="text-gray-50 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Subscribe
                      </Text>
                    </div>
                    <Text
                      className="text-base text-gray-50 w-auto"
                      size="txtPoppinsRegular16Gray50"
                    >
                      Get 10% off your first order
                    </Text>
                  </div>
                  <Input
                    name="sendmail"
                    placeholder="Enter your email"
                    className="p-0 placeholder:text-gray-50_7e text-base text-left w-full"
                    wrapClassName="flex w-[217px]"
                    type="email"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-6 ml-8"
                        src="images/img_save.svg"
                        alt="save"
                      />
                    }
                    shape="round"
                    color="gray_50"
                    size="xs"
                    variant="outline"
                  ></Input>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <a href="javascript:" className="text-gray-50 text-xl w-auto">
                    <Text size="txtPoppinsMedium20">Support</Text>
                  </a>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[24.00px] max-w-[175px] md:max-w-full text-base text-gray-50"
                      size="txtPoppinsRegular16Gray50"
                    >
                      111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </Text>
                    <Text
                      className="text-base text-gray-50 w-auto"
                      size="txtPoppinsRegular16Gray50"
                    >
                      exclusive@gmail.com
                    </Text>
                    <Text
                      className="text-base text-gray-50 w-auto"
                      size="txtPoppinsRegular16Gray50"
                    >
                      +88015-88888-9999
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-gray-50 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Account
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">My Account</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">
                          Login / Register
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">Cart</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">Wishlist</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">Shop</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-gray-50 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Quick Link
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">
                          Terms Of Use
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">FAQ</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-50">
                        <Text size="txtPoppinsRegular16Gray50">Contact</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Text
                      className="text-gray-50 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Download App
                    </Text>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-gray-50_99 text-xs w-auto"
                        size="txtPoppinsMedium12"
                      >
                        Save $3 with App New User Only
                      </Text>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <div className="bg-black-900 flex flex-col h-20 items-center justify-start p-0.5 w-20">
                          <Img
                            className="h-[76px] md:h-auto object-cover w-[76px]"
                            src="images/img_qrcode1.png"
                            alt="qrcodeOne"
                          />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <div className="bg-black-900_02 h-10 md:h-[30px] p-[3px] relative w-full">
                            <div className="h-[30px] m-auto w-[95%]">
                              <div className="h-[30px] m-auto w-full">
                                <Img
                                  className="h-[30px] m-auto object-cover rounded w-full"
                                  src="images/img_pngtransparent.png"
                                  alt="pngtransparent"
                                />
                                <Img
                                  className="absolute bottom-[37%] h-px right-[7%] w-px"
                                  src="images/img_vector1.svg"
                                  alt="vectorOne"
                                />
                              </div>
                              <Img
                                className="absolute bottom-[30%] h-[3px] right-[7%]"
                                src="images/img_vector2.svg"
                                alt="vectorTwo"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[43%] h-px right-[13%] w-px"
                              src="images/img_vector3.svg"
                              alt="vectorThree"
                            />
                            <Img
                              className="absolute bottom-[38%] h-0.5 right-[9%] w-px"
                              src="images/img_vector4.svg"
                              alt="vectorFour"
                            />
                          </div>
                          <div className="bg-black-900 flex flex-col items-center justify-start p-[3px] w-full">
                            <Img
                              className="h-[34px] md:h-auto object-cover rounded w-full"
                              src="images/img_downloadappstore.png"
                              alt="downloadappstor"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconfacebook.svg"
                      alt="iconfacebook"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icontwitter.svg"
                      alt="icontwitter"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconinstagram.svg"
                      alt="iconinstagram"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                <Img
                  className="sm:h-auto h-px object-cover w-[1413px] md:w-full"
                  src="images/img_underline_white_a700_1x1439.png"
                  alt="underline_One"
                />
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_iconcopyright.svg"
                      alt="iconcopyright"
                    />
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsRegular16WhiteA700"
                    >
                      Copyright Rimel 2022. All right reserved
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="flex flex-col font-poppins md:gap-10 gap-[355px] items-end mt-[2666px] md:px-10 sm:px-5 px-[89px] w-full">
          <Button
            className="flex h-[46px] items-center justify-center rotate-[90deg] w-[46px]"
            shape="circle"
            color="gray_100"
            size="md"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_arrowright.svg"
              alt="arrowright_One"
            />
          </Button>
          <Text
            className="mr-[520px] text-base text-gray-50"
            size="txtPoppinsRegular16Gray50"
          >
            Become a Seller{" "}
          </Text>
        </div>
      </div>
    </>
  );
};

export default SERVICEPage;
