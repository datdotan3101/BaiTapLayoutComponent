export default function Carousel() {
  return (
    <div className="carousel container mx-auto max-w-[80%]">
      <div className="carousel-text text-center bg-gray-100 p-8">
        <h1 className="text-5xl font-bold">A warm welcome!</h1>
        <h5 className="text-2xl py-8">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </h5>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Call to action
        </button>
      </div>
    </div>
  );
}
