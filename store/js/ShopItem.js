const ShopItem = (
  <div className='main-content'>
    <h2>{item.brand}</h2>
    <h1>{item.title}</h1>
    <h3>{item.description}</h3>
    <div className='description'> Mens minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length. </div>
    <div className='highlight-window  mobile'><div className='highlight-overlay'></div></div>
    <div className='divider'></div>
    <div className='purchase-info'>
    <div className='price'>{item.price}</div>
    <button>Добавить в корзину</button>
  </div>
</div>
);