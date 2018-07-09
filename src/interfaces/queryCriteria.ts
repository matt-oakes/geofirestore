import * as firebase from 'firebase-admin';

export interface QueryCriteria {
  center?: firebase.firestore.GeoPoint;
  radius?: number;
}