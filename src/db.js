import Firebase from 'firebase';
import config from './config';

const Database = () => {
    Firebase.initializeApp(config);
    let ref = Firebase.database().ref('/results');
   let get = ref.on('value', snapshot => {
      const dataDb = snapshot.val();
      console.log(dataDb);
    })
  }


  export default Database;
