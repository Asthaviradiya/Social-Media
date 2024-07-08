import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

  const{addPost} = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
      const userId = userIdElement.current.value;
      const postTitle = postTitleElement.current.value;
      const postBody = postBodyElement.current.value;
      const reactions = reactionsElement.current.value;
      const tags = tagsElement.current.value.split(/(\s+)/);
  }

    return <form className="createPost" onSubmit={handleSubmit}>
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">Enter Your UserId Here</label>
      <input ref={userIdElement} type="text" className="form-control" id="userId" placeholder="your userId..."></input>
    </div>
      <label htmlFor="title" className="form-label">Post Title</label>
      <input ref={postTitleElement} type="text" className="form-control" id="title" placeholder="How are you filling today..."></input>
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Content</label>
      <textarea ref={postBodyElement} type="text" className="form-control" id="body" placeholder="Tell us more about it...."></textarea>
    </div>
    <div className="mb-3">
      <label htmlFor="reaction" className="form-label">Number Of Reactions</label>
      <input ref={reactionsElement} type="text" className="form-control" id="reaction" placeholder="Number of reaction..."></input>
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Tags</label>
      <input ref={tagsElement} type="text" className="form-control" id="tags" placeholder="Enter Tags using space..."></input>
    </div>
    <button type="submit" className="btn btn-primary">post</button>
  </form>
}
export default CreatePost;