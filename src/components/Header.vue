<script setup lang="ts">
import clsx from "clsx";
import { HeaderLogoIcon } from "./icons";
import { RouterLink, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <header :class="clsx('flex justify-center', [route.path === '/' ? 'bg-tiber' : 'bg-mine-shaft'])">
    <div class="flex w-full max-w-7xl items-center justify-between px-4 py-5 md:px-8 xl:px-16">
      <HeaderLogoIcon @click="router.push('/')" class="cursor-pointer" />
      <div class="flex justify-start gap-4 md:gap-8">
        <RouterLink class="inline-flex items-center justify-center text-xs font-medium text-gray-50" to="/movies">
          Фильмы
        </RouterLink>
        <RouterLink
          class="inline-flex h-7 w-14 items-center justify-center rounded bg-shamrock align-middle text-xs font-medium leading-relaxed text-gray-900 md:h-8 md:w-20"
          to="/favorites"
        >
          Избранное
        </RouterLink>
      </div>
    </div>
  </header>
</template>
