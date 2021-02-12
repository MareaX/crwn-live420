import "./homepage.styles.scss";

import Directory from "../../components/directory/directory";

const HomePage = ({history}) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
