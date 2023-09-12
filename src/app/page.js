"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import MainContent from "@/components/MainContent";
import SearchMain from "@/components/SearchMain";
import Sidebar from "@/components/Sidebar";
import { getMovies, getMoviesBySearch } from "@/utils/Fetcher";
import React, { useEffect, useState } from "react";

export default function Stagetwo() {
  const [searchText, setSearchText] = useState("");

  const {
    data: searchedmovie,
    error,
    isLoading,
  } = getMoviesBySearch(searchText);

  const {
    data: movies,
    error: moviesError,
    isLoading: moviesLoading,
  } = getMovies();
  console.log(
    "swr:",
    movies?.results,
    searchedmovie?.results,
    isLoading,
    error,
    searchText
  );
  if (moviesLoading === true) return <Loading />;
  else if (moviesError) return <div>{moviesError}</div>;
  else
    return (
      <div className="text-[#333333] relative">
        <Hero setSearchText={setSearchText} movies={searchedmovie?.results} />

        {searchedmovie?.results.length >= 1 ? (
          <SearchMain movies={searchedmovie?.results} isLoading={isLoading} />
        ) : (
          <MainContent movies={movies?.results} />
        )}
        <Footer />
      </div>
    );
}
