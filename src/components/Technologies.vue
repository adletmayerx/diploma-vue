<script lang="ts" setup>
import { SectionHeading, SectionText } from "./shared";

const technologiesArray = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "MongoDB"];
</script>
<template>
  <section class="flex justify-center bg-mine-shaft">
    <div
      class="flex w-full max-w-7xl flex-col items-center justify-start py-16 px-4 md:px-12 md:py-24 xl:py-24 xl:px-16"
    >
      <SectionHeading text="Технологии" />
      <h3 class="mt-14 text-3xl tracking-tighter text-gray-50 md:mt-20 md:text-5xl xl:mt-24">7&nbsp;технологий</h3>
      <SectionText class="mt-6 text-center tracking-tighter">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
      </SectionText>
      <ul
        class="column mt-12 flex w-44 flex-wrap justify-between gap-2 p-0 text-xs text-gray-50 md:mt-20 md:w-full md:justify-center md:gap-3 xl:mt-24"
      >
        <!-- {technologiesArray.map((tech, i) => {
          return (
            <li
              key={i}
              class="flex h-14 w-20 grow items-center justify-center rounded-lg bg-night-rider md:grow-0"
            >
              {tech}
            </li>
          );
        })} -->

        <li
          v-for="tech in technologiesArray"
          :key="tech"
          class="flex h-14 w-20 grow items-center justify-center rounded-lg bg-night-rider md:grow-0"
        >
          {{tech}}
        </li>
      </ul>
    </div>
  </section>
</template>
