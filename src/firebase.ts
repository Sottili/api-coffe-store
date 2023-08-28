import admin from "firebase-admin";
import serviceAccount from "./keys.json";

export const Admin = admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    projectId: serviceAccount.project_id,
  }),
  databaseURL: "https://foxapp-d3f9f-default-rtdb.firebaseio.com",
});
