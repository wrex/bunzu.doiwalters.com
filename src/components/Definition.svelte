<dl>
  <dt><slot name="term"/></dt>
  <dd><slot /></dd>
</dl>

<style>
  dl {
    display: flex;
    /* margin-inline: 1em; */
    flex-flow: row wrap;
    align-items: stretch;
    border: solid var(--theme-code-inline-bg);
    border-width: 1px 1px 0 0;
  }
  dt {
    font-size: x-large;
    flex-basis: 25%;
    padding: 1em;
    background: var(--theme-code-inline-bg);
    text-align: right;
    color: var(--theme-code-inline-text);
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  dd {
    flex-basis: 75%;
    flex-grow: 1;
    margin: 0;
    padding: 1em;
    border-bottom: 1px solid var(--theme-code-inline-bg);
    display: flex;
    align-items: center;
  }

  dd :global(p) {
    margin-top: 1.25em;
  }

  dd :global(:is(h1,h2,h3,h4)) {
    margin: 0;
  }

</style>