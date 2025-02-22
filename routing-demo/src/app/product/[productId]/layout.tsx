
const ProductDetailsLayout = ({children}:{
    children: React.ReactNode;
}) => {
    return (
        <div>
            {children}
            <p>Product Details</p>
        </div>
    );
};

export default ProductDetailsLayout;