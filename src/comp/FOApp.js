import React, { useState } from 'react';
import './FOApp.css';

function FoodOrderApp() {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderedItems, setOrderedItems] = useState([]);

    const menu = [
        { id: 2, name: 'Pizza', price: 199.99 },
        { id: 1, name: 'Burger', price: 99.99 },
        { id: 3, name: 'Friess.', price: 89.99 },
        // Add more menu items here
    ];

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

    function confirm() {
        if (items.length) {
            // Copy the selected items to the orderedItems state
            setOrderedItems([...items]);
            alert('ORDER PLACED');
            // Clear items and total price
            setItems([]);
            setTotalPrice(0);
        } else {
            alert('Please choose an item to Place the Order');
        }
    }

    return (
        <div className="legend-container">
            <legend id='haysky'>HAYSKY'S CUISINE</legend>
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
                    {/* <h1>{msg}</h1> */}
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

                {/* Watermark */}
                <div className="watermark">AYAN510</div>
            </div>
        </div>
    );
}

export default FoodOrderApp;