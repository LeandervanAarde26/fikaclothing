import React, {useEffect} from 'react';
import Slider from '../../Components/Carasouel/Slider.component';
import './Home.styles.scss';
import CardContainer from '../../Components/CardContainer/CardContainer.component';
import Footer from '../../Components/Footer/Footer.component';
import FeaturedBrands from "../../Components/FeaturedBrands/FeaturedBrands.component"

const Home = () => {
    useEffect(() =>{
        document.title = "Home"
     }, [])
     

    return (
        <div>
            <Slider />
            <CardContainer
                heading="LATEST PRODUCTS"
            />
            <FeaturedBrands
                heading="Featured Brands"
                brandName={"NIKE"}
            />

            <FeaturedBrands
                heading={""}
                brandName={"ADIDAS"}
            />
            <Footer />
        </div>
    );
};

export default Home;