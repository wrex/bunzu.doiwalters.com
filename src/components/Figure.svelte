<script context="module">
  let counter = 0;
</script>
<script>
      export let caption;
      export let isFirstOnPage = false;

      counter = isFirstOnPage ? 1 : counter + 1;
      let figureId = 'fig' + counter;

</script>

<figure id={figureId}>
  <slot />
  <figcaption><a href="#{figureId}">Figure {counter}.</a> {caption}</figcaption>
</figure>    

<style>
  figure {
    font-size: smaller;
    border: thin var(--theme-text) solid;
    padding: 0.5em;
  }
</style>