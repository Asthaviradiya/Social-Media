import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
    const { postList} = useContext(PostListData);
    // const postList = useLoaderData();
    return (
        <>
            {postList.length === 0 && <WelcomeMessage/>}
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
};
export const postLoader = () => {
    return fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => {
                return data.posts
            });
}
export default PostList;