import React from 'react';
import './index.scss';


function App() {

  return (
    <div className="App">
        <header>
            <div className="wrapper">
                <div className="leftSide">
                    <img src={"/icon/free-icon-pizza-deliver-8161162.png"} alt='logo' width={60} />
                    <h3>Delivery Service</h3>
                    <p></p>
                </div>
                <div className="rightSide">
                    <p>0,00 ₴</p>
                    <img src={"/icon/free-icon-cart-7528413.png"} alt='cart' width={40} height={40} />
                </div>
            </div>
        </header>
        <div className="content">
            <div className="navigation">
                <ul className="typeOfEat">
                    <li><img src={"/icon/free-icon-burger-1161695.png"} width={25} />Бургери</li>
                    <li><img src={"/icon/free-icon-pizza-4058619.png"} width={25} />Піца</li>
                    <li><img src={"/icon/free-icon-nigiri-4985784.png"} width={25} />Суши</li>
                    <li><img src={"/icon/free-icon-mojito-6304697.png"} width={25} />Напої</li>
                </ul>
            </div>
            <div className="menuList">
                <h3>Всі пункти меню</h3>
                <h2>...</h2>
                <div className="menuItems">
                    <div className="card">
                        <div className="topPart">
                            <img src={"/image/Burger-PNG.png"} width={140} />
                        </div>
                        <div className="bottomPart">
                            <p>Чизбургерг з двійним сиром (500г)</p>
                            <div className="price">
                                <b>96,50 ₴</b>
                                <img src={"/icon/free-icon-font-plus-3917757.png"} width={20} />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="topPart">
                            <img src={"/image/Burger-Transparent-Background-PNG.png"} width={120} />
                        </div>
                        <div className="bottomPart">
                            <p>Чизбургерг з двійним сиром (500г)</p>
                            <div className="price">
                                <b>101,50 ₴</b>
                                <img src={"/icon/free-icon-font-plus-3917757.png"} width={20} />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="topPart">
                            <img src={"/image/Burger-Transparent-PNG.png"} width={140} />
                        </div>
                        <div className="bottomPart">
                            <p>Чизбургерг з двійним сиром (500г)</p>
                            <div className="price">
                                <b>98,70 ₴</b>
                                <img src={"/icon/free-icon-font-plus-3917757.png"} width={20} />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="topPart">
                            <img src={"/image/Burger-Transparent-Background-PNG.png"} width={120} />
                        </div>
                        <div className="bottomPart">
                            <p>Чизбургерг з двійним сиром (500г)</p>
                            <div className="price">
                                <b>95,30 ₴</b>
                                <img src={"/icon/free-icon-font-plus-3917757.png"} width={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cart">
            <h3>Ваше замовлення</h3>
            <ul>
                <li>
                    <div className="info">
                        <b>1x</b>
                        <text>Чизбургер з двойним сиром (500г)</text>
                        <b>96,50 ₴</b>
                    </div>
                    <div className="buttons">
                        <button><img src={"/icon/free-icon-font-minus-small-4338830.png"} width={10} /></button>
                        <button><img src={"/icon/free-icon-font-plus-3917757.png"} width={10} /></button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default App;
