<script setup lang="ts">
import { Button, Switch } from "./shared";
</script>

<template>
  <div class="flex flex-col items-center gap-11 px-4 pt-20 pb-4 md:px-7 xl:px-16">
    <div class="flex gap-2 md:gap-7 w-full">
      <input
        type="text"
        class="h-11 grow rounded bg-dark-charcoal p-4 text-xs text-suva-grey placeholder:text-suva-grey"
        placeholder="Введите название фильма"
      />
      <Button class="h-11 w-16 rounded-full bg-royal-blue text-xs text-gray-50"> Найти </Button>
    </div>
    <div class="flex items-center justify-center gap-3">
      <Switch />
      <p class="text-xs text-gray-50">Короткометражки</p>
    </div>
    <div class="h-px w-full bg-charcoal"></div>
  </div>
</template>
