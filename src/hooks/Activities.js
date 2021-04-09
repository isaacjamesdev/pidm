import * as firebase from 'firebase'
import 'firebase/firestore';

const STUDENT_COLLECTION = "alunos";
const ACTIVITIES_COLLECTION = "atividades";

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

export const getActivities = async () => {
  const activities = [];
  try {
    const snapshot = await db.collection(ACTIVITIES_COLLECTION).get();
    snapshot.forEach((doc) => {
      activities.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return activities || [];
  } catch (error) {
    throw new Error("ops! Algo deu errado");
  }
}

export const setActivity = (activity) => {
  try {
    db.collection(ACTIVITIES_COLLECTION).doc().set(activity)
  } catch (error) {
    throw new Error("ops! Algo deu errado");
  }
}

export const editActivity = (id, activity) => {
  try {
    db.collection(ACTIVITIES_COLLECTION).doc(id).set(activity)
  } catch (error) {
    throw new Error("ops! Algo deu errado");
  }
}

export const deleteActivity = (id) => {
  try {
    db.collection(ACTIVITIES_COLLECTION).doc(id).delete()
  } catch (error) {
    throw new Error("ops! Algo deu errado");
  }
}

export const getStudents = async (matricula) => {
  const students = [];
  try {
    if (!!matricula) {
      const student = await db.collection(STUDENT_COLLECTION).doc(matricula).get();
      return student;
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
    throw new Error("ops! Algo deu errado");
  }
}

export const setStudent = (student) => {
  try {
    db.collection(STUDENT_COLLECTION).doc(student.matricula).set(student)
  } catch (error) {
    throw new Error("ops! Algo deu errado");
  }
}

export const deleteStudent = (id) => {
  try {
    db.collection(STUDENT_COLLECTION).doc(id).delete()
  } catch (error) {
    throw new Error("ops! Algo deu errado");
  }
}