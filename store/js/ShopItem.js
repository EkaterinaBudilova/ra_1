const ShopItem = function(props) {
  const {brand, title, description, price} = props.item;
//  const priceTwo = Math.round(price * 100) / 100;
  const priceTwo = price.toFixed(2);
  console.log(priceTwo);
  return (
    <div className='main-content'>
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className='description'> Mens minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent.   Slim fit with clean, straight shape. Above-knee length. </div>
      <div className='highlight-window  mobile'><div className='highlight-overlay'></div></div>
      <div className='divider'></div>
      <div className='purchase-info'>
      <div className='price'>£{priceTwo}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}