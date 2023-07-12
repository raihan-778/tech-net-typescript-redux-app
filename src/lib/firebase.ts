import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDc6Ek2Ff6UWrv6KPz7dt6Srz-5gYYTxNQ',
  authDomain: 'tech-net-auth-11183.firebaseapp.com',
  projectId: 'tech-net-auth-11183',
  storageBucket: 'tech-net-auth-11183.appspot.com',
  messagingSenderId: '117605753777',
  appId: '1:117605753777:web:0983f2c89e4753c7b55390',
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
console.log(firebaseConfig.apiKey);
const app = initializeApp(firebaseConfig);
// console.log(app);

export const auth = getAuth(app);
