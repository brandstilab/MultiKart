"use client";
import AccountProvider from "@/Context/AccountContext/AccountProvider";
import BlogProvider from "@/Context/BlogContext/BlogProvider";
import BlogIdsProvider from "@/Context/BlogIdsContext/BlogIdsProvider";
import BrandProvider from "@/Context/BrandContext/BrandProvider";
import BrandIdsProvider from "@/Context/BrandIdsContext/BrandIdsProvider";
import CartProvider from "@/Context/CartContext/CartProvider";
import CategoryProvider from "@/Context/CategoryContext/CategoryProvider";
import CompareProvider from "@/Context/CompareContext/CompareProvider";
import CurrencyProvider from "@/Context/CurrencyContext/CurrencyProvider";
import ProductProvider from "@/Context/ProductContext/ProductProvider";
import ProductIdsProvider from "@/Context/ProductIdsContext/ProductIdsProvider";
import SettingProvider from "@/Context/SettingContext/SettingProvider";
import ThemeOptionProvider from "@/Context/ThemeOptionsContext/ThemeOptionProvider";
import WishlistProvider from "@/Context/WishlistContext/WishlistProvider";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import SubLayout from "./SubLayout";

const MainLayout = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={children.dehydratedState}>
          <SettingProvider>
            <CompareProvider>
              <CategoryProvider>
                <BlogProvider>
                  <ThemeOptionProvider>
                    <BrandProvider>
                      <CurrencyProvider>
                        <ProductIdsProvider>
                          <AccountProvider>
                            <CartProvider>
                              <WishlistProvider>
                                <BrandIdsProvider>
                                  <BlogIdsProvider>
                                    <ProductProvider>
                                      <SubLayout children={children} />
                                    </ProductProvider>
                                  </BlogIdsProvider>
                                </BrandIdsProvider>
                              </WishlistProvider>
                            </CartProvider>
                          </AccountProvider>
                        </ProductIdsProvider>
                      </CurrencyProvider>
                    </BrandProvider>
                  </ThemeOptionProvider>
                </BlogProvider>
              </CategoryProvider>
            </CompareProvider>
          </SettingProvider>
        </Hydrate>
      </QueryClientProvider>
      <ToastContainer autoClose={2000} theme="colored" />
    </>
  );
};

export default MainLayout;
