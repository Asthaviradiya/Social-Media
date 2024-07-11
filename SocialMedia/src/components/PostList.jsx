import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
    const { postList} = useContext(PostListData);
    const { addInitialPosts} = useContext(PostListData);

    const[fetching, setFetching] = useState(false);
    useEffect(() => {
        setFetching(true);

        const controller = new AbortController();
        const signal = controller.signal;
    fetch("https://dummyjson.com/posts", {signal})
    .then((res) => res.json())
    .then((data) => {
      addInitialPosts(addInitialPosts(data.posts));
      setFetching(false);
    });
    return () => {
        controller.abort();
    }
    }, [])

    return (
        <>
        {fetching && <LoadingSpinner/>}
            {!fetching && postList.length === 0 && <WelcomeMessage/>}
            {!fetching && postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
};
export default PostList;