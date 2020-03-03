import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = 
    {
        apiKey: "AIzaSyBoIiD2o_uH51MkZ1uhtxjgmCcDflxSLDk",
        authDomain: "king-clothing-ca050.firebaseapp.com",
        databaseURL: "https://king-clothing-ca050.firebaseio.com",
        projectId: "king-clothing-ca050",
        storageBucket: "king-clothing-ca050.appspot.com",
        messagingSenderId: "151044396976",
        appId: "1:151044396976:web:990833b130ff7a34ed2875",
        measurementId: "G-8L3R7EMTVM"
      };

   firebase.initializeApp(config); 
   
   export const auth = firebase.auth();
   export const firestore = firebase.firestore();
   export const createUserProfileDoc = (async(userAuth,additionalData)=>{
        if(!userAuth) return;
      const  userRef = firestore.doc(`/users/${userAuth.uid}`)
      const snapShot = await userRef.get();
      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          console.log("***Display Name :",displayName)
        //   if(!displayName && (typeof additionalData!==undefined)){
        //       displayName= additionalData
        //   }
          const createdAt = new Date();
          try{ 
              await userRef.set({displayName,email,createdAt,...additionalData}) 
          }catch(error){
              console.log("Error Snapshot :",error)
          }
      }
      return userRef;
   })
   /* This method is to fetch the data and transform it into list of different objects  */
  export const convertCollectionsSnapShotToMap = (snapShot)=>{
          const transformedData = snapShot.docs.map(doc=>{
                  const collection = doc.data();
                  const {title,items} = collection;
                  return {
                      routeName : encodeURI(collection.title.toLowerCase()),
                      id : doc.id,
                      title , 
                      items
                  }
          })
          // console.log('transformedData : ',transformedData);
          return transformedData.reduce((accumulator,item)=>{
               accumulator[item.title.toLowerCase()]= item
               return accumulator
          },{})  
  }
  
  /* This method is to write SHOP_DATA file data into FB DB collections `collections` */ 
  export const addCollectionAndDoc = async (collectionKey,collections)=>{
        const collectionRef = firestore.collection(collectionKey)
        const batch = firestore.batch();
        collections.map(collection =>{
           const docRef=collectionRef.doc();
           batch.set(docRef,collection)
        })
        return await batch.commit()
  }
   const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt:'select_account'})

   export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

   export default firebase;