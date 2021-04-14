import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

import * as firebase from 'firebase'
import 'firebase/firestore';
import { getStudents } from './useActivities';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const login = async ({ matricula, senha }) => {
    if (matricula)
      return await getStudents(matricula).then(student => {
        let permission = false;
        if(student){
          if (student.senha == senha) {
            permission = true;
            setUser(student)
            setAuthenticated(true);
          }
        }
        return permission
      })

    return false;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be use within an authProvider');
  }
  return context;
}

export { AuthProvider, useAuth };