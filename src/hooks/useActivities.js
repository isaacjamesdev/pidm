import * as firebase from 'firebase'
import 'firebase/firestore';

const STUDENT_COLLECTION = "alunos";

var firebaseConfig = {
  apiKey: "AIzaSyALPVEepVs0ornjTDILyYp8bPgXKqgutf4",
  authDomain: "pidm-2020-2.firebaseapp.com",
  projectId: "pidm-2020-2",
  storageBucket: "pidm-2020-2.appspot.com",
  messagingSenderId: "752484223716",
  appId: "1:752484223716:web:e34132cabfb9802e293af1",
  measurementId: "G-S8C7JCKWYV"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getActivities = async (matricula) => {
  const activities = [];
  try {
    const snapshot = await db.collection(matricula).get();
    
    if(snapshot && snapshot.forEach){
      snapshot.forEach((doc) => {
        activities.push({
          id: doc.id,
          ...doc.data()
        });
      });
    }
    return activities || [];
  } catch (error) {
    alert("ops! Reinicie o APP")
  }
}

export const setActivity = (matricula, activity) => {
  try {
    db.collection(matricula).doc().set(activity)
  } catch (error) {
    alert("ops! Reinicie o APP")
  }
}

export const editActivity = (matricula, id, activity) => {
  try {
    db.collection(matricula).doc(id).set(activity)
  } catch (error) {
    alert("ops! Reinicie o APP")
  }
}

export const deleteActivity = (matricula, id) => {
  try {
    db.collection(matricula).doc(id).delete()
  } catch (error) {
    alert("ops! Reinicie o APP")
  }
}

/* ------------------------------------ */

export const getStudents = async (matricula) => {
  const students = [];
  try {
    if (!!matricula) {
      const student = await db.collection(STUDENT_COLLECTION).doc(matricula).get();
      return student.data();
    } else {
      const snapshot = await db.collection(STUDENT_COLLECTION).get();
      snapshot.forEach((doc) => {
        students.push({
          id: doc.id,
          ...doc.data()
        });
      });
      return snapshot || [];
    }
  } catch (error) {
    alert("ops! Reinicie o APP")
  }
}

export const setStudent = (student) => {
  try {
    db.collection(STUDENT_COLLECTION).doc(student.matricula).set(student)
  } catch (error) {
    alert("ops! Reinicie o APP")
  }
}


export const editStudent = (matricula, student) => {
  try {
    db.collection(STUDENT_COLLECTION).doc(matricula).set(student)
  } catch (error) {
    alert("ops! Reinicie o APP")
  }
}

export const deleteStudent = (id) => {
  try {
    db.collection(STUDENT_COLLECTION).doc(id).delete()
  } catch (error) {
    alert("ops! Reinicie o APP")
  }
}