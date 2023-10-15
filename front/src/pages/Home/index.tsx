import LoginCard from "../../components/LoginCard";
import { ReactComponent as BannerImage } from "../../assets/images/banner.svg" 
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner-container">
        <h1>Avalie Filmes</h1>
        <h3>Diga o que você achou do seu filme favorito</h3>
        <BannerImage />
      </div>
        <LoginCard />
      </div>
  );
};

export default Home;
