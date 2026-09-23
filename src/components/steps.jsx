export default function Steps({ recipe }) {
  const steps = recipe.strInstructions
    .split(/\n(?=\d+\.)/)
    .filter((step) => step.trim() !== "");

  return (
    <div className="w-10/12 max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-600 mb-5">Steps</h3>

      <div className="flex flex-col gap-4">
        {steps.map((step, index) => {
          const cleanStep = step.replace(/^\d+\.\s*/, "");

          return (
            <div key={index} className="flex gap-3 items-start">
              <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-lime-500 text-white font-bold">
                {index + 1}
              </span>

              <p className="text-gray-600 leading-7">{cleanStep}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
