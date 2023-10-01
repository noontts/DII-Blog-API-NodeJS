const PostBlog = () => {
  return (
    <>
      <div>PostBlog</div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Default
        </span>
        <input type="text" className="form-control"></input>
        
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label>Comments</label>
        </div>
      </div>
    </>
  );
};

export default PostBlog;
