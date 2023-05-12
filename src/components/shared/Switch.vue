<script setup lang="ts">
import clsx from "clsx";

type Props = {
  value: boolean;
};

withDefaults(defineProps<Props>(), {
  value: false,
});

const emit = defineEmits(["changeIsShortsSwitch"]);

const emitChangeIsShortsSwitch = () => {
  emit("changeIsShortsSwitch");
};
</script>

<template>
  <div
    @click="emitChangeIsShortsSwitch"
    :class="
      clsx(
        'flex h-5 w-9 cursor-pointer justify-start rounded-3xl bg-night-rider p-0.5',
        value && 'justify-end'
      )
    "
  >
    <span class="h-4 w-4 rounded-full border border-gray-50 bg-shamrock"></span>
  </div>
</template>
