////////CARRITO

'use client';

import {  CartProvider as CProvider } from 'use-shopping-cart';
const CartProvider = ({children}) => {
  
        return (
            <CProvider 
                mode = 'payment'
                CartMode = 'client-only'
                stripe = ''
                successUrl = 'succes'
                cancelUrl = 'error'
                language = 'en-US'
                currency = 'USD'
                billingAddressCollection = {true}
                shouldPersist = {true}
            >
                {children}
            </CProvider>
        );
   
}

export default CartProvider;