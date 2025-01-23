// "use client";
// import WrapperComponent from "@/Components/Widgets/WrapperComponent";
// import Btn from "@/Elements/Buttons/Btn";
// import Loader from "@/Layout/Loader";
// import request from "@/Utils/AxiosUtils";
// import { ProductAPI } from "@/Utils/AxiosUtils/API";
// import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
// import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
// import { useQuery } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { RiSearchLine } from "react-icons/ri";
// import { Container, Input, InputGroup } from "reactstrap";
// import SearchedData from "./SearchedData";

// const SearchModule = () => {
//   const { t } = useTranslation("common");
//   const [search] = useCustomSearchParams(["search"]);
//   const [searchState, setSearchState] = useState("");
//   const router = useRouter();
//   const { data, refetch, isLoading, fetchStatus } = useQuery([ProductAPI, "search"], () => request({ url: ProductAPI, params: { search: search?.search ?? searchState, paginate: 12, status: 1 } }), {
//     enabled: false,
//     refetchOnWindowFocus: false,
//     select: (data) => data.data.data,
//   });
//   useEffect(() => {
//     setTimeout(() => {
//       setSearchState(search?.search);
//     }, 500);
//     // setSearchState(search?.search);
//   }, [search]);

//   useEffect(() => {
//     searchState && refetch();
//   }, [searchState]);

//   const onHandleSearch = (e) => {
//     router.push(`/search?search=${e.target.value}`);
//     setSearchState(e.target.value)
//   };
//   // if (isLoading) return <Loader />;
//   return (
//     <>
//       <Breadcrumbs title={"Search"} subNavigation={[{ name: "Search" }]} />
//       <section className="authentication-page">
//         <Container>
//           <div className="row">
//             <WrapperComponent classes={{ sectionClass: "search-block", fluidClass: "container", col: "offset-lg-3" }} colProps={{ lg: "6" }}>
//               <form className="form-header form-box">
//                 <InputGroup>
//                   <Input type="text" className="form-control" placeholder={t("SearchProducts") + "....."} value={searchState} onChange={(e) => onHandleSearch(e)} />
//                   <Btn className="btn-solid" onClick={onHandleSearch}>
//                     <RiSearchLine />
//                     {"  "} {t("Search")}
//                   </Btn>
//                 </InputGroup>
//               </form>
//             </WrapperComponent>
//           </div>
//         </Container>
//       </section>

//       <SearchedData data={data} fetchStatus={fetchStatus} />
//     </>
//   );
// };

// export default SearchModule;

"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Btn from "@/Elements/Buttons/Btn";
import request from "@/Utils/AxiosUtils";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import useDebounce from "@/Utils/Hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiSearchLine } from "react-icons/ri";
import { Container, Input, InputGroup } from "reactstrap";
import SearchedData from "./SearchedData";
const SearchModule = () => {
  const { t } = useTranslation("common");
  const [search] = useCustomSearchParams(["search"]);
  const [searchState, setSearchState] = useState("");
  const debouncedSearch = useDebounce(searchState, 1000); // Add debounce for search input
  const router = useRouter();

  const { data, refetch, isLoading, fetchStatus, isError } = useQuery(
    [ProductAPI, "search"],
    () =>
      request({
        url: ProductAPI,
        params: { search: debouncedSearch, paginate: 12, status: 1 },
      }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      select: (data) => data.data.data,
      onError: (error) => {
        console.error("Error fetching search results", error); // Error handling
      },
    }
  );

  // Update search state and trigger refetch when query param changes
  useEffect(() => {
    if (search?.search && search?.search !== searchState) {
      setSearchState(search?.search);
      // refetch();
    }
  }, [search]);

  // Trigger refetch when debounced search state changes
  useEffect(() => {
    refetch();
  }, [debouncedSearch]);

  // Handle search input change and push to router
  const onHandleSearch = (e) => {
    setSearchState(e.target.value); // Update local state
    router.push(`/search?search=${e.target?.value}`); // Push search param to URL
  };

  // Show loader while fetching data
  // if (isLoading) return <Loader />;

  return (
    <>
      <Breadcrumbs title={"Search"} subNavigation={[{ name: "Search" }]} />
      <section className="authentication-page">
        <Container>
          <div className="row">
            <WrapperComponent classes={{ sectionClass: "search-block", fluidClass: "container", col: "offset-lg-3" }} colProps={{ lg: "6" }}>
              <form className="form-header form-box" onSubmit={(e) => e.preventDefault()}>
                {" "}
                {/* Prevent form submit */}
                <InputGroup>
                  <Input type="text" className="form-control" placeholder={t("SearchProducts") + "....."} value={searchState} onChange={(e) => onHandleSearch(e)} />
                  <Btn
                    className="btn-solid"
                    onClick={(e) => {
                      e.preventDefault();
                      onHandleSearch(e);
                    }}
                  >
                    {" "}
                    {/* Prevent form submit */}
                    <RiSearchLine />
                    {"  "} {t("Search")}
                  </Btn>
                </InputGroup>
              </form>
            </WrapperComponent>
          </div>
        </Container>
      </section>

      {/* Pass data and fetchStatus to the SearchedData component */}
      <SearchedData data={data} fetchStatus={fetchStatus} isError={isError} />
    </>
  );
};

export default SearchModule;
