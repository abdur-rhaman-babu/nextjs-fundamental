export interface Post {
    id: number;
    title: string;
    body: string;
  }


export const getPost = async (): Promise<Post[]>=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data;
}

export const getSinglePost = async (postId: string)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await res.json()
    return data;
}


// fetching mealdb data
export const getMealsData = async (search: string) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      return data.meals;
    } catch (error) {
      console.log(error);
    }
  };


  export const getSingleMeal = async (mealId: string)=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    const data = await res.json()
    return data.meals[0];
}