
const Menu = function({items, opened = false}) {
  console.log(items);
  if (opened) { 
    console.log(1);
    console.log(opened);
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
    console.log(2);
    console.log(opened);
    return (
      <div className='menu'>
        <div className='menu-toggle'><span></span></div>
      </div>
    );
  }
}