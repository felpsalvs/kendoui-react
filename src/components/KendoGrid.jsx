"use client";

import { useMovies } from "@/contexts/MoviesContext";
import { process } from "@progress/kendo-data-query";
import {
  GridColumn as Column,
  Grid,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import "@progress/kendo-theme-default/dist/all.css";
import { useEffect } from "react";

export const KendoGrid = () => {
  const {
    dataState,
    moviesList,
    exportPDF,
    fetchMovies,
    gridPDFExportRef,
    onDataStateChange,
  } = useMovies();

  useEffect(() => {
    fetchMovies();
  }, []);

  const grid = (
    <Grid
      className="grid"
      data={process(moviesList, dataState)}
      filterable={true}
      pageable={true}
      {...dataState}
      onDataStateChange={onDataStateChange}
      total={moviesList.length}
    >
      <GridToolbar>
        <button
          title="Export PDF"
          onClick={exportPDF}
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
        >
          Export PDF
        </button>
      </GridToolbar>
      <Column className="column" field="title" filter="text" title="Title" />
      <Column
        className="column"
        field="overview"
        filterable={false}
        title="Overview"
      />
      <Column
        className="column"
        field="releaseDate"
        filter="date"
        title="Release Date"
      />
      <Column
        className="column"
        field="voteAverage"
        filter="numeric"
        title="Note"
      />
      <Column
        className="column"
        field="originalLanguage"
        filter="text"
        title="Original Lang"
      />
    </Grid>
  );

  return (
    <div className="grid-container">
      {grid}
      <GridPDFExport ref={gridPDFExportRef} fileName="movies-export.pdf">
        {grid}
      </GridPDFExport>
    </div>
  );
};
