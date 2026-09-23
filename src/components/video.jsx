export default function Video({ recipe }) {
  return (
    <div className="w-10/12 max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-600 mb-5">Video</h3>

      {recipe.strYoutube ? (
        <a
          href={recipe.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-lime-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-green-600"
        >
          Watch Recipe Video
        </a>
      ) : (
        <p className="text-gray-500">No video is available for this recipe.</p>
      )}
    </div>
  );
}
