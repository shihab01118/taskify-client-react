const Features = () => {
  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto pt-[83px]">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Key Features
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="bg-white rounded-lg shadow-md p-5 hover:bg-gray-200 transition">
          <h2 className="text-xl font-medium mb-4">
            Efficient Task Organization
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Easily create, organize, prioritize, and manage tasks in a
            structured manner. With our intuitive interface, managing your tasks
            becomes effortless.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-lg shadow-md p-5 hover:bg-gray-200 transition">
          <h2 className="text-xl font-medium mb-4">
            Personal Task Management
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Simplify your task management process. Organize your to-dos, set
            deadlines, and prioritize tasks according to your individual goals.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-lg shadow-md p-5 hover:bg-gray-200 transition">
          <h2 className="text-xl font-medium mb-4">
            Customization & Flexibility
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Tailor the platform to fit your workflow preferences. Customize task
            details, deadlines, priorities, and categories according to your
            needs.
          </p>
        </div>
      </div>
      <div className="text-center my-10 md:text-lg font-medium text-[#757575]">
        <p>More Features Coming Soon.</p>
        <p className="text-[#FF7C17]">Stay Tuned!</p>
      </div>
    </div>
  );
};

export default Features;
