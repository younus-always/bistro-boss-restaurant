import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAwW5NO51oj6vioT78vnRPAdlp3g5ZilV4",
      authDomain: "bistro-restaurant-63f0e.firebaseapp.com",
      projectId: "bistro-restaurant-63f0e",
      storageBucket: "bistro-restaurant-63f0e.firebasestorage.app",
      messagingSenderId: "863117195601",
      appId: "1:863117195601:web:683b7d9430164fcf123b70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);