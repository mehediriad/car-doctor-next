import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    providers: [
        // Providers এখানে যোগ করতে হবে
    ],
    callbacks: {
        // Callbacks এখানে লিখতে হবে
    },
    pages: {
        // Custom pages এর রুট
    },
    database: process.env.DATABASE_URL,
    session: {
        // Session সংক্রান্ত সেটিংস
    },
    jwt: {
        // JWT কনফিগারেশন
    },
    events: {
        // ইভেন্ট হ্যান্ডলার
    },
    debug: false, // ডিবাগ মোড চালু বা বন্ধ
});
