// This component is designed to serve as a container for various content.
// It applies a consistent styling theme across the application.
export const Paper = ({ children, className }) => {
  return (
    // The main container div that uses Tailwind CSS for styling.
    // It has a responsive width that adjusts based on the screen size:
    // - 4/12 (33.33%) of the container's width on large screens (lg),
    // - 3/5 (60%) on medium screens (md),
    // - 11/12 (91.66%) on smaller screens.
    // Additionally, it applies padding (p-6), rounded corners (rounded-lg),
    // a gray background (bg-gray-300), and a custom className if provided.
    <div
      className={`lg:w-4/12 md:w-3/5 w-11/12 p-6 relative flex flex-col text-gray-900 rounded-lg bg-gray-300 ${
        className || ""
      }`}
    >
      {children} 
    </div>
  );
};
