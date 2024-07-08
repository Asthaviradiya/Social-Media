import { createContext, useReducer } from "react"

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_LIST);
    const addPost = () => {

    }
    const deletePost = () => {

    }
/* // postList : postList .... it is a postlist that we declaired in useReducer, not postlist arr */
    return <PostList.Provider value={{postList,addPost,deletePost} }> 
        
        {children}
    </PostList.Provider>
}

const DEFAULT_LIST = [{
    id:'2',
    title:'pass-out',
    body:'Hi frds, i passout ',
    rections:15,
    userId:'user-12',
    tags:['pass', 'graduating', 'unbelivable']
},
{
    id:'1',
    title:'going to mumbai',
    body:'Hi frds, im going to mumbai for my vacation',
    rections:2,
    userId:'user-9',
    tags:['vacation', 'mumbai']
}]
export default PostListProvider;
