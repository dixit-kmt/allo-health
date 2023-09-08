import mealData from '../data/meal-data'

export default async function Page() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2">
      {mealData.map((meal) => (
        <div key={meal.name} className="md:w-2/3 mb-2">
          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div>
              <img
                class="robject-cover rounded-t-lg h-96 md:h-auto md:w-56 md:rounded-none md:rounded-l-lg"
                src={meal.image}
                alt=""
              />
            </div>

            <div class="flex flex-col justify-between p-4 leading-normal w-4/6">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {meal.name}
              </h5>
              <p class="mb-0.5 font-normal text-gray-700 dark:text-gray-400">
                Starter : {meal.starter}
              </p>
              <p class="mb-0.5 font-normal text-gray-700 dark:text-gray-400">
                Desert : {meal.desert}
              </p>
              <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                Selected Drink:
              </p>

              <div className="flex flex-col items-center justify-center md:items-end md:justify-end ">
                <p className="mb-2 font-semibold">{meal.price}</p>
                <button class="transition duration-300 w-48 ease-in-out px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}