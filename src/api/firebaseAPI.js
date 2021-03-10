import * as firebase from 'firebase'
import 'firebase/firestore';

const COLLECTION_NAME = "PIDM";
const DOC_NAME = "Alunos";

const firebaseConfig = {
  apiKey: "AIzaSyALPVEepVs0ornjTDILyYp8bPgXKqgutf4",
  authDomain: "pidm-2020-2.firebaseapp.com",
  projectId: "pidm-2020-2",
  storageBucket: "pidm-2020-2.appspot.com",
  messagingSenderId: "752484223716",
  appId: "1:752484223716:web:e34132cabfb9802e293af1",
  measurementId: "G-S8C7JCKWYV"
};

firebase.initializeApp(firebaseConfig);
const dbh = firebase.firestore();

export const cadastrarAluno = (aluno) =>{
  dbh.collection(COLLECTION_NAME)
    .doc(DOC_NAME)
    .set(
      `${aluno.nome}:${aluno.id}`
    ).then(()=>{
      alert("Cadastrado com sucesso")
    }).catch(()=>{
      alert("Ops! Algo deu errado :(")
    });
  };
  
  export const consultarAluno = (matricula) =>{
    try {
      const aluno = db.collection(COLLECTION_NAME)
      .doc(DOC_NAME)
      .get();
      return aluno;
    } catch (error) {
      alert("Ops! Algo deu errado :(")
    }
};