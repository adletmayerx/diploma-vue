<script lang="ts" setup>
import { Button } from "./shared";

</script>
<template >
  <section class="flex justify-center bg-tiber">
    <div class=" flex w-full max-w-7xl flex-col items-center justify-start gap-11  py-16 px-3 md:gap-12 md:px-24 md:pt-36 md:pb-20 xl:flex-row-reverse xl:justify-between xl:gap-48 xl:py-20 xl:px-16">
      <div class="relative h-206px w-210px shrink-0 md:h-304px md:w-310px">
        <img src="/landing-logo.png" alt="landing logo" fill />
      </div>
      <div class="xl:w flex shrink flex-col items-center justify-start text-center text-gray-50 xl:items-start xl:text-left">
        <h1 class="text-4xl md:leading-tight">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p class="mt-6 w-64 text-sm opacity-50 xl:mt-9">
          Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его
          создателя.
        </p>
        <Button className="mt-20 h-9 w-32 rounded border border-gray-50  align-middle text-xs  md:mt-24 xl:mt-36">
          Узнать больше
        </Button>
      </div>
    </div>
  </section>
</template>