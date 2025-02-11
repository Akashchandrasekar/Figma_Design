import React from 'react';
import CategoriesPage from '../Components/CategoriesPage'; 
import TodaysList from '../Components/TodaysList';
import ElectronicsList from '../Components/ElectronicsList';
import ThismonthProducts from '../Components/ThismonthProducts';
import ExploreOurProducts from '../Components/ExploreOurProducts';
import Features from '../Components/Features';
import ServicesSection from '../Components/ServicesSection';

const Home = () => {
    return (
        <div>
            <CategoriesPage /> 
            <TodaysList />
            <ElectronicsList />
            <ThismonthProducts />
            <ExploreOurProducts />
            <Features />
            <ServicesSection />
        </div>
    );
};

export default Home;
