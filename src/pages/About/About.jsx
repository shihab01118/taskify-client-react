const About = () => {
  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto pt-[83px]">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
        About Taskify
      </h1>

      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At Taskify, our mission is to streamline task management for
          individuals. We believe that by providing powerful yet user-friendly
          tools, we can help people achieve their goals, enhance productivity,
          and simplify their daily tasks.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          Taskify was founded by a team of passionate individuals driven by a
          shared vision to create a task management platform that is intuitive,
          flexible, and adaptable to various needs. We are dedicated to
          continuously improving our platform based on user feedback and
          evolving technology.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">
            Efficient Task Organization: Easily create, organize, prioritize,
            and manage tasks.
          </li>
          <li className="mb-2">
            Customization & Flexibility: Tailor the platform to suit your
            workflow preferences.
          </li>
          <li className="mb-2">
            Insightful Reporting: Track progress and gain insights into
            productivity.
          </li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Why Choose Taskify</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">
            User-Friendly Interface: Intuitive design for a seamless user
            experience.
          </li>
          <li className="mb-2">
            Secure & Reliable: Robust security measures for data protection.
          </li>
          <li className="mb-2">
            Continuous Innovation: Regular updates for the latest features.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Got questions, feedback, or suggestions? We{"'"}d love to hear from
          you! Contact our support team at{" "}
          <a
            href="mailto:support@taskify.com"
            className="text-blue-600 hover:underline"
          >
            support@taskify.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
