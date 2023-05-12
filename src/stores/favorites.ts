import { defineStore } from "pinia";
import CardComponentType from "../types/CardComponentType";

export const useFavoritesStore = defineStore("favorites", {
  state: () => {
    return { favorites: [] as Array<Omit<CardComponentType, "type">> };
  },
  getters: {
    getFavorites: (state) => state,
  },
  actions: {
    add(movie: Omit<CardComponentType, "type">) {
      this.favorites.push(movie);
    },
    remove(id: string) {
      this.favorites = this.favorites.filter((movie) => movie.id !== id);
    },
  },
  // other options...
});
