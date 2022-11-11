import React, { useContext, useEffect, useReducer } from "react";
import { tvMazeGirls } from "../services/data"

const MovieContext = React.createContext()

function movieReducer(state, action) {
  switch (action.type) {
    case "setMovie": {
      return {
        ...state,
        movie: action.payload
      }
    }
    case "setLoading": {
      return {
        ...state,
        loading: action.payload
      }
    }
    case "setBanner": {
      return {
        ...state,
        banner: action.payload
      }
    }
  }
}

export function MovieProvider({children}) {
  const [state, dispatch] = useReducer(movieReducer, { movie: [], loading: false, banner: {} })

  async function fetchMovie(param) {
    try {
      dispatch({ type: "setLoading", payload: true });

      const data = await tvMazeGirls(param);
      if (data) {
        dispatch({ type: "setMovie", payload: data });
      }
    } catch (error) {
      console.log({ error });
    } finally {
      dispatch({ type: "setLoading", payload: false });
    }
  }

  useEffect(() => {
    fetchMovie('girls')
  }, [])

  const value = {state, dispatch, fetchMovie}
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}

export function useMovie() {
  const context = useContext(MovieContext)

  if (context === undefined) {
    throw new Error('useMovie must be used within a CountProvider')
  }
  return context

}