import bag from "../bag.json";
import beauty from "../beauty.json";
import bicycle from "../bicycle.json";
import books from "../books.json";
import christmas from "../christmas.json";
import digital_download from "../digital_download.json";
import electronics_one from "../electronics_one.json";
import electronics_three from "../electronics_three.json";
import electronics_two from "../electronics_two.json";
import fashion_five from "../fashion_five.json";
import fashion_four from "../fashion_four.json";
import fashion_one from "../fashion_one.json";
import fashion_seven from "../fashion_seven.json";
import fashion_six from "../fashion_six.json";
import fashion_three from "../fashion_three.json";
import fashion_two from "../fashion_two.json";
import flower from "../flower.json";
import full_page from "../full_page.json";
import furniture_dark from "../furniture_dark.json";
import furniture_one from "../furniture_one.json";
import furniture_two from "../furniture_two.json";
import game from "../game.json";
import goggles from "../goggles.json";
import gradient from "../gradient.json";
import gym from "../gym.json";
import jewellery_one from "../jewellery_one.json";
import jewellery_three from "../jewellery_three.json";
import jewellery_two from "../jewellery_two.json";
import kids from "../kids.json";
import surfboard from "../surfboard.json";
import marijuana from "../marijuana.json";
import marketplace_four from "../marketplace_four.json";
import marketplace_one from "../marketplace_one.json";
import marketplace_three from "../marketplace_three.json";
import marketplace_two from "../marketplace_two.json";
import nursery from "../nursery.json";
import parallax from "../parallax.json";
import perfume from "../perfume.json";
import pets from "../pets.json";
import shoes from "../shoes.json";
import tools from "../tools.json";
import vegetables_four from "../vegetables_four.json";
import vegetables_one from "../vegetables_one.json";
import vegetables_three from "../vegetables_three.json";
import vegetables_two from "../vegetables_two.json";
import video from "../video.json";
import video_slider from "../video_slider.json";
import watch from "../watch.json";
import yoga from "../yoga.json";
import medical from "../medical.json";

import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const slug = params.slug;

  const homeObj = {
    bag,
    beauty,
    bicycle,
    books,
    christmas,
    digital_download,
    electronics_one,
    electronics_two,
    electronics_three,
    fashion_one,
    fashion_two,
    fashion_three,
    fashion_four,
    fashion_five,
    fashion_six,
    fashion_seven,
    flower,
    full_page,
    furniture_one,
    furniture_two,
    furniture_dark,
    game,
    jewellery_one,
    jewellery_two,
    jewellery_three,
    marketplace_one,
    marketplace_two,
    marketplace_three,
    marketplace_four,
    vegetables_one,
    vegetables_two,
    vegetables_three,
    vegetables_four,
    perfume,
    parallax,
    medical,
    pets,
    yoga,
    watch,
    nursery,
    video,
    kids,
    marijuana,
    gym,
    tools,
    shoes,
    goggles,
    video_slider,
    gradient,
    surfboard,
  };

  return NextResponse.json(homeObj[slug]);
}
