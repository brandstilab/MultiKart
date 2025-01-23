import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Rating } from "react-simple-star-rating";
import { Table } from "reactstrap";
import request from "../../../Utils/AxiosUtils";
import { ReviewAPI } from "../../../Utils/AxiosUtils/API";
import Avatar from "../../CommonComponent/Avatar";
import NoDataFound from "../../CommonComponent/NoDataFound";
import DashboardWrapper from "../DashboardWrapper";

const ReviewCard = () => {
  const router = useRouter();
  const { data: reviewData } = useQuery([ReviewAPI], () => request({ url: ReviewAPI, params: { paginate: 5 } }, router), {
    refetchOnWindowFocus: false,
    select: (data) => data?.data?.data,
  });
  return (
    <DashboardWrapper
      classes={{
        title: "LatestReviews",
        colProps: { sm: 12 },
        headerRight: (
          <Link href={`/review`} className="txt-primary">
            View All
          </Link>
        ),
      }}
    >
      <div className="review-box table-responsive">
        {reviewData?.length > 0 ? (
          <Table>
            <tbody>
              {reviewData?.map((elem, i) => (
                <tr key={i}>
                  <td>
                    <div className="review-content">
                      <div className="img-box">
                        <Avatar data={elem?.product?.product_thumbnail} name={elem?.product?.name} placeHolder={"/assets/images/placeholder.png"} />
                      </div>
                      <span>{elem?.product?.name}</span>
                    </div>
                  </td>
                  <td>
                    <span>{elem?.consumer?.name}</span>
                  </td>
                  <td>
                    <Rating initialValue={elem?.rating} readonly={true} size={17} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <NoDataFound title={"NoDataFound"} noImage={true} />
        )}
      </div>
    </DashboardWrapper>
  );
};

export default ReviewCard;
