// Câu 3:

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"; // Import này dùng để khởi tạo một trang web
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"; // import này dùng để tạo tài khoản cho người dùng hoặc đăng nhập.

const firebaseConfig = {
  apiKey: "AIzaSyDz732QfFKUTkpBpKClG4afPIQaK9PzYNI",
  authDomain: "fire-base-53764.firebaseapp.com",
  databaseURL: "https://fire-base-53764-default-rtdb.firebaseio.com",
  projectId: "fire-base-53764",
  storageBucket: "fire-base-53764.appspot.com",
  messagingSenderId: "608918146594",
  appId: "1:608918146594:web:335a82e44762136505847b",
  measurementId: "G-44D2LDBBC4",
}; //
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Resgister = async (auth, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    alert("Đăng kí thành công"); // hàm const này dùng để thông báo cho người dùng là đã đăng ký thành công
    console.log(res);
  } catch (error) {
    alert("Đăng kí thất bại"); // hàm const này dùng để thông báo cho người dùng là đã đăng ký thất bại
    console.log(error.code);
  }
};
