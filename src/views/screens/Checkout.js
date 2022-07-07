// import { loadStripe } from '@stripe/stripe-react-native';
import React, { useEffect } from 'react';

import { View, Text } from 'react-native'

// const stripePromise = loadStripe(
//   'pk_live_51Hr2QbJxbMOg1uJWzNxHxlSF0gtacmyw5FJmiL9l93WdydIbBOyUzCm23ShV8RJgiA9rlbwJS15IDdMQlNvtI2oU00GxoUQN3E'
// );

// const stripePromise = loadStripe(
//     'pk_test_51JPPqLL9A4UddfsJLvhLodelfb2PHMjmGJuJCYSKB01qaAhokh1GVn8KXyIb4TvPXndtkEdJF1welkbnPw3phGQ700GbJTtSTN'
// );

const Checkout = () => {
    // useEffect(() => {
    //     const email = 'zbatty1297@gmail.com';
    //     // const data = JSON.parse(localStorage.getItem('idGroup'));
    //     const line_items = [
    //         {
    //             quantity: 1,
    //             price_data: {
    //                 currency: 'usd',
    //                 unit_amount: 2 * 100,
    //                 product_data: {
    //                     name: 'test pack',
    //                 },
    //             },
    //         },
    //     ];
    //     const handleClick = async () => {
    //         const stripe = await stripePromise;
    //         const response = await fetch(
    //             'https://api.hoodzpronos.com/create-checkout-session',
    //             {
    //                 withCredentials: true,
    //                 method: 'POST',
    //                 body: JSON.stringify({
    //                     line_items,
    //                     customer_email: email,
    //                 }),
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         );
    //         const session = await response.json();
    //         const result = await stripe.redirectToCheckout({
    //             sessionId: session.id,
    //         });
    //         if (result.error) {
    //             console.error(result.error);
    //         }
    //     };
    //     if (email !== undefined) {
    //         s
    //         handleClick();
    //     }
    // }, [stripePromise]);

    return (
        <View style={{ margin: '13%', textAlign: 'center', fontSize: '32px ' }}>
            Attends une minute s'il te plait ...
            <Text style={{ margin: '7%', textAlign: 'center', fontSize: '20px ' }}>
                Si cela ne fonctionne pas pour vous après deux minutes, actualisez la
                page
            </Text>
        </View>
    );
};


export default Checkout;
