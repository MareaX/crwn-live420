import Directory from "../../components/directory/directory";

import {HomePageContainer} from"./homepage.styles.js";


const HomePage = ({history}) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
