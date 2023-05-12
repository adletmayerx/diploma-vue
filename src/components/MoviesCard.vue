<script setup lang="ts">
import { HeartIcon, HeartFilledIcon, RemoveIcon } from "./icons";
// import CardComponentType from "../types/CardComponentType";
import { Button } from "./shared";

type CardComponentType = {
  type: "movies" | "favorites";
  image: string;
  description: string;
  title: string;
  duration: string;
  isSaved: boolean;
};

defineProps<CardComponentType>();
</script>

<template>
  <div class="flex w-fit flex-col overflow-hidden rounded bg-raisin-black">
    <div class="relative h-40 w-72 shrink-0 overflow-hidden rounded md:h-44 md:w-80">
      <img :src="image" :alt="description" class="w-full object-cover h-full" />
    </div>
    <div class="flex flex-col gap-3 p-3">
      <div class="flex items-center justify-between">
        <p class="grow text-xs font-medium text-gray-50">{{ title }}</p>
        <Button class="">
          <RemoveIcon v-if="type === 'favorites'" />
          <HeartFilledIcon v-else-if="isSaved" />
          <HeartIcon v-else />
        </Button>
      </div>
      <p class="text-xs text-suva-grey">{{ duration }} мин</p>
    </div>
  </div>
</template>
