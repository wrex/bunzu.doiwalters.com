<script context="module">
  let counter = 0;
</script>
<script>
      export let caption;

      counter += 1;
      let figureId = 'fig' + counter;

</script>

<figure id={eltId}>
  <slot />
  <figcaption><a href="#{figureId}">Figure {counter}.</a> {caption}</figcaption>
</figure>    

<style>
  figure {
    font-size: smaller;
    border: thin var(--theme-code-text) solid;
    padding: 0.5em;
  }
</style>