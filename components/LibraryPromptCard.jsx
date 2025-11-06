"use client"

import { useState } from "react";
import Image from "next/image";

const LibraryPromptCard = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5 mb-3">
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

        <div onClick={handleCopy} className="copy_btn">
          <Image
            src={copied ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            alt={copied ? 'copied' : 'copy'}
            width={15}
            height={15}
          />
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
