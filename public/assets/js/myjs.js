document.addEventListener('load', () => {
  // Hide some jQuery slgs
  // https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive
  jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
      this.addEventListener('touchstart', handle, {
        passive: !ns.includes('noPreventDefault'),
      })
    },
  }
  jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
      this.addEventListener('touchmove', handle, {
        passive: !ns.includes('noPreventDefault'),
      })
    },
  }
})
