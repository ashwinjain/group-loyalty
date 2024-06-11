import { getDoc, getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Query,
  DocumentData,
  DocumentReference,
  Firestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import { app } from "./firebaseConfig";

import HomeScreen from "@/app";
const docs = [
  "TjNJIi6PrPSk03cm0xOU",
  "UBqh8RH9HZ6Wf2dE0rtt",
  "XkOc67PIUq0bUu1zRNKZ",
  "n2ZRSdS6Jkv07P6XFNpC",
];

export class DatabaseAPI {
  firestoreDB: Firestore;
  constructor() {
    this.firestoreDB = getFirestore(app);
  }

  private async getUserDocument(
    ref: DocumentReference<DocumentData>
  ): Promise<boolean> {
    try {
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        if (docSnap.data().cardholder === true) {
          return true;
        }
        return false;
      } else {
        console.log("No such document!");
        return false;
      }
    } catch (error) {
      console.error("Error getting document:", error);
      throw new Error("Failed to get document");
    }
  }

  public async isCardHolderByEmail(email: string): Promise<boolean> {
    try {
      const ref = doc(this.firestoreDB, "users", email);
      return await this.getUserDocument(ref);
    } catch (error) {
      console.error("Error checking card holder by email:", error);
      return false;
    }
  }

  public async getEmployeesInGroup(): Promise<DocumentData[]> {
    const q: Query<DocumentData> = query(
      collection(this.firestoreDB, "users"),
      where("group", "==", true)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  }

  public async updateEmployeeGroupStatus(email: string, status: boolean) {
    const ref = doc(this.firestoreDB, "users", email);
    console.log(ref.path);
    await updateDoc(ref, { group: true });
  }
}
