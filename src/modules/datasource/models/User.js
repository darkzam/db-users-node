// Dependencies
import mongoose from 'mongoose';

// Schema
export const UserSchema = new mongoose.Schema({
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], index: true },
    user_id: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], index: true },
    connection: String,
    isSocial: false
}, { timestamps: true });

export default mongoose.model('User', UserSchema);