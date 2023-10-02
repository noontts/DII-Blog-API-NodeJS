import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const id = useParams();

  return (
    <>
      <div>BlogDetail {id.id}</div>
    </>
  );
};

export default BlogDetail;
