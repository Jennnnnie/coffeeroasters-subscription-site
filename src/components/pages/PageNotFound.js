import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <h1>
        Go
        <span onClick={() => navigate(-1)} className="back-page">
          Back
        </span>
      </h1>
    </div>
  );
};

export default PageNotFound;
