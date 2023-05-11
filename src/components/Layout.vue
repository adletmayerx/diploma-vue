<script setup lang="ts">
import { Promo, About, Technologies, Student, Footer } from "../components";
</script>

<template>
  <Header />
  <main className="flex grow flex-col">
    <slot></slot>
  </main>
</template>
