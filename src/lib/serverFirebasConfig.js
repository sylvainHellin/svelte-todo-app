// import { VITE_apiKey, VITE_authDomain,  VITE_project, VITE_storageBucket, VITE_messagingSenderId, VITE_appId, VITE_measurementId} from '$env/static/private';

// export const firebaseConfig = {
//     apiKey: VITE_apiKey,
//     authDomain: VITE_authDomain,
//     projectId: VITE_projectId,
//     storageBucket: VITE_storageBucket,
//     messagingSenderId: VITE_messagingSenderId,
//     appId: VITE_appId,
//     measurementId: VITE_measurementId
// };

export const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};