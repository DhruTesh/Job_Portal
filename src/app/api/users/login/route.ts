import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



connect()


export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { email, password } = requestBody;

        console.log(requestBody);

        if (!email || !password) {
            return NextResponse.json({ error: "Please fill in all fields" }, { status: 400 });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400 });
        }

        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ error: "Incorrect password" }, { status: 400 });
        }

        //create token data
        const tokenData = {
            userId: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        };

        // Create JWT token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: "1h",
        });

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
            
        })
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });

    }
}