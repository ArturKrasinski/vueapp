import FirebaseConfig from '../../config/firebase'
import Firebase from 'firebase'

let firebaseApp = Firebase.initializeApp(FirebaseConfig)
export default firebaseApp.database()
