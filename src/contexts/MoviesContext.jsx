import { createContext, useContext, useRef, useState } from "react";

import { api } from "@/services/api";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [dataState, setDataState] = useState({ take: 10, skip: 0 });
  const [moviesList, setMoviesList] = useState([]);

  const gridPDFExportRef = useRef(null);
  const onDataStateChange = (event) => setDataState(event.dataState);

  const exportPDF = () => {
    if (gridPDFExportRef.current) gridPDFExportRef.current.save();
  };

  const fetchMovies = async () => {
    try {
      const data = await api.getMovies();
      setMoviesList(data);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        dataState,
        moviesList,
        exportPDF,
        fetchMovies,
        gridPDFExportRef,
        onDataStateChange,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => useContext(MoviesContext);
