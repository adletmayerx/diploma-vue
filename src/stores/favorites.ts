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
    saveToLocalStorage();
  };
  const remove = (id: string) => {
    favorites.value = favorites.value.filter((movie) => movie.id !== id);
    saveToLocalStorage();
  };
  const saveToLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites.value));
  };

  return { favorites, searchQuery, isShort, add, remove,  };
});
