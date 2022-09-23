<script>
  export let title = "Admonition";
</script>

<section class="admonition">
  <header class="title">{title}</header>
  <div class="content">
    <slot />
  </div>
</section>

<style>

  .admonition {
    padding: 15px;
    margin-bottom: 21px;
    border-left: 10px solid transparent;
    /* border-color: blue; */
    border-color: var(--theme-text-alert);
    /* background-color: #f6fcff; */
    background-color: var(--theme-code-inline-bg);
  }

  .admonition .title {
    margin: 0;
    text-transform: uppercase;
    padding-left: 3px;
    border: 1px solid;
    border-style: hidden hidden solid;
    /* color: blue; */
    color: var(--theme-text-alert);
    border-color: var(--theme-text-alert);
    /* border-color: blue; */
  }

  .admonition .content {
    color: var(--theme-text-light);
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: 1.5em;
    margin-left: 0;
    border-left: 0;
    border-top: 0;
    min-height: 0;
  }
</style>