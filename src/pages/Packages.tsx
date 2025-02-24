
import { Package, ArrowUpDown, Search } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "react-component-library",
      description: "A collection of reusable React components",
      type: "npm",
      downloads: "23k",
    },
    {
      name: "typescript-utils",
      description: "Utility functions for TypeScript projects",
      type: "npm",
      downloads: "15k",
    },
    // Add more package items as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex-1 w-full md:w-auto md:mr-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-github-text h-5 w-5" />
            <input
              type="text"
              placeholder="Find a package..."
              className="w-full pl-10 pr-4 py-2 bg-github-dark border border-github-border rounded-md text-github-text placeholder-github-text/50 focus:outline-none focus:border-github-hover"
            />
          </div>
        </div>
        <div className="flex space-x-2 w-full md:w-auto">
          <button className="px-3 py-1 text-sm font-medium bg-github-secondary text-github-text border border-github-border rounded-md hover:bg-github-border transition-colors flex items-center">
            <Package className="h-4 w-4 mr-2" />
            Type
          </button>
          <button className="px-3 py-1 text-sm font-medium bg-github-secondary text-github-text border border-github-border rounded-md hover:bg-github-border transition-colors flex items-center">
            <ArrowUpDown className="h-4 w-4 mr-2" />
            Sort
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="border border-github-border rounded-lg p-6 hover:border-github-hover transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-github-accent font-medium text-lg">{pkg.name}</h3>
                <p className="text-github-text mt-2">{pkg.description}</p>
              </div>
              <span className="text-github-text text-sm px-3 py-1 rounded-full bg-github-secondary">
                {pkg.type}
              </span>
            </div>
            <div className="flex items-center text-sm text-github-text">
              <Package className="h-4 w-4 mr-2" />
              {pkg.downloads} downloads
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
