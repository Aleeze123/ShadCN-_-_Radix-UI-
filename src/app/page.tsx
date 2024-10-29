import React from 'react';

const ShadCNInfo = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-12 min-h-screen bg-gradient-to-r from-blue-100 to-teal-200">
      <header className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 animate-fade-in">ShadCN & Radix UI Presentation</h1>
        <h2 className="text-lg md:text-xl text-gray-700 font-semibold mt-2">
          Presented by Aleeza, GIAIC Student
        </h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        <InfoCard
          title="What is ShadCN?"
          content="ShadCN is a modern UI component library that simplifies web development by providing customizable, pre-built components."
        />
        <InfoCard
          title="Why Use ShadCN?"
          content="ShadCN simplifies the development process, allowing developers to focus on creativity and functionality."
        />
        <InfoCard
          title="Key Features"
          content={
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Theming Options: Easily switch between themes to match your brand.</li>
              <li>Dark Mode Support: Built-in support for dark mode enhances user experience.</li>
              <li>Animation and Transitions: Smooth animations for interactive components.</li>
            </ul>
          }
        />
        <InfoCard
          title="How to Install ShadCN?"
          content={
            <div className="flex flex-col items-center text-center">
              <p className="mb-3 text-gray-700">Install Radix UI using npm or Yarn:</p>
              <p className="mb-3 text-gray-700 font-bold">Using npm:</p>
              <pre className="bg-blue-50 p-4 rounded-lg shadow-md text-blue-800 animate-fade-in">
                npx shadcn@latest init
              </pre>
              <p className="mb-3 text-gray-700 font-bold">Using Yarn:</p>
              <pre className="bg-blue-50 p-4 rounded-lg shadow-md text-blue-800 animate-fade-in">
                yarn add shadcn@latest init
              </pre>
            </div>
          }
        />
      </div>

      <div className="flex justify-center w-full mt-6">
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 animate-pulse"
        >
          Shadcn UI Documentation
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        <InfoCard
          title="What is Radix UI?"
          content="Radix UI is a collection of unstyled, accessible UI components for building user interfaces in React applications."
        />
        <InfoCard
          title="How to Install Radix UI"
          content={
            <div className="flex flex-col items-center text-center">
              <p className="text-gray-700 mb-4">Install Radix UI using npm or Yarn:</p>
              <p className="mb-2 text-gray-700 font-bold">Using npm:</p>
              <pre className="bg-blue-50 p-4 rounded-lg shadow-md text-blue-800 mb-2">
                npm install @radix-ui/react
              </pre>
              <p className="mb-2 text-gray-700 font-bold">Using Yarn:</p>
              <pre className="bg-blue-50 p-4 rounded-lg shadow-md text-blue-800">
                yarn add @radix-ui/react
              </pre>
            </div>
          }
        />
        <InfoCard
          title="Why Use Radix UI?"
          content={
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Accessibility: Built with ARIA attributes for better accessibility.</li>
              <li>Customization: Unstyled by default for full design freedom.</li>
              <li>Flexibility: A wide range of components for various UI patterns.</li>
              <li>Lightweight: Minimal design for better performance.</li>
            </ul>
          }
        />
        <InfoCard
          title="Key Features of Radix UI"
          content={
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Unstyled Components: Full freedom to customize appearance.</li>
              <li>Accessibility: Enhances usability for everyone.</li>
              <li>Composability: Easily combine components for complex UIs.</li>
              <li>Server-side Rendering Support: Optimized for performance.</li>
              <li>Cross-browser Compatibility: Works seamlessly across major browsers.</li>
              <li>TypeScript Support: Definitions available for a smoother development experience.</li>
            </ul>
          }
        />
      </div>

      <div className="flex justify-center w-full mt-6">
        <a
          href="https://www.radix-ui.com/themes/docs/overview/getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 text-white px-8 py-4 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 animate-pulse"
        >
          Radix UI Documentation
        </a>
      </div>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  content: React.ReactNode;
}

const InfoCard = ({ title, content }: InfoCardProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 border border-gray-300 animate-slide-in">
    <h2 className="text-xl font-bold mb-3 text-gray-800">{title}</h2>
    <div className="text-gray-700 flex-grow">{content}</div>
  </div>
);

export default ShadCNInfo;

