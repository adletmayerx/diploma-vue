<script setup lang="ts">
import { computed, onBeforeMount, ref } from "vue";
import { Search, Movies, MoviesCard } from "../components";
import { Button } from "../components/shared";
import api from "../api";
import CardComponentType from "../types/CardComponentType";
import { storeToRefs } from "pinia";
import { useFavoritesStore } from "../stores/favorites";

const store = useFavoritesStore();
const { favorites } = storeToRefs(store);

const allMovies = ref<Array<Omit<CardComponentType, "type">>>([]);
const searchQuery = ref<string>("");
const isShortSwitchValue = ref<boolean>(false);

const filteredBySearchQueryMovies = computed(() => {
  return allMovies.value.filter((movie: any) => {
    return movie.title?.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const filteredByIsShortMovies = computed(() => {
  if (isShortSwitchValue.value) {
    return filteredBySearchQueryMovies.value.filter((movie: any) => movie.duration <= 40);
  }

  return filteredBySearchQueryMovies.value;
});

onBeforeMount(async () => {
  if (localStorage.getItem("movies")) {
    allMovies.value = JSON.parse(localStorage.getItem("movies")!);
  } else {
    try {
      const res = await api.getMovies();

      allMovies.value = res.map((movie: any) => {
        return {
          id: movie.id,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          description: movie.alternativeText || "постер к фильму",
          title: movie.nameRU || movie.nameEN,
          duration: movie.duration,
          isSaved: favorites.value.find((fav) => fav.id === movie.id),
        };
      });

      localStorage.setItem("movies", JSON.stringify(allMovies.value));
    } catch (e) {
      console.error(e);
    }
  }
});

const changeSearchQueryValue = (value: string) => {
  searchQuery.value = value;
};

const changeIsShortSwitchValue = () => {
  isShortSwitchValue.value = !isShortSwitchValue.value;
};
</script>

<template>
  <div class="flex flex-col items-center bg-mine-shaft">
    <div class="flex w-full max-w-7xl flex-col">
      <Search
        :isShortSwitchValue="isShortSwitchValue"
        @changeSearchQuery="changeSearchQueryValue"
        @changeIsShortsSwitch="changeIsShortSwitchValue"
      />
      <Movies :movies="filteredByIsShortMovies" :CardComponent="MoviesCard" cardType="movies" />
      <Button
        class="mx-auto mt-12 mb-20 flex h-9 w-60 items-center justify-center rounded-md bg-dark-charcoal text-xs font-medium text-gray-50 md:w-80"
      >
        Ещё
      </Button>
      <Footer />
    </div>
  </div>
</template>
