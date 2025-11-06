"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PromptCard from "@components/PromptCard";
import BookmarkedPromptCard from "@components/BookmarkedPromptCard";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [activeTab, setActiveTab] = useState("prompts"); // "prompts" or "bookmarks"

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    const fetchBookmarks = async () => {
      const response = await fetch("/api/bookmarks");
      if (response.ok) {
        const data = await response.json();
        setBookmarks(data);
      }
    };

    if (session?.user.id) {
      fetchPosts();
      fetchBookmarks();
    }
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleRemoveBookmark = async (bookmark) => {
    const hasConfirmed = confirm(
      "Are you sure you want to remove this bookmark?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/bookmarks?promptId=${bookmark.promptId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const filteredBookmarks = bookmarks.filter(
            (item) => item._id !== bookmark._id
          );
          setBookmarks(filteredBookmarks);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>My Profile</span>
      </h1>
      <p className='desc text-left'>
        Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination
      </p>

      {/* Tab Navigation */}
      <div className="flex gap-4 mt-8 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab("prompts")}
          className={`pb-3 px-4 font-satoshi font-semibold transition-all ${
            activeTab === "prompts"
              ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          My Prompts ({myPosts.length})
        </button>
        <button
          onClick={() => setActiveTab("bookmarks")}
          className={`pb-3 px-4 font-satoshi font-semibold transition-all ${
            activeTab === "bookmarks"
              ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          Bookmarked ({bookmarks.length})
        </button>
      </div>

      {/* Content */}
      {activeTab === "prompts" ? (
        myPosts.length > 0 ? (
          <div className='mt-10 prompt_layout'>
            {myPosts.map((post) => (
              <PromptCard
                key={post._id}
                post={post}
                handleEdit={() => handleEdit(post)}
                handleDelete={() => handleDelete(post)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center w-full py-10 mt-10">
            <p className="font-satoshi text-gray-500 dark:text-gray-400 text-lg">
              No prompts created yet
            </p>
          </div>
        )
      ) : bookmarks.length > 0 ? (
        <div className='mt-10 prompt_layout'>
          {bookmarks.map((bookmark) => (
            <BookmarkedPromptCard
              key={bookmark._id}
              bookmark={bookmark}
              handleRemoveBookmark={handleRemoveBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="text-center w-full py-10 mt-10">
          <p className="font-satoshi text-gray-500 dark:text-gray-400 text-lg">
            No bookmarked prompts yet
          </p>
          <p className="font-inter text-sm text-gray-400 dark:text-gray-500 mt-2">
            Visit the Prompt Library to bookmark your favorite prompts
          </p>
        </div>
      )}
    </section>
  );
};

export default MyProfile;