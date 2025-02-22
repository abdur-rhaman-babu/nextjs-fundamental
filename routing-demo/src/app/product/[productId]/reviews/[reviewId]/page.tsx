import { notFound } from "next/navigation";

const ReviewDetails = async ({params}:{
    params: Promise<{productId: string, reviewId:string}>
}) => {
    const {productId, reviewId} = await params;
    if(parseInt(reviewId) > 1000){
        notFound()
    }
    return (
        <div>
            <h1>Review {reviewId} for Products {productId}</h1>
        </div>
    );
};

export default ReviewDetails;