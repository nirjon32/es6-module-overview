const Logo = () => {
  return (
    <div className="flex items-center">
      {/* Logo icon */}
      <div className="w-8 h-8 mr-2 relative">
        <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-lg transform rotate-45"></div>
        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-lg transform rotate-6 scale-75"></div>
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold">N</span>
      </div>
      
      {/* Logo text */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">
          Ni Articles
        </h1>
        <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
          Your Daily Read
        </span>
      </div>
    </div>
  );
};

export default Logo;