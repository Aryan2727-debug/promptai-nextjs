"use client"

import { useState } from "react";
import Image from "next/image";

const BookmarkedPromptCard = ({ bookmark, handleRemoveBookmark }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(bookmark.promptText);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-3 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              {bookmark.category}
            </span>
            <span className="px-2 py-1 text-xs rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
              Bookmarked
            </span>
          </div>
          <h3 className="font-satoshi font-bold text-gray-900 dark:text-gray-100 text-lg">
            {bookmark.promptTitle}
          </h3>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleRemoveBookmark(bookmark)}
            className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 flex justify-center items-center cursor-pointer transition-all"
            title="Remove bookmark"
          >
            <svg
              className="w-4 h-4 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div onClick={handleCopy} className="copy_btn">
            <Image
              src={copied ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
              alt={copied ? 'copied' : 'copy'}
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {bookmark.promptText}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {bookmark.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-inter"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BookmarkedPromptCard;
