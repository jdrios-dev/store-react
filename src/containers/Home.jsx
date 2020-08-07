/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import Filters from '../components/Filters';
import Heros from '../components/Heros';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';
import '../assets/styles/App.scss';

const Home = ({ myfav, boards, cpus, gpus, memory, powerSupply }) => {

  return (
    <>
      <Filters />
      <Heros />
      <Carousel>
        {myfav.length > 0 &&
          <Categories title='My Favourites'>
            {myfav.map((item) => <CarouselItem
              key={item.id}
              {...item}
              isList
            />)}
          </Categories>}
        <Categories title='MotherBoards'>
          {boards.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Categories>
        <Categories title='Processors'>
          {cpus.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Categories>
        <Categories title='Graphic Card'>
          {gpus.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Categories>
        <Categories title='RAM'>
          {memory.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Categories>
        <Categories title='Power Suplay'>
          {powerSupply.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Categories>
      </Carousel>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myfav: state.myfav,
    boards: state.boards,
    cpus: state.cpus,
    gpus: state.gpus,
    memory: state.memory,
    powerSupply: state.powerSupply,
  };
};

export default connect(mapStateToProps, null)(Home);
