<template>
  <wired-listbox
    horizontal
    selected="two"
    style="--wired-item-selected-color: darkred; --wired-item-selected-bg: pink;"
  >
    <wired-item value="one">Number One</wired-item>
    <wired-item value="two">Number Two</wired-item>
    <wired-item value="three">Number Three</wired-item>
    <wired-item value="three">Number Three</wired-item>
    <wired-item value="three">Number Three</wired-item>
  </wired-listbox>
</template>

<script>
import { WiredListbox } from "wired-elements";
export default {
  
}
</script>
