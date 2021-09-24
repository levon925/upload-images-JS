import { selector } from 'postcss-selector-parser';
import { upload } from './upload';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


upload('#file', {
    multi: true, //загрузка сразу нескольки файлов
    accept: ['.png', '.jpg', '.jpeg', '.gif', '.svg'], //тип файла, который можно будет загружать(к примеру только картинки)
    onUpload(files) {
        //console.log('Files:', files)
        files.forEach(file => {
            const ref = storage.ref(`images/${file.name}`)
            const task = ref.put(file)

            task.on('state_changed', snapshot => {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log(percentage)
            }, error => {
                console.log(error)
            }, () => {
                console.log('complete')
            })
        })
    }
})

// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDAPamKEQT945cioM1mSPPNncaPuV9UT9Y",

    authDomain: "upload-images-2c651.firebaseapp.com",

    projectId: "upload-images-2c651",

    storageBucket: "upload-images-2c651.appspot.com",

    messagingSenderId: "463345142101",

    appId: "1:463345142101:web:c1edd02adb5d8a6b2207dc"

};


// Initialize Firebas

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//const storage = firebase.storage()
console.log(db)