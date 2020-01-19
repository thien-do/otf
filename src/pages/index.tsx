import { NextPage } from "next";
import { Tw } from "styles";

const Home: NextPage = () => (
  <div className={Tw().textGray500().$()}>
    <h1>Illustration</h1>
    <h1 style={{ fontFeatureSettings: "'ss02'" }}>Illustration</h1>
  </div>
);

export default Home;
