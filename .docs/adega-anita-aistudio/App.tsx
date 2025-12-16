import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import TrackingScreen from './screens/TrackingScreen';
import LoyaltyScreen from './screens/LoyaltyScreen';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/detail" element={<ProductDetailScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/checkout" element={<CheckoutScreen />} />
                <Route path="/tracking" element={<TrackingScreen />} />
                <Route path="/loyalty" element={<LoyaltyScreen />} />
            </Routes>
        </HashRouter>
    );
};

export default App;