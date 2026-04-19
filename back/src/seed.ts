import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User";

dotenv.config();

const mongoUri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/translate";

async function seedDatabase() {
  try {
    await mongoose.connect(mongoUri);
    console.log("✓ Connected to MongoDB");

    // Clear existing users (optional)
    // await User.deleteMany({});
    // console.log("✓ Cleared existing users");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "admin@translate.test" });
    if (existingAdmin) {
      console.log("✓ Admin user already exists");
    } else {
      const admin = new User({
        fullName: "Admin User",
        email: "admin@translate.test",
        password: "admin123456", // Note: In production, use proper password hashing
        role: "admin",
      });
      await admin.save();
      console.log("✓ Admin user created:");
      console.log("  Email: admin@translate.test");
      console.log("  Password: admin123456");
      console.log("  ID:", admin._id);
    }

    // Check if regular user already exists
    const existingUser = await User.findOne({ email: "user@translate.test" });
    if (existingUser) {
      console.log("✓ Regular user already exists");
    } else {
      const user = new User({
        fullName: "Test User",
        email: "user@translate.test",
        password: "user123456", // Note: In production, use proper password hashing
        role: "user",
      });
      await user.save();
      console.log("✓ Regular user created:");
      console.log("  Email: user@translate.test");
      console.log("  Password: user123456");
      console.log("  ID:", user._id);
    }

    console.log("\n✅ Database seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
