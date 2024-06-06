import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

import { FaComment, FaShare} from "react-icons/fa6";

const Post = ({data,bgColor,color}) => {
  return (
    <>
      <div className="post_container">
        <div className="person">
          <div className="author">
            <div className="img">
              <img
                src={data.pImg}
                alt=""
              />
            </div>
            <div className="text">
              <h3>{data.username}</h3>
              <p> {data.title}</p>
            </div>
          </div>
          <div className="dot"><HiDotsVertical/></div>
        </div>
        <p>
          {data.description}
        </p>
        <div className="post_img">
          <img
            src={data.mImg}
            alt=""
          />
        </div>
        <div className="like_comment">
          <div className="likes"><FaHeart className="items"/>{data.like}</div>
          <div className="comments"><FaComment className="items"/>{data.comment}</div>
          <div className="share"><FaShare className="items" />{data.share}</div>
          

        </div>
      </div>
    </>
  );
};

export default Post;
