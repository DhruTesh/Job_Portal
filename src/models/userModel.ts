import { verify } from 'crypto';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
    number: {
        type: String,
        required: [true, 'Please enter a phone number'],
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyExpiry: Date,
});

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;