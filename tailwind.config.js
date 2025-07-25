/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // ✅ This is what enables Tailwind in your React components
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
