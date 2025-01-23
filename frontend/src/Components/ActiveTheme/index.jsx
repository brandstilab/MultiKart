"use client";
import request from "@/Utils/AxiosUtils";
import { ThemeAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Bag from "../Themes/Bag";
import BeautyHomePage from "../Themes/Beauty";
import BicycleHomePage from "../Themes/Bicycle";
import BooksHomePage from "../Themes/Books";
import Christmas from "../Themes/Christmas";
import DigitalDownload from "../Themes/DigitalDownload";
import ElectronicsOne from "../Themes/Electronics/ElectronicsOne";
import ElectronicsThree from "../Themes/Electronics/ElectronicsThree";
import ElectronicsTwo from "../Themes/Electronics/ElectronicsTwo";
import Fashion1 from "../Themes/Fashion/Fashion1";
import Fashion2 from "../Themes/Fashion/Fashion2";
import Fashion3 from "../Themes/Fashion/Fashion3";
import Fashion4 from "../Themes/Fashion/Fashion4";
import Fashion5 from "../Themes/Fashion/Fashion5";
import Fashion6 from "../Themes/Fashion/Fashion6";
import Fashion7 from "../Themes/Fashion/Fashion7";
import FlowerHomePage from "../Themes/Flower";
import FullPage from "../Themes/FullPage";
import Furniture1 from "../Themes/Furniture/Furniture1";
import Furniture2 from "../Themes/Furniture/Furniture2";
import FurnitureDark from "../Themes/Furniture/FurnitureDark";
import Game from "../Themes/Game";
import GogglesHomePage from "../Themes/Goggles";
import Gradient from "../Themes/Gradient";
import GymHomePage from "../Themes/Gym";
import JewelleryThree from "../Themes/Jewellery/JewelleryThree";
import JewelleryTwo from "../Themes/Jewellery/JewelleryTwo";
import JewelleryOne from "../Themes/Jewellery/JwelleryOne";
import KidsHomePage from "../Themes/Kids";
import MarijuanaHomePage from "../Themes/Marijuana";
import MarketplaceFour from "../Themes/Marketplace/MarketplaceFour";
import MarketplaceOne from "../Themes/Marketplace/MarketplaceOne";
import MarketplaceThree from "../Themes/Marketplace/MarketplaceThree";
import MarketplaceTwo from "../Themes/Marketplace/MarketplaceTwo";
import Medical from "../Themes/Medical";
import NurseryHomePage from "../Themes/Nursery";
import Parallax from "../Themes/Parallax";
import Perfume from "../Themes/Perfume";
import PetsHomePage from "../Themes/Pets";
import ShoesHomePage from "../Themes/Shoes";
import SingleProduct from "../Themes/SingleProduct";
import Surfboard from "../Themes/SurfBoard";
import ToolsHomePage from "../Themes/Tools";
import VegetablesFour from "../Themes/Vegatables/VegetablesFour";
import VegetablesOne from "../Themes/Vegatables/VegetablesOne";
import VegetablesThree from "../Themes/Vegatables/VegetablesThree";
import VegetablesTwo from "../Themes/Vegatables/VegetablesTwo";
import VideoHomePage from "../Themes/Video";
import VideoSlider from "../Themes/VideoSlider";
import Watch from "../Themes/Watch";
import YogaHomePage from "../Themes/Yoga";
import { useContext } from "react";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";

const ActiveTheme = () => {
  const { data, isLoading } = useQuery([ThemeAPI], () => request({ url: ThemeAPI }), { enabled: true, refetchOnWindowFocus: false, select: (res) => res?.data.data });
  const search = useSearchParams();
  const themeBySlug = search.get("theme");
  const activeTheme = data?.find((elem) => elem.status === 1);
  const { isLoading: themeLoading } = useContext(ThemeOptionContext);

  const checkActive = {
    fashion_one: <Fashion1 />,
    fashion_two: <Fashion2 />,
    fashion_three: <Fashion3 />,
    fashion_four: <Fashion4 />,
    fashion_five: <Fashion5 />,
    fashion_six: <Fashion6 />,
    fashion_seven: <Fashion7 />,
    furniture_one: <Furniture1 />,
    furniture_two: <Furniture2 />,
    furniture_dark: <FurnitureDark />,
    electronics_one: <ElectronicsOne />,
    electronics_two: <ElectronicsTwo />,
    electronics_three: <ElectronicsThree />,
    vegetables_one: <VegetablesOne />,
    vegetables_two: <VegetablesTwo />,
    vegetables_three: <VegetablesThree />,
    vegetables_four: <VegetablesFour />,
    marketplace_one: <MarketplaceOne />,
    marketplace_two: <MarketplaceTwo />,
    marketplace_three: <MarketplaceThree />,
    marketplace_four: <MarketplaceFour />,
    jewellery_one: <JewelleryOne />,
    jewellery_two: <JewelleryTwo />,
    jewellery_three: <JewelleryThree />,
    parallax: <Parallax />,
    game: <Game />,
    gym: <GymHomePage />,
    flower: <FlowerHomePage />,
    gradient: <Gradient />,
    bicycle: <BicycleHomePage />,
    goggles: <GogglesHomePage />,
    nursery: <NurseryHomePage />,
    christmas: <Christmas />,
    kids: <KidsHomePage />,
    yoga: <YogaHomePage />,
    pets: <PetsHomePage />,
    full_page: <FullPage />,
    tools: <ToolsHomePage />,
    perfume: <Perfume />,
    video: <VideoHomePage />,
    marijuana: <MarijuanaHomePage />,
    bag: <Bag />,
    watch: <Watch />,
    shoes: <ShoesHomePage />,
    beauty: <BeautyHomePage />,
    video_slider: <VideoSlider />,
    surfboard: <Surfboard />,
    medical: <Medical />,
    books: <BooksHomePage />,
    single_product: <SingleProduct />,
    digital_download: <DigitalDownload />,
  };

  if (themeLoading) return <Loader />;
  return themeBySlug ? checkActive[themeBySlug] : checkActive[activeTheme?.slug];
};

export default ActiveTheme;
