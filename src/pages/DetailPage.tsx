import React from "react";
import Slider from "../component/Slider";
import { singlePostData, userData } from "../lib/dumy_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faBookmark,
  faBuilding,
  faBus,
  faComment,
  faExpand,
  faLocationDot,
  faSchool,
  faScrewdriverWrench,
  faShieldDog,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Map from "../component/Map";
import { useLoaderData } from "react-router-dom";
import { Post } from "../lib/loaders";

const DetailPage: React.FC = () => {
  const post = useLoaderData() as Post;
  console.log(post);
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-y-scroll lg:overflow-hidden">
      <div className="basis-3/5 mt-0" id="left">
        <div className="pr-0 md:pr-6 lg:pr-12">
          <Slider images={singlePostData.images} />
          <div className="mt-12" id="info">
            <div className=" flex justify-between">
              <div className=" flex flex-col gap-5" id="post">
                <h1>{singlePostData.title}</h1>
                <div className="flex gap-1 items-center text-[#888] text-sm">
                  <FontAwesomeIcon size="xs" icon={faLocationDot} />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="text-xl font-light p-1 rounded gap-1 bg-[#84DCC6]/50 max-w-fit ">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 py- px-12 font-semibold  bg-[#84DCC6]/50">
                <img
                  src={userData.img}
                  alt=""
                  className="h-12 w-12 rounded-[50%] object-cover"
                />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="my-10 text-[#666]">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="basis-2/5 bg-[#84DCC6] h-full" id="right">
        <div className="px-5 py-0 flex flex-col gap-2">
          <p className="font-bold text-lg">General</p>
          <div className="flex flex-col gap-3 py-3 px-[10px] bg-white rounded-xl">
            <div className="flex items-center gap-[10px]">
              <FontAwesomeIcon
                className="w-6 h-6  text-[#888]"
                icon={faScrewdriverWrench}
              />
              <div>
                <span className="text-sm font-bold">Utilities</span>
                <p className="text-xs">Renter is responsible</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <FontAwesomeIcon
                className="w-6 h-6  text-[#888]"
                icon={faShieldDog}
              />
              <div>
                <span className="text-sm font-bold">Pet Policy</span>
                <p className="text-xs">Pets Allowed</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <FontAwesomeIcon
                className="w-6 h-6  text-[#888]"
                icon={faBuilding}
              />
              <div>
                <span className="text-sm font-bold">Property Fees</span>
                <p className="text-xs">
                  Must have 3x the rent in totla household income
                </p>
              </div>
            </div>
          </div>
          <p className="font-bold text-lg">Sizes</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 rounded-lg p-2 bg-white">
              <FontAwesomeIcon icon={faExpand} />
              <span className="text-sm">80sqm</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg p-2 bg-white">
              <FontAwesomeIcon icon={faBed} />
              <span className="text-sm">2 bed</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg p-2 bg-white">
              <FontAwesomeIcon icon={faBath} />
              <span className="text-sm">1 bedroom</span>
            </div>
          </div>
          <p className="font-bold text-lg">Nearby Places</p>
          <div className="flex justify-between gap-5 py-3  px-[10px] bg-white rounded-xl">
            <div className="flex items-center gap-[10px]">
              <FontAwesomeIcon
                className="w-6 h-6  text-[#888]"
                icon={faSchool}
              />
              <div>
                <span className="text-sm font-bold">School</span>
                <p className="text-xs">250m away</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <FontAwesomeIcon className="w-6 h-6  text-[#888]" icon={faBus} />
              <div>
                <span className="text-sm font-bold">Bus Stop</span>
                <p className="text-xs">100m away</p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <FontAwesomeIcon
                className="w-6 h-6  text-[#888]"
                icon={faUtensils}
              />
              <div>
                <span className="text-sm font-bold">Restourant</span>
                <p className="text-xs">200m away</p>
              </div>
            </div>
          </div>
          <p className="font-bold text-lg">Location</p>
          <div className="w-full h-[180px]">
            <Map items={[singlePostData]} />
          </div>
          <div className="flex justify-between">
            <button className=" p-3 flex items-center gap-1 border border-solid border-[#84DCC6] rounded cursor-pointer">
              <FontAwesomeIcon className="w-4 h-4" icon={faComment} /> Send a
              message
            </button>
            <button className=" p-3 flex items-center gap-1 border border-solid border-[#84DCC6] rounded cursor-pointer">
              <FontAwesomeIcon className="w-4 h-4" icon={faBookmark} />
              Send a message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
