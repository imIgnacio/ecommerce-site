import React from 'react'
import './Card.css';

function Card(props) {
  return (
    <div className="container page-wrapper">
        <div className="page-inner">
            <div className="row">
                <div className="el-wrapper">
                    <div className="box-up">
                        <img className="img" src={props.image} alt=""/>
                        <div className="img-info">
                            <div className="info-inner">
                            <span className="p-name">{props.name}</span>
                            <span className="p-company">Yeezy</span>
                            </div>
                            <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                        </div>
                        </div>

                        <div className="box-down">
                        <div className="h-bg">
                            <div className="h-bg-inner"></div>
                        </div>

                        <a className="cart" href="#">
                            <span className="price">${props.price}</span>
                            <span className="add-to-cart">
                            <span className="txt">Add in cart</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card