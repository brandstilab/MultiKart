"use client";
import { useState } from "react";
import {QueryClientProvider,Hydrate,QueryClient} from "@tanstack/react-query";
import SettingProvider from "@/Helper/SettingContext/SettingProvider";
import AccountProvider from "@/Helper/AccountContext/AccountProvider";
import BadgeProvider from "@/Helper/BadgeContext/BadgeProvider";
import CategoryProvider from "@/Helper/CategoryContext/CategoryProvider";
import CartProvider from "@/Helper/CartContext/CartProvider";
import MenuProvider from "@/Helper/MenuContext/MenuProvider";

const TanstackWrapper = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={children.dehydratedState}>
        <SettingProvider>
          <AccountProvider>
            <BadgeProvider>
              <CategoryProvider>
                <CartProvider>
                  <MenuProvider>{children}</MenuProvider>
                </CartProvider>
              </CategoryProvider>
            </BadgeProvider>
          </AccountProvider>
        </SettingProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default TanstackWrapper;
