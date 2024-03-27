// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB1Bxhi7YZk0Nf6KbPpxPmB05--N_UgoAE',
  authDomain: 'esa-project-b21dc.firebaseapp.com',
  projectId: 'esa-project-b21dc',
  storageBucket: 'esa-project-b21dc.appspot.com',
  messagingSenderId: '136195417238',
  appId: '1:136195417238:web:168bcc90996648c6a80eb7',
  measurementId: 'G-8P3WRHX5JH',
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyCfjG-RLGh4VqAL5XSxS9EG4IVK4R8XF-E',
//   authDomain: 'filmoteka-23.firebaseapp.com',
//   projectId: 'filmoteka-23',
//   storageBucket: 'filmoteka-23.appspot.com',
//   messagingSenderId: '1050534310211',
//   appId: '1:1050534310211:web:687145a2426964cba8fff6',
//   measurementId: 'G-0W38ZQRK92',
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// console.log('Hello, Firestore!');
