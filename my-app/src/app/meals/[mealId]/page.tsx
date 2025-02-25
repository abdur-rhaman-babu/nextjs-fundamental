
import { getSingleMeal } from "@/data";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: { mealId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mealId } = params;
  const meal = await getSingleMeal(mealId);

  return {
    title: meal.strMeal,
    description: meal.strInstructions,
  };
}

const MealDetails: React.FC<Props> = async ({ params }) => {
  const { mealId } = params;
  const meal = await getSingleMeal(mealId);

  const { idMeal, strMeal, strInstructions,strMealThumb } = meal;
  return (
    <div>
      <h1>Post id: {mealId}</h1>
      <Image src={strMealThumb} width={641} height={641} alt={strMeal}/>
      <h1>{idMeal}</h1>
      <p>{strMeal}</p>
      <p>{strInstructions}</p>
    </div>
  );
};

export default MealDetails;
