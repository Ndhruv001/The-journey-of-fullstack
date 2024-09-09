function SidebarLayout({ children }) {
  return (
    <div className="w-3/12 h-full bg-white text-black dark:bg-gray-900 dark:text-white p-6 flex flex-col rounded-tl-3xl font-sans">
      <div className="flex items-start justify-start mt-4 mb-4">
        <span className="text-2xl font-bold text-center font-serif text-black dark:text-white">
          Dashboard
        </span>
      </div>
      <div className="mt-3 w-full">
        <ul className="space-y-2">{children}</ul>
      </div>
    </div>
  );
}

export default SidebarLayout;
