// src/app/api/testDB/addSchool/route.js

import { db } from "@/lib/db";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Validate required fields
    const requiredFields = ['name', 'address', 'city', 'state', 'contact', 'email_id'];
    const missingFields = [];
    
    requiredFields.forEach(field => {
      if (!formData.get(field)) {
        missingFields.push(field);
      }
    });
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");
    const imageFile = formData.get("image");

    let imagePath = "";

    // Save file if uploaded
    if (imageFile && typeof imageFile === "object") {
      try {
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const filename = `${Date.now()}-${imageFile.name.replace(/\s+/g, '-')}`;
        const uploadDir = path.join(process.cwd(), "public/schoolImages");
        
        // Ensure directory exists
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        
        const uploadPath = path.join(uploadDir, filename);
        fs.writeFileSync(uploadPath, buffer);
        imagePath = `/schoolImages/${filename}`;
      } catch (fileError) {
        console.error("File upload error:", fileError);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    // Insert into DB
    const [result] = await db.query(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, email_id, imagePath]
    );

    return NextResponse.json({
      message: "School added successfully!",
      id: result.insertId,
      image: imagePath,
    });
    
  } catch (error) {
    console.error("❌ Error saving school:", error);
    return NextResponse.json(
      { error: "Failed to save school. Please try again." },
      { status: 500 }
    );
  }
}


