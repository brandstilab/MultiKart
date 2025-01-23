import { Href } from "@/Utils/Constants";

export const LanguageData = [
  {
    language: "English",
    data: "en",
  },
  {
    language: "french",
    data: "fr",
  },
];

export const CurrencyData = ["euro", "rupees", "pound", "dollar"];

export const SideMenuData = [
  {
    title: "clothing",
    href: Href,
    megaMenu: true,
    content: [
      {
        heading: "Women's Fashion",
        children: [
          { title: "dresses", href: Href },
          { title: "skirts", href: Href },
          { title: "Western Wear", href: Href },
          { title: "ethic Wear", href: Href },
          { title: "sport Wear", href: Href },
        ],
      },
      {
        heading: "Men's Fashion",
        children: [
          { title: "Western Wear", href: Href },
          { title: "ethic Wear", href: Href },
          { title: "sport Wear", href: Href },
        ],
      },
      {
        heading: "Accessories",
        children: [
          { title: "Fashion Jewellery", href: Href },
          { title: "Caps and hats", href: Href },
          { title: "Precious Jewellery", href: Href },
          { title: "Necklaces", href: Href },
          { title: "Earings", href: Href },
          { title: "Wrist Wear", href: Href },
          { title: "Ties", href: Href },
          { title: "Cufflinks", href: Href },
          { title: "Pockets Squares", href: Href },
        ],
      },
      {
        image: true,
      },
    ],
  },
  {
    title: "bags",
    href: Href,
    children: [
      { title: "shopper bags", href: Href },
      { title: "laptop bags", href: Href },
      { title: "clutches", href: Href },
      {
        title: "purses",
        href: Href,
        children: [
          { title: "purses", href: Href },
          { title: "wallets", href: Href },
          { title: "leathers", href: Href },
          { title: "satchels", href: Href },
        ],
      },
    ],
  },
  {
    title: "footwear",
    href: Href,
    children: [
      { title: "sport shoes", href: Href },
      { title: "formal shoes", href: Href },
      { title: "casual shoes", href: Href },
    ],
  },
  {
    title: "watches",
    href: Href,
  },
  {
    title: "Accessories",
    href: Href,
    children: [
      { title: "fashion jewellery", href: Href },
      { title: "caps and hats", href: Href },
      { title: "precious jewellery", href: Href },
      {
        title: "more..",
        href: Href,
        children: [
          { title: "necklaces", href: Href },
          { title: "earrings", href: Href },
          { title: "wrist wear", href: Href },
          {
            title: "accessories",
            href: Href,
            children: [
              { title: "ties", href: Href },
              { title: "cufflinks", href: Href },
              { title: "pockets squares", href: Href },
              { title: "helmets", href: Href },
              { title: "scarves", href: Href },
              {
                title: "more...",
                href: Href,
                children: [
                  { title: "accessory gift sets", href: Href },
                  { title: "travel accessories", href: Href },
                  { title: "phone cases", href: Href },
                ],
              },
            ],
          },
          { title: "belts &amp; more", href: Href },
          { title: "wearable", href: Href },
        ],
      },
    ],
  },
  {
    title: "house of design",
    href: Href,
  },
  {
    title: "beauty & personal care",
    href: Href,
    children: [
      { title: "makeup", href: Href },
      { title: "skincare", href: Href },
      { title: "premium beauty", href: Href },
      {
        title: "more",
        href: Href,
        children: [
          { title: "fragrances", href: Href },
          { title: "luxury beauty", href: Href },
          { title: "hair care", href: Href },
          { title: "tools & brushes", href: Href },
        ],
      },
    ],
  },
  {
    title: "home & decor",
    href: Href,
  },
  {
    title: "kitchen",
    href: Href,
  },
];
