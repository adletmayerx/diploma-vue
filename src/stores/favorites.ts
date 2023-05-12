import { defineStore } from "pinia";
import CardComponentType from "../types/CardComponentType";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  let savedData: Array<Omit<CardComponentType, "type">> = [];

  if (localStorage.getItem("favorites")) {
    savedData = JSON.parse(localStorage.getItem("favorites")!);
  }

  const favorites = ref<Array<Omit<CardComponentType, "type">>>(savedData);
  const searchQuery = ref<string>("");
  const isShort = ref<boolean>(false);

  const add = (movie: Omit<CardComponentType, "type">) => {
    favorites.value.push(movie);
    console.log("add", favorites.value);
    saveToLocalStorage();
  };
  const remove = (id: string) => {
    favorites.value = favorites.value.filter((movie) => movie.id !== id);
    console.log("remove", favorites.value);
    saveToLocalStorage();
  };
  const saveToLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites.value));
  };

  const filterBySearchQuery = () => {
    return favorites.value.filter((movie: any) => {
      return movie.title?.toLowerCase().includes(searchQuery.value.toLowerCase());
    });
  };

  const filterBySearchQueryAndIsShort = () => {
    return favorites.value.filter((movie: any) => {
      if (!isShort.value) {
        return movie.title?.toLowerCase().includes(searchQuery.value.toLowerCase());
      } else {
        return movie.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) && movie.duration <= 40;
      }
    });
  };

  return { favorites, searchQuery, isShort, add, remove, filterBySearchQuery, filterBySearchQueryAndIsShort };
});
