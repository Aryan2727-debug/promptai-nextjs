import { Schema, model, models } from "mongoose";

const BookmarkSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required!']
    },
    promptId: {
        type: String,
        required: [true, 'Prompt ID is required!']
    },
    promptTitle: {
        type: String,
        required: [true, 'Prompt title is required!']
    },
    promptText: {
        type: String,
        required: [true, 'Prompt text is required!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!']
    },
    tags: {
        type: [String],
        required: [true, 'Tags are required!']
    },
    bookmarkedAt: {
        type: Date,
        default: Date.now
    }
});

// Create compound index to prevent duplicate bookmarks
BookmarkSchema.index({ user: 1, promptId: 1 }, { unique: true });

const Bookmark = models.Bookmark || model('Bookmark', BookmarkSchema);

export default Bookmark;
