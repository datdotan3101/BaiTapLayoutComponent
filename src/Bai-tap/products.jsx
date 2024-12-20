import Items from "./items";

export default function Products() {
  return (
    <div>
      <div className="grid grid-cols-3  gap-y-16 place-items-center container mx-auto justify-between">
        {/* Item 1  */}
        <div className="items-content text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="items-icon w-16 h-16  text-white flex items-center justify-center rounded-lg">
            <i class="fa fa-bars text-2xl"></i>
          </div>

          <a href="#">
            <h5 className="pt-8 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Fresh new layout
            </h5>
          </a>
          <p className="mb-3 font-normal text-black dark:text-black">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </div>
        {/* Item 2 */}
        <div className="items-content text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="items-icon w-16 h-16  text-white flex items-center justify-center rounded-lg">
            <i class="fa fa-download text-2xl"></i>
          </div>
          <a href="#">
            <h5 className="pt-8 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Free to download
            </h5>
          </a>
          <p className="mb-3 font-normal text-black dark:text-black">
            As always, Start Bootstrap has a powerful collectin of free
            templates.
          </p>
        </div>
        {/* Item 3  */}
        <div className="items-content text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="items-icon w-16 h-16  text-white flex items-center justify-center rounded-lg">
            <i class="fa fa-address-card text-2xl"></i>
          </div>

          <a href="#">
            <h5 className="pt-8 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Jumbotron hero header
            </h5>
          </a>
          <p className="mb-3 font-normal text-black dark:text-black">
            The heroic part of this template is the jumbotron hero header!
          </p>
        </div>
        {/* Item 4  */}
        <div className="items-content text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="items-icon w-16 h-16  text-white flex items-center justify-center rounded-lg">
            <i class="fab fa-bootstrap text-2xl"></i>
          </div>

          <a href="#">
            <h5 className="pt-8 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Feature boxes
            </h5>
          </a>
          <p className="mb-3 font-normal text-black dark:text-black">
            We've created some custom feature boxes using Bootstrap icons!
          </p>
        </div>
        {/* Item 5  */}
        <div className="items-content text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="items-icon w-16 h-16  text-white flex items-center justify-center rounded-lg">
            <i class="fa fa-code text-2xl"></i>
          </div>

          <a href="#">
            <h5 className="pt-8 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Simple clean code
            </h5>
          </a>
          <p className="mb-3 font-normal text-black dark:text-black">
            We keep our dependencies up to date and squash bugs as they come!
          </p>
        </div>
        {/* Item 6  */}
        <div className="items-content text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="items-icon w-16 h-16  text-white flex items-center justify-center rounded-lg">
            <i class="fa fa-check-circle text-2xl"></i>
          </div>

          <a href="#">
            <h5 className="pt-8 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              A name you trust
            </h5>
          </a>
          <p className="mb-3 font-normal text-black dark:text-black">
            Start Bootstrap has been the leader in free Bootstrap templates
            since 2013!
          </p>
        </div>
      </div>
    </div>
  );
}
