import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
    const { postList} = useContext(PostListData);
    const { addInitialPosts} = useContext(PostListData);

    const[fetching, setFetching] = useState(false);
    useEffect(() => {
        setFetching(true);
    fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      addInitialPosts(data.posts);
      setFetching(false);
    });
    }, [])

    return (
        <>
            {postList.length === 0 && <WelcomeMessage/>}
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
};
export default PostList;