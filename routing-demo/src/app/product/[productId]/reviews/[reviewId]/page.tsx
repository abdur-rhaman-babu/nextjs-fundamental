

const ReviewDetails = async ({params}:{
    params: Promise<{productId: string, reviewId:string}>
}) => {
    const {productId, reviewId} = await params;
    return (
        <div>
            <h1>Review {reviewId} for Products {productId}</h1>
        </div>
    );
};

export default ReviewDetails;