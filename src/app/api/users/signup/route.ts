import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from "bcryptjs";



connect()



export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { username, email, password, number } = requestBody;

        console.log(requestBody);

        if (!username || !email || !password || !number) {
            return NextResponse.json({ error: "Please fill in all fields" }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            number,
            role: "user",
        });
        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({ 
            message: "User created successfully",
            success: true,
            savedUser
         }, 
         { status: 201 });


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });

    }
}