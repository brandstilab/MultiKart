"use client";
import BagHomePageForm from "@/Components/HomePages/BagHomePage";
import BeautyHomePageForm from "@/Components/HomePages/BeautyHomePage";
import BicycleHomePageForm from "@/Components/HomePages/BicycleHomePage";
import BooksHomePageForm from "@/Components/HomePages/BooksHomePage";
import ChristmasHomePageForm from "@/Components/HomePages/ChristmasHomePage";
import DigitalDownloadForm from "@/Components/HomePages/DigitalDownload";
import ElectronicsOneForm from "@/Components/HomePages/ElectronicsOne";
import ElectronicsThreeForm from "@/Components/HomePages/ElectronicsThree";
import ElectronicsTwoForm from "@/Components/HomePages/ElectronicsTwo";
import FashionFiveForm from "@/Components/HomePages/FashionFive";
import FashionFourForm from "@/Components/HomePages/FashionFour";
import FashionOneForm from "@/Components/HomePages/FashionOne";
import FashionSevenForm from "@/Components/HomePages/FashionSeven";
import FashionSixForm from "@/Components/HomePages/FashionSix";
import FashionThreeForm from "@/Components/HomePages/FashionThree";
import FashionTwoForm from "@/Components/HomePages/FashionTwo";
import FlowerHomePageForm from "@/Components/HomePages/FlowerHomePage";
import FullHomePageForm from "@/Components/HomePages/FullHomePage";
import FurnitureDarkForm from "@/Components/HomePages/FurnitureDark";
import FurnitureOneForm from "@/Components/HomePages/FurnitureOne";
import FurnitureTwoForm from "@/Components/HomePages/FurnitureTwo";
import GameHomePageForm from "@/Components/HomePages/GameHomePage";
import GogglesHomePageForm from "@/Components/HomePages/GogglesHomePage";
import GradientHomePageForm from "@/Components/HomePages/GradientHomePage";
import GymHomePageForm from "@/Components/HomePages/GymHomePage";
import JwelleryOneForm from "@/Components/HomePages/JwelleryOne";
import JwelleryThreeForm from "@/Components/HomePages/JwelleryThree";
import JwelleryTwoForm from "@/Components/HomePages/JwelleryTwo";
import KidsHomePageForm from "@/Components/HomePages/KidsHomePage";
import MarijuanaHomePageForm from "@/Components/HomePages/MarijuanaHomePage";
import MarketplaceFourForm from "@/Components/HomePages/MarketplaceFour";
import MarketplaceOneForm from "@/Components/HomePages/MarketplaceOne";
import MarketplaceThreeForm from "@/Components/HomePages/MarketplaceThree";
import MarketplaceTwoForm from "@/Components/HomePages/MarketplaceTwo";
import MedicalHomePageForm from "@/Components/HomePages/MedicalHomePage";
import NurseryHomePageForm from "@/Components/HomePages/NurseryHomePage";
import ParallaxHomePageForm from "@/Components/HomePages/ParallaxHomePage";
import PerfumeHomePageForm from "@/Components/HomePages/PerfumeHomepage";
import PetsHomePageForm from "@/Components/HomePages/PetsHomePage";
import ShoesHomePageForm from "@/Components/HomePages/ShoesHomePage";
import SurfingHomePageForm from "@/Components/HomePages/SurfingHomePage";
import ToolsHomePageForm from "@/Components/HomePages/ToolsHomePage";
import VegetableFourForm from "@/Components/HomePages/VegetableFour";
import VegetableOneForm from "@/Components/HomePages/VegetableOne";
import VegetableThreeForm from "@/Components/HomePages/VegetableThree";
import VegetableTwoForm from "@/Components/HomePages/VegetableTwo";
import VideoHomePageForm from "@/Components/HomePages/VideoHomePage";
import VideoSliderForm from "@/Components/HomePages/VideoSlider";
import WatchHomePageForm from "@/Components/HomePages/WatchHomepage";
import YogaHomePageForm from "@/Components/HomePages/YogaHomePage";
import { placeHolderImage } from "@/Data/CommonPath";
import request from "@/Utils/AxiosUtils";
import { BrandAPI, Category, attribute, blog } from "@/Utils/AxiosUtils/API";
import { titleCreate } from "@/Utils/CustomFunctions/TitleCreate";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const HomePages = ({ params }) => {
  const [title, setTitle] = useState("");
  const { data: blogData } = useQuery([blog], () => request({ url: blog }), {
    refetchOnWindowFocus: false,
    select: (res) =>
      res?.data?.data.map((elem) => {
        return { id: elem.id, name: elem.title, slug: elem?.slug };
      }),
  });

  const { data: brandData, isLoading: brandLoader } = useQuery([BrandAPI], () => request({ url: BrandAPI }), {
    refetchOnWindowFocus: false,
    select: (res) =>
      res?.data?.data.map((elem) => {
        return { id: elem.id, name: elem.name };
      }),
  });

  const { data: attributeData } = useQuery([attribute], () => request({ url: attribute }), {
    refetchOnWindowFocus: false,
    select: (res) =>
      res?.data?.data.map((elem) => {
        return { id: elem.id, name: elem.name };
      }),
  });

  const {
    data: categoryData,
    isLoading: categoryLoader,
    refetch: categoryRefetch,
  } = useQuery([Category], () => request({ url: Category, params: { type: "product" } }), {
    enabled: true,
    refetchOnWindowFocus: false,
    select: (res) =>
      res?.data?.data?.map((elem) => {
        return { subcategories: elem.subcategories, id: elem.id, name: elem.name, image: elem?.category_icon?.original_url || "/assets/images/placeholder.png", slug: elem?.slug };
      }),
  });

  const apiData = {
    categoryData: categoryData,
    categoryLoader: categoryLoader,
    categoryRefetch: categoryRefetch,
    brandData: brandData,
    brandLoader: brandLoader,
    blogData: blogData,
    attributeData: attributeData,
  };

  useEffect(() => {
    titleCreate(params.slug, setTitle);
  }, [params]);

  const homePageOptions = {
    fashion_one: <FashionOneForm title={title} apiData={apiData} />,
    fashion_two: <FashionTwoForm title={title} apiData={apiData} />,
    fashion_three: <FashionThreeForm title={title} apiData={apiData} />,
    fashion_four: <FashionFourForm title={title} apiData={apiData} />,
    fashion_five: <FashionFiveForm title={title} apiData={apiData} />,
    fashion_six: <FashionSixForm title={title} apiData={apiData} />,
    fashion_seven: <FashionSevenForm title={title} apiData={apiData} />,
    electronics_one: <ElectronicsOneForm title={title} apiData={apiData} />,
    electronics_two: <ElectronicsTwoForm title={title} apiData={apiData} />,
    electronics_three: <ElectronicsThreeForm title={title} apiData={apiData} />,
    furniture_one: <FurnitureOneForm title={title} apiData={apiData} />,
    furniture_two: <FurnitureTwoForm title={title} apiData={apiData} />,
    furniture_dark: <FurnitureDarkForm title={title} apiData={apiData} />,
    jewellery_one: <JwelleryOneForm title={title} apiData={apiData} />,
    jewellery_two: <JwelleryTwoForm title={title} apiData={apiData} />,
    jewellery_three: <JwelleryThreeForm title={title} apiData={apiData} />,
    marketplace_one: <MarketplaceOneForm title={title} apiData={apiData} />,
    marketplace_two: <MarketplaceTwoForm title={title} apiData={apiData} />,
    marketplace_three: <MarketplaceThreeForm title={title} apiData={apiData} />,
    marketplace_four: <MarketplaceFourForm title={title} apiData={apiData} />,
    vegetables_one: <VegetableOneForm title={title} apiData={apiData} />,
    vegetables_two: <VegetableTwoForm title={title} apiData={apiData} />,
    vegetables_three: <VegetableThreeForm title={title} apiData={apiData} />,
    vegetables_four: <VegetableFourForm title={title} apiData={apiData} />,
    perfume: <PerfumeHomePageForm title={title} apiData={apiData} />,
    full_page: <FullHomePageForm title={title} apiData={apiData} />,
    parallax: <ParallaxHomePageForm title={title} apiData={apiData} />,
    medical: <MedicalHomePageForm title={title} apiData={apiData} />,
    pets: <PetsHomePageForm title={title} apiData={apiData} />,
    bag: <BagHomePageForm title={title} apiData={apiData} />,
    yoga: <YogaHomePageForm title={title} apiData={apiData} />,
    christmas: <ChristmasHomePageForm title={title} apiData={apiData} />,
    bicycle: <BicycleHomePageForm title={title} apiData={apiData} />,
    watch: <WatchHomePageForm title={title} apiData={apiData} />,
    nursery: <NurseryHomePageForm title={title} apiData={apiData} />,
    video: <VideoHomePageForm title={title} apiData={apiData} />,
    kids: <KidsHomePageForm title={title} apiData={apiData} />,
    books: <BooksHomePageForm title={title} apiData={apiData} />,
    game: <GameHomePageForm title={title} apiData={apiData} />,
    beauty: <BeautyHomePageForm title={title} apiData={apiData} />,
    marijuana: <MarijuanaHomePageForm title={title} apiData={apiData} />,
    gym: <GymHomePageForm title={title} apiData={apiData} />,
    tools: <ToolsHomePageForm title={title} apiData={apiData} />,
    shoes: <ShoesHomePageForm title={title} apiData={apiData} />,
    goggles: <GogglesHomePageForm title={title} apiData={apiData} />,
    flower: <FlowerHomePageForm title={title} apiData={apiData} />,
    video_slider: <VideoSliderForm title={title} apiData={apiData} />,
    gradient: <GradientHomePageForm title={title} apiData={apiData} />,
    left_sidebar: <SurfingHomePageForm title={title} apiData={apiData} />,
    digital_download: <DigitalDownloadForm title={title} apiData={apiData} />,
  };

  return <>{homePageOptions[params.slug]}</>;
};

export default HomePages;
