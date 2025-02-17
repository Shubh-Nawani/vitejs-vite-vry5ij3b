// components/PostCard.jsx
import React from "react";
import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img width= "10%" src={post.profileImage} alt={post.username} className="profile-pic" />
        <h3>{post.username}</h3>
      </div>
      <p>{post.content}</p>
      <LikeButton />
      <br />
      <br />
    </div>
  );
};

export default PostCard;
