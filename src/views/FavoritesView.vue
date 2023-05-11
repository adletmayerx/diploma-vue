<script setup lang="ts">
import { Search, Movies, MoviesCard } from "../components";

const MOVIES = [
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: false,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: true,
    },
    {
      image: "/movies-image.png",
      description: "movie desc",
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      isSaved: false,
    },
  ];
</script>

<template>
  <div class="flex flex-col items-center bg-mine-shaft">
    <div class="flex w-full max-w-7xl flex-col">
      <Search />
      <Movies :movies='MOVIES' :CardComponent='MoviesCard' cardType="movies" />
      <Footer />
    </div>
  </div>
</template>
