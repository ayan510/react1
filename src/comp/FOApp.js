import React, { useEffect, useState } from 'react';
import './FOApp.css';
import logo from './logo.png'

function FoodOrderApp() {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderedItems, setOrderedItems] = useState([]);

    const menu = [
        { id: 2, name: 'Pizza', price: 199.99 },
        { id: 1, name: 'Burger', price: 99.99 },
        { id: 3, name: 'Friess.', price: 89.99 },

    ];

    useEffect(() => {
        const storedOrderedItems = JSON.parse(localStorage.getItem('orderedItems')) || [];
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        setOrderedItems(storedOrderedItems);
        setItems(storedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('orderedItems', JSON.stringify(orderedItems));
        localStorage.setItem('items', JSON.stringify(items));
    }, [orderedItems, items]);

    const addToOrder = (item) => {
        const updatedItems = [...items, item];
        const updatedTotalPrice = totalPrice + item.price;
        setItems(updatedItems);
        setTotalPrice(updatedTotalPrice);
    };

    const removeItem = (item) => {
        const updatedItems = items.filter((i) => i.id !== item.id);
        const updatedTotalPrice = totalPrice - item.price;
        setItems(updatedItems);
        setTotalPrice(updatedTotalPrice);
    };

    const clearOrder = () => {
        localStorage.removeItem('orderedItems');
        localStorage.removeItem('items');
        setOrderedItems([]);
        setItems([]);
        setTotalPrice(0);
    };

    function confirm() {
        if (items.length) {
            setOrderedItems([...items]);
            alert('ORDER PLACED');
            setItems([]);
            setTotalPrice(0);
        } else {
            alert('Please choose an item to Place the Order');
        }
    }

    return (
        <div className="legend-container">
            <legend id='haysky'>HAYSKY'S CUISINE</legend>
            <img src={logo} alt="Logo" className="logo" />
            <div>
                <h1 id='maintitle'>
                    <span style={{ color: "red" }}>F</span>ood{" "}
                    <span style={{ color: "red" }}>O</span>rder{" "}
                    <span style={{ color: "red" }}>A</span>pp
                </h1>
                <div>
                    <h2>Quick-Menu</h2>
                    <br></br>
                    <ul>
                        {menu.map((item) => (
                            <li key={item.id}>
                                {item.name} - ₹{item.price}{" "}
                                <button className='add' onClick={() => addToOrder(item)}>
                                    Add to Order
                                </button>
                            </li>
                        ))}
                    </ul>
                    <br></br>
                </div>
                <div>
                    <h2>Order</h2>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                {item.name} - ₹{item.price}
                                <button id='remove' onClick={() => removeItem(item)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
                    <button id='orderbtn' onClick={confirm}>
                        ORDER NOW
                    </button>
                    {items.length > 1 && (
                        <button id='remove2' onClick={clearOrder}>
                            CLEAR ALL
                        </button>
                    )}
                </div>
                <hr></hr>

                <div>
                    <h2>Ordered Items</h2>
                    {orderedItems.length > 0 ? (
                        <ul>
                            {orderedItems.map((item) => (
                                <li key={item.id}>
                                    {item.name} - ₹{item.price}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>You don't have any orders yet.</p>
                    )}
                </div>
                <div className="watermark">AYAN510</div>
            </div>
        </div>
    );
}

export default FoodOrderApp;