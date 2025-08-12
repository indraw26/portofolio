import Navbar from "../components/Navbar";
import Maintance from "./maintance";

const Project = () => {
  const isPagefinished = false;

  return (
    <div>
      {isPagefinished ? (
        <div>
          <Navbar />
        </div>
      ) : (
        <div>
          <Maintance />
        </div>
      )}
    </div>
  );
};

export default Project;
