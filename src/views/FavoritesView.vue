<script setup lang="ts">
import { computed, ref } from "vue";
import { Search, Movies, MoviesCard } from "../components";
import { Button } from "../components/shared";
import { useFavoritesStore } from "../stores/favorites";
import { storeToRefs } from "pinia";

const store = useFavoritesStore();
const { favorites: allMovies } = storeToRefs(store);

const searchQuery = ref<string>(store.searchQuery);
const isShortSwitchValue = ref<boolean>(store.isShort);

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
      <Movies :movies="filteredByIsShortMovies" :CardComponent="MoviesCard" cardType="favorites" />
      <Button
        class="mx-auto mt-12 mb-20 flex h-9 w-60 items-center justify-center rounded-md bg-dark-charcoal text-xs font-medium text-gray-50 md:w-80"
      >
        Ещё
      </Button>
      <Footer />
    </div>
  </div>
</template>
