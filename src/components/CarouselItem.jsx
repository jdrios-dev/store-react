import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite, addCart } from '../actions/addAction';
import favLogo from '../assets/static/imgs/favLogo.svg';
import cartLogo from '../assets/static/imgs/cartLogo.svg';
import quitLogo from '../assets/static/imgs/quitLogo.svg';
import '../assets/styles/components/Carousel.scss';

const CarouselItem = (props) => {
  const { addCart } = props;
  const { id, priceUs, priceCop, model, image, description, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      priceUs,
      priceCop,
      model,
      image,
      description,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='galery__item'>
      <img className='galery__item--photo' src={image} alt={model} />
      <span className='galery__item--title'>
        <h3>{model}</h3>
      </span>
      <p className='galery__item--description'>{description}</p>
      <p className='galery__item--price'>{`$ ${priceUs}`}</p>
      <div className='galery__item--details'>
        {
          isList ? <img src={quitLogo} alt='remove from favorites items' onClick={() => handleDeleteFavorite(id)} /> : <img src={favLogo} alt='Add to favorites items' onClick={handleSetFavorite} />
        }
        <img src={cartLogo} alt='Add to favorites cart' onClick={addCart} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
  addCart,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
