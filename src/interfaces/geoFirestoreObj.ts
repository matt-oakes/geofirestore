import * as firebase from 'firebase-admin';

export interface GeoFirestoreObj {
  g: string;
  l: firebase.firestore.GeoPoint;
  d: any;
}
