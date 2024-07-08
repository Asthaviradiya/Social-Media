import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
const PostList = () => {
    const {postLists} = useContext(PostListData);
    return(
         <>
    {postLists.map((post) => (<Post/>))}
    </>
    );
};
export default PostList;