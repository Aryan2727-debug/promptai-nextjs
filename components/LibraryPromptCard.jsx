"use client"

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const LibraryPromptCard = ({ prompt, isBookmarked: initialBookmarked, onBookmarkChange }) => {
  const { data: session } = useSession();
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked);
  const [isBookmarking, setIsBookmarking] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleBookmark = async () => {
    if (!session?.user) {
      alert("Please sign in to bookmark prompts");
      return;
    }

    setIsBookmarking(true);

    try {
      if (isBookmarked) {
        // Remove bookmark
        const response = await fetch(`/api/bookmarks?promptId=${prompt.id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setIsBookmarked(false);
          if (onBookmarkChange) onBookmarkChange(prompt.id, false);
        }
      } else {
        // Add bookmark
        const response = await fetch("/api/bookmarks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            promptId: prompt.id.toString(),
            promptTitle: prompt.title,
            promptText: prompt.prompt,
            category: prompt.category,
            tags: prompt.tags,
          }),
        });

        if (response.ok) {
          setIsBookmarked(true);
          if (onBookmarkChange) onBookmarkChange(prompt.id, true);
        } else if (response.status === 400) {
          setIsBookmarked(true); // Already bookmarked
        }
      }
    } catch (error) {
      console.error("Error bookmarking:", error);
      alert("Failed to update bookmark");
    } finally {
      setIsBookmarking(false);
    }
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-3 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              {prompt.category}
            </span>
          </div>
          <h3 className="font-satoshi font-bold text-gray-900 dark:text-gray-100 text-lg">
            {prompt.title}
          </h3>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleBookmark}
            disabled={isBookmarking}
            className={`w-8 h-8 rounded-full flex justify-center items-center cursor-pointer transition-all ${
              isBookmarked
                ? 'bg-yellow-400 hover:bg-yellow-500'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            title={isBookmarked ? "Remove bookmark" : "Bookmark prompt"}
          >
            <svg
              className={`w-4 h-4 ${isBookmarked ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}
              fill={isBookmarked ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
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
        {prompt.prompt}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {prompt.tags.map((tag, index) => (
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

export default LibraryPromptCard;
