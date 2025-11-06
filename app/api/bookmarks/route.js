import { connectToDB } from "@utils/database";
import Bookmark from "@models/bookmark";
import { getServerSession } from "next-auth";

// GET - Get all bookmarks for a user
export const GET = async (req) => {
    try {
        await connectToDB();

        const session = await getServerSession();
        
        if (!session || !session.user) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401
            });
        }

        const bookmarks = await Bookmark.find({ 
            user: session.user.id 
        }).sort({ bookmarkedAt: -1 });

        return new Response(JSON.stringify(bookmarks), {
            status: 200
        });

    } catch (error) {
        console.error("Error fetching bookmarks:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch bookmarks" }), {
            status: 500
        });
    }
};

// POST - Create a new bookmark
export const POST = async (req) => {
    try {
        const { promptId, promptTitle, promptText, category, tags } = await req.json();

        await connectToDB();

        const session = await getServerSession();
        
        if (!session || !session.user) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401
            });
        }

        // Check if bookmark already exists
        const existingBookmark = await Bookmark.findOne({
            user: session.user.id,
            promptId: promptId
        });

        if (existingBookmark) {
            return new Response(JSON.stringify({ error: "Already bookmarked" }), {
                status: 400
            });
        }

        const newBookmark = new Bookmark({
            user: session.user.id,
            promptId,
            promptTitle,
            promptText,
            category,
            tags
        });

        await newBookmark.save();

        return new Response(JSON.stringify(newBookmark), {
            status: 201
        });

    } catch (error) {
        console.error("Error creating bookmark:", error);
        return new Response(JSON.stringify({ error: "Failed to create bookmark" }), {
            status: 500
        });
    }
};

// DELETE - Remove a bookmark
export const DELETE = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const promptId = searchParams.get("promptId");

        await connectToDB();

        const session = await getServerSession();
        
        if (!session || !session.user) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401
            });
        }

        const deletedBookmark = await Bookmark.findOneAndDelete({
            user: session.user.id,
            promptId: promptId
        });

        if (!deletedBookmark) {
            return new Response(JSON.stringify({ error: "Bookmark not found" }), {
                status: 404
            });
        }

        return new Response(JSON.stringify({ message: "Bookmark removed successfully" }), {
            status: 200
        });

    } catch (error) {
        console.error("Error deleting bookmark:", error);
        return new Response(JSON.stringify({ error: "Failed to delete bookmark" }), {
            status: 500
        });
    }
};
