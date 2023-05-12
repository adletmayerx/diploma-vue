<script setup lang="ts">
import CardComponentType from "../types/CardComponentType";
import { useFavoritesStore } from "../stores/favorites";
// import { Component } from "vue";

const store = useFavoritesStore();

type Props = {
  movies: Array<Omit<CardComponentType, "type">>;
  CardComponent: any;
  cardType: "movies" | "favorites";
};

defineProps<Props>();

const handleCardClick = (movie: Omit<CardComponentType, "type">) => {
  if (movie.isSaved === true) {
    store.remove(movie.id);
  } else {
    store.add(movie);
  }

  movie.isSaved =!movie.isSaved;
};
</script>

<template>
  <div class="flex flex-col items-center justify-start px-3 pt-10 pb-7 md:px-7 md:pt-16 xl:px-16">
    <div class="grid grid-cols-1 items-center gap-3 md:grid-cols-2 md:gap-7 xl:grid-cols-3 xl:gap-6">
      <component
        :is="CardComponent"
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :type="cardType"
        :isSaved="movie.isSaved"
        :image="movie.image"
        :description="movie.description"
        :title="movie.title"
        :duration="movie.duration"
        @click="handleCardClick(movie)"
      ></component>
    </div>
  </div>
</template>
