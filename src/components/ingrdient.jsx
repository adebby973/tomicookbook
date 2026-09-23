export default function Ingredient({ recipe }) {
  return (
    <div className="w-10/12 max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-600 mb-5">Ingredients</h3>

      <div className="flex flex-col gap-3">
        <p className="flex gap-2 items-center">
          <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-lime-500 text-white font-bold">
            1
          </span>
          {recipe.strIngredient1}
        </p>

        <p className="flex gap-2 items-center">
          <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-lime-500 text-white font-bold">
            2
          </span>
          {recipe.strIngredient2}
        </p>

        <p className="flex gap-2 items-center">
          <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-lime-500 text-white font-bold">
            3
          </span>
          {recipe.strIngredient3}
        </p>
      </div>
    </div>
  );
}
