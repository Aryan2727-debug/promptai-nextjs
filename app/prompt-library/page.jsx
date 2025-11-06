"use client";

import { useState, useEffect } from "react";
import LibraryPromptCard from "@components/LibraryPromptCard";
import { libraryPrompts, getCategories, filterByCategory, searchPrompts } from "@utils/libraryPrompts";

const PromptLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [filteredPrompts, setFilteredPrompts] = useState(libraryPrompts);
  const [searchTimeout, setSearchTimeout] = useState(null);
  
  const categories = getCategories();

  useEffect(() => {
    // Apply filters whenever category or search changes
    if (searchText) {
      const results = searchPrompts(searchText);
      if (selectedCategory !== "All") {
        setFilteredPrompts(results.filter(p => p.category === selectedCategory));
      } else {
        setFilteredPrompts(results);
      }
    } else {
      setFilteredPrompts(filterByCategory(selectedCategory));
    }
  }, [selectedCategory, searchText]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // Debounce search
    setSearchTimeout(
      setTimeout(() => {
        setSearchText(e.target.value);
      }, 300)
    );
  };

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Prompt Library
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Ready-to-Use Templates </span>
      </h1>
      <p className="desc text-center">
        Explore our curated collection of AI prompts across various categories.
        Copy and customize them for your needs.
      </p>

      {/* Search Bar */}
      <form className="relative w-full flex-center mt-10">
        <input
          type="text"
          placeholder="Search prompts by title, category, or tags..."
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      {/* Category Filter */}
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-5 py-2 rounded-full font-satoshi font-semibold text-sm transition-all ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:shadow-md"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Prompt Count */}
      <div className="mt-6 text-center">
        <p className="font-inter text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-900">{filteredPrompts.length}</span> prompt{filteredPrompts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Prompts Grid */}
      <div className="mt-10 prompt_layout">
        {filteredPrompts.length > 0 ? (
          filteredPrompts.map((prompt) => (
            <LibraryPromptCard key={prompt.id} prompt={prompt} />
          ))
        ) : (
          <div className="text-center w-full py-10">
            <p className="font-satoshi text-gray-500 text-lg">
              No prompts found matching your criteria.
            </p>
            <p className="font-inter text-sm text-gray-400 mt-2">
              Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PromptLibrary;
