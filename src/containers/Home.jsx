/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-parens */
import React from 'react';
import Filters from '../components/Filters';
import Heros from '../components/Heros';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';
const Home = () => {
  const initialState = useInitialState(API);
  return (
    <>
      <Filters />
      <Heros />
      <Carousel>
        <Categories title='MotherBoards'>
          {initialState.boards.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Categories>
        <Categories title='Processors'>
          {initialState.cpus.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Categories>
        <Categories title='Graphic Card'>
          {initialState.gpus.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Categories>
        <Categories title='RAM'>
          {initialState.memory.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Categories>
      </Carousel>
    </>
  );
};
export default Home;
