import { FeedBackAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { RiThumbDownFill, RiThumbDownLine, RiThumbUpFill, RiThumbUpLine } from "react-icons/ri";

const LikeDisLike = ({ qna, refetch }) => {
  const [likeUnLike, setLikeUnLike] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [unLikeCount, setUnLikeCount] = useState(0);
  const isLogin = Cookies.get("uat");
  const { mutate, isLoading } = useCreate(FeedBackAPI, false, false, "No", (resDta) => {
    refetch();
  });
  useEffect(() => {
    setLikeUnLike(qna?.reaction);
    setLikeCount(qna?.total_likes);
    setUnLikeCount(qna?.total_dislikes);
  }, []);

  const feedBack = (value) => {
    if (isLogin) {
      if (value === "liked") {
        if (likeUnLike === "liked") {
          setLikeCount((prev) => prev - 1);
          setLikeUnLike("");
          // Put your logic here
        } else if (likeUnLike === "disliked") {
          setLikeCount((prev) => prev + 1);
          setUnLikeCount((prev) => prev - 1);
          setLikeUnLike("liked");
          // Put your logic here
        } else {
          setLikeCount((prev) => prev + 1);
          setLikeUnLike("liked");
          // Put your logic here
        }
      } else if (value === "disliked") {
        if (likeUnLike === "disliked") {
          setUnLikeCount((prev) => prev - 1);
          setLikeUnLike("");
          // Put your logic here
        } else if (likeUnLike === "liked") {
          setUnLikeCount((prev) => prev + 1);
          setLikeCount((prev) => prev - 1);
          setLikeUnLike("disliked");
          // Put your logic here
        } else {
          setUnLikeCount((prev) => prev + 1);
          setLikeUnLike("disliked");
          // Put your logic here
        }
      }
    }
  };
  return (
    <>
      {qna?.answer ? (
        <li>
          <a onClick={() => !isLoading && feedBack("liked")}>
            <span>
              {isLogin ? likeUnLike == "liked" ? <RiThumbUpFill className="theme-color" /> : <RiThumbUpLine /> : <RiThumbUpFill />} {likeCount}
            </span>
          </a>
        </li>
      ) : null}
      {qna?.answer ? (
        <li>
          <a onClick={() => !isLoading && feedBack("disliked")}>
            <span>
              {isLogin ? likeUnLike == "disliked" ? <RiThumbDownFill className="theme-color" /> : <RiThumbDownLine /> : <RiThumbDownFill />} {unLikeCount}
            </span>
          </a>
        </li>
      ) : null}
    </>
  );
};

export default LikeDisLike;
