<script lang="ts" setup>
import clsx from "clsx";
import { Component } from "vue";

type Props = {
  children: string | Component;
  className?: string;
  type?: "button" | "submit" | "reset";
  title?: string;
  disabled?: boolean;
  onClick?: (payload: MouseEvent) => void | undefined;
};

withDefaults(defineProps<Props>(), {
  type: "button",
  disabled: false,
});
</script>

<template>
  <button
    :type="type"
    :class="clsx('cursor-pointer transition-opacity duration-300 hover:opacity-80', className && className)"
    :title="title"
    :disabled="disabled"
    :onClick="onClick"
  >
    {children}
  </button>
</template>
