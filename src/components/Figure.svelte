<script lang=ts>
  export let caption = "";

  function makeSafeForCss(name: string) {
    return name.replace(/[^a-z0-9]/g, function(s) {
        var c = s.charCodeAt(0);
        if (c == 32) return '-';
        if (c >= 65 && c <= 90) return s.toLowerCase();
        return '__' + ('000' + c.toString(16)).slice(-4);
    });
  }

  function getId() {
    return "fig_" + makeSafeForCss(caption);
  }

  function getIdRef() {
    return "#" + getId();
  }

</script>

<figure id={getId()}>
  <slot />
  <figcaption><a href={getIdRef()}>Figure</a>: {caption}</figcaption>
</figure>    

<style>
  figure {
    font-size: smaller;
    border: thin var(--theme-text) solid;
    padding: 0.5em;
  }
</style>