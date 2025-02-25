import { getMealsData } from "@/data";
import MealSearchInput from "./components/MealSearchInput";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strInstructions: string;
}

export const metadata: Metadata = {
  title: "All Meals",
  description: "Fetch JSON data using server side",
};

interface MealsPageProps {
  searchParams: { search: string };
}
const MealsPage = async ({ searchParams }: MealsPageProps) => {
  const { search } = searchParams || "";

  const meals: Meal[] = await getMealsData(search);
  const validMeals = Array.isArray(meals) ? meals : [];

  return (
    <div>
      <div className="text-center">
        <MealSearchInput />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 m-10">
        {validMeals.length === 0 ? (
          <p>No meals found for the search term {search}.</p> // Display a message if no meals are found
        ) : (
          validMeals.map((meal) => (
            <div key={meal.idMeal} className="border-2 shadow-lg p-5">
              <Image
                src={meal.strMealThumb}
                width={641}
                height={641}
                alt={meal.strMeal}
              />
              <h1 className="font-bold text-3xl">{meal.strMeal}</h1>
              <Link href={`/meals/${meal.idMeal}`}>
                <button>Details</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MealsPage;
