"use client"

import { useRouter } from "next/navigation";
const OrderProduct = () => {
    const router = useRouter()
    const handleClick = ()=>{
        console.log('order place')
        router.push('/')
    }
    return (
        <div>
            <h1>Order your product</h1>
            <button onClick={handleClick}>Order</button>
        </div>
    );
};

export default OrderProduct;