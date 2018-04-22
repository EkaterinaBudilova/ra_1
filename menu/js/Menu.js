
const Menu = function({items, opened = false}) {
  if (opened) { 
    return (
      <div className='menu menu-open'>
        <div className='menu-toggle'><span></span></div>
          <nav>
            <ul>
              <li><a href={'#home'}>{items[0].title}</a></li>
              <li><a href='#about'>{items[1].title}</a></li>
              <li><a href='#contact'>{items[2].title}</a></li>
            </ul>
          </nav>
        </div>
    );
  } else {
    return (
      <div className='menu'>
        <div className='menu-toggle'><span></span></div>
      </div>
    );
  }
}