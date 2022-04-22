import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";
import ListProducts from "./components/ListProducts";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import ProductDetail from "./components/ProductDetail";

import Stack from "@mui/material/Stack";
import ListOrders from "./components/PastOrders/ListOrders";
import OrderDetail from "./components/PastOrders/OrderDetail";

function App(): JSX.Element {
    window.getComputedStyle(document.body)
    return (
        <Stack direction="row">
            <Stack direction="column" sx={{ width: "100%" }}>
                <BrowserRouter>
                        <div className={"NonSidebar"}>
                            <CartProvider>
                                <Navbar />
                                <Routes>
                                    <Route path="/products" element={<ListProducts />} />
                                    <Route path="/products?filter=:filter" element={<ListProducts />} />
                                    <Route path="/products/:id" element={<ProductDetail />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/orders" element={<ListOrders/>} />
                                    <Route path="/orders/:orderId" element={<OrderDetail/>}/>
                                    <Route path="/checkout" element={<Checkout />} />
                                    <Route path="/" element={<HomePage />} />
                                </Routes>
                            </CartProvider>
                        </div>
                </BrowserRouter>
            </Stack>
        </Stack>
    );
}

export default App;
