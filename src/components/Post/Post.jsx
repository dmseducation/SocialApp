import React from "react";
import "./post.css";
import { MoreVert, Favorite } from "@mui/icons-material";
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="https://pics.craiyon.com/2023-10-22/99d3246491954754a58b767b247a94d3.webp"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Shree Krishna</span>
            <span className="postDate">1 hour ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">This is a post</span>
          <img
            src="https://www.imagella.com/cdn/shop/products/16f850126a03dbd540c6531e87d0ed64.jpg?v=1707576033"
            alt=""
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite className="likeIcon" />
            <Favorite className="likeIcon" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomright">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
