import { RiArticleLine, RiContactsLine, RiCoupon2Line, RiListOrdered, RiSettings3Line, RiStore3Line, RiWindowLine } from "react-icons/ri";

export const QuickLinksData = [
    {
      title: 'AddUser',
      path: '/user/create',
      icon: <RiContactsLine />,
      permission: ["user.create"]
    },
    {
      title: 'AddProduct',
      path: '/product/create',
      icon: <RiStore3Line />,
      permission: ["product.create"]
    },
    {
      title: 'AddCoupon',
      path: '/coupon/create',
      icon: <RiCoupon2Line />,
      permission: ["coupon.create"]
    },
    {
      title: 'AddBlog',
      path: '/blog/create',
      icon: <RiArticleLine />,
      permission: ["blog.create"]
    },
    {
      title: 'AllOrders',
      path: '/order',
      icon: <RiListOrdered />,
      permission: ["order.index"]
    },
    {
      title: 'SiteSettings',
      path: '/setting',
      icon: <RiSettings3Line />,
      permission: ["setting.index"]
    },
    {
      title: 'ThemeSettings',
      path: '/theme_option',
      icon: <RiWindowLine />,
      permission: ["theme_option.index"]
    }
  ]