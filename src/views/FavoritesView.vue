<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import { Search, Movies, MoviesCard } from "../components";
import { Button } from "../components/shared";
import CardComponentType from "../types/CardComponentType";
import { useFavoritesStore } from "../stores/favorites";

const store = useFavoritesStore();

const allMovies = ref<Array<Omit<CardComponentType, "type">>>([]);
const searchQuery = ref<string>(store.searchQuery);
const isShortSwitchValue = ref<boolean>(store.isShort);

const filteredBySearchQueryMovies = ref<Array<Omit<CardComponentType, "type">>>(store.filterBySearchQuery());
const filteredByIsShortMovies = ref<Array<Omit<CardComponentType, "type">>>(store.filterBySearchQueryAndIsShort());

watch([store.favorites, searchQuery], ([allMovies, searchQuery]) => {
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

store.$subscribe((_mutation, state) => {
  allMovies.value = state.favorites;
});

onBeforeMount(() => {
  try {
    allMovies.value = store.favorites;
  } catch (e) {
    console.error(e);
  }
});

const changeSearchQueryValue = (value: string) => {
  searchQuery.value = value;
  store.searchQuery = value;
};

const changeIsShortSwitchValue = () => {
  isShortSwitchValue.value = !isShortSwitchValue.value;
  store.isShort = isShortSwitchValue.value;
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
        <Movies :movies="filteredByIsShortMovies" :CardComponent="MoviesCard" cardType="favorites" />
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
