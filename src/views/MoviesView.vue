<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import { Search, Movies, MoviesCard } from "../components";
import { Button } from "../components/shared";
import api from "../api";
import CardComponentType from "../types/CardComponentType";
import { storeToRefs } from "pinia";
import { useFavoritesStore } from "../stores/favorites";

const store = useFavoritesStore();
const { favorites } = storeToRefs(store);
console.log(favorites)

watch(favorites, val => console.log(val))

const allMovies = ref<Array<Omit<CardComponentType, "type">>>([]);
const searchQuery = ref<string>("");
const isShortSwitchValue = ref<boolean>(false);

const filteredBySearchQueryMovies = ref<Array<Omit<CardComponentType, "type">>>([]);
const filteredByIsShortMovies = ref<Array<Omit<CardComponentType, "type">>>([]);

watch([allMovies, searchQuery], ([allMovies, searchQuery]) => {
  if (!allMovies.length) {
    filteredBySearchQueryMovies.value = [];
  }

  filteredBySearchQueryMovies.value = allMovies.filter((movie: any) => {
    return movie.title?.toLowerCase().includes(searchQuery.toLowerCase());
  });
});

watch([filteredBySearchQueryMovies, isShortSwitchValue], ([filteredBySearchQueryMovies, isShortSwitchValue]) => {
  if (isShortSwitchValue) {
    filteredByIsShortMovies.value = filteredBySearchQueryMovies.filter((movie: any) => movie.duration <= 40);

    return;
  }

  filteredByIsShortMovies.value = filteredBySearchQueryMovies;
});

onBeforeMount(async () => {
  try {
    const res = await api.getMovies();

    allMovies.value = res.map((movie: any) => {
      return {
        id: movie.id,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        description: movie.alternativeText || "постер к фильму",
        title: movie.nameRU || movie.nameEN,
        duration: movie.duration,
        isSaved: false,
      };
    });
  } catch (e) {
    console.error(e);
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
      <div>
        <Movies :movies="filteredByIsShortMovies" :CardComponent="MoviesCard" cardType="movies" />
        <Button
          class="mx-auto mt-12 mb-20 flex h-9 w-60 items-center justify-center rounded-md bg-dark-charcoal text-xs font-medium text-gray-50 md:w-80"
        >
          Ещё
        </Button>
      </div>
      <Footer />
    </div>
  </div>
</template>
