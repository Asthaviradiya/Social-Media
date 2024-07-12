import { Form, redirect } from "react-router-dom";

const CreatePost = () => {

  // const{addPost} = useContext(PostList)

    return <Form method="POST" className="createPost">
    <div className="mb-3">
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">Enter Your UserId Here</label>
      <input name="userId" type="text" className="form-control" id="userId" placeholder="your userId..."></input>
    </div>
      <label htmlFor="title" className="form-label">Post Title</label>
      <input name="postTitle" type="text" className="form-control" id="title" placeholder="How are you filling today..."></input>
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Content</label>
      <textarea name="postBody" type="text" className="form-control" id="body" placeholder="Tell us more about it...."></textarea>
    </div>
    <div className="mb-3">
      <label htmlFor="reaction" className="form-label">Number Of Reactions</label>
      <input name="reactions" type="text" className="form-control" id="reaction" placeholder="Number of reaction..."></input>
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Tags</label>
      <input name="tags" type="text" className="form-control" id="tags" placeholder="Enter Tags using space..."></input>
    </div>
    <button type="submit" className="btn btn-primary">post</button>
  </Form>
}
export const createPostAction = async(data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData)
  // addPost(userId, postTitle, postBody, reactions, tags);
  //     navigate("/");
  return redirect("/")
}
export default CreatePost;