<style lang="sugarss" global>

  /* PARAGRAPHS */
  
  .typeset p:not(:first-child)
    @apply mt-1b
  
  .typeset p:not(:last-child)
    @apply mb-1b
  
  /* HEADINGS */
  
  .typeset h1:not(:first-child),
  .typeset h2:not(:first-child)
    @apply mt-2b
  
  .typeset h3:not(:first-child),
  .typeset h4:not(:first-child),
  .typeset h5:not(:first-child),
  .typeset h6:not(:first-child)
    @apply mt-1b
  
  .typeset h1:not(:last-child)
    @apply mb-2b
  
  .typeset h2:not(:last-child),
  .typeset h3:not(:last-child),
  .typeset h4:not(:last-child),
  .typeset h5:not(:last-child),
  .typeset h6:not(:last-child)
    @apply mb-1b
  
  /* LISTS */
  
  .typeset dl:not(:first-child),
  .typeset ol:not(:first-child),
  .typeset ul:not(:first-child)
    @apply mt-1b
  
  .typeset dl:not(:last-child),
  .typeset ol:not(:last-child),
  .typeset ul:not(:last-child)
    @apply mb-one-and-half-b
    
  .typeset li,
  .typeset dt,
  .typeset dd
    @apply text-sm-narrow
    
  @screen c17
    .typeset li,
    .typeset dt,
    .typeset dd
      @apply text-base-narrow
    
  .typeset li:not(:last-child)
    @apply mb-1b
  
  .typeset ul
    list-style-type: none
  
  .typeset ul:not(.unstyled) li::before
    content: "\2022"
    font-size: 1em
    letter-spacing: 19px
  
  .typeset ul:not(.unstyled) li
    padding-left: 1.5rem
    text-indent: -1.5rem
  
  /* BLOCKS */
  
  .typeset blockquote:not(:first-child),
  .typeset figure:not(:first-child),
  .typeset pre:not(:first-child),
  .typeset table:not(:first-child)
    @apply mt-one-and-half-b
    
  .typeset blockquote:not(:last-child),
  .typeset figure:not(:last-child),
  .typeset pre:not(:last-child),
  .typeset table:not(:last-child)
    @apply mb-2b
  
  .typeset blockquote
    @apply mr-1b
    @apply px-2b py-half-b
    @apply border-l-5 border-softer-yellow
    @apply bg-light-yellow

</style>
