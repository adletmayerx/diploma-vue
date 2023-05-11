<script setup lang="ts">
import { Header } from "../components";
</script>

<template>
  <Header />
  <main className="flex grow flex-col">
    <slot></slot>
  </main>
</template>
