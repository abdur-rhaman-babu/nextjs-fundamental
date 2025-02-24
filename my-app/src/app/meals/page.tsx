import { getMealsData } from "@/data";
import MealSearchInput from "./components/MealSearchInput";
interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strInstructions: string;
}

interface MealsPageProps {
  searchParams: { search?: string };
}
const MealsPage = async ({ searchParams }: MealsPageProps) => {
  const search = (await searchParams?.search) || "";

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
              <h1 className="font-bold text-3xl">{meal.strMeal}</h1>
              <p>{meal.strInstructions}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MealsPage;
