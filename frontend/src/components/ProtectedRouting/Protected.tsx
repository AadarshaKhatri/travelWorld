import { createContext, useEffect, useReducer, ReactNode, Dispatch } from "react";


// Define the shape of the state
interface StateType {
  user: any;

  loading: boolean;
  error: any;
}

// Define the shape of actions
interface ActionType {
  type: string;
  payload?: any;
  token?:any,
}

// Initial state
const initial_state: StateType = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null,

  loading: false,
  error: null,
};

// Context type includes state and dispatch
interface AuthContextType extends StateType {
  dispatch: Dispatch<ActionType>;
}

// Create context with a default value
export const AuthContext = createContext<AuthContextType>({
  ...initial_state,
  dispatch: () => undefined, // Placeholder function for dispatch
});

// Reducer function
const AuthReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "LOGIN START":
      return {
     
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
      
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAIL":
      return {

        user: null,
        loading: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {

        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGOUT":
      return {

        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

// AuthContextProvider component
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  // Save user to localStorage whenever it changes
  useEffect(() => {
   
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
