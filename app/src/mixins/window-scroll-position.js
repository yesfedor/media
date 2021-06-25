export default function windowScrollPosition (propertyName) {
  return {
    data () {
      return {
        // Initialize scroll position at [x: 0, Y: 0]
        [propertyName]: [0, 0]
      }
    },
    created () {
      // Only execute this code on the client side, server sticks to [0, 0]
      if (!this.$isServer) {
        this._scrollListener = () => {
          // window.pageX/YOffset is equivalent to window.scrollX/Y, but works in IE
          // We round values because high-DPI devies can provide some really nasty subpixel values
          this[propertyName] = [
            Math.round(window.pageXOffset),
            Math.round(window.pageYOffset)
          ]
        }

        // Call listener once to detect initial position
        this._scrollListener()

        // When scrolling, update the position
        window.addEventListener('scroll', this._scrollListener)
      }
    },
    beforeUnmount () {
      // Detach the listener when the component is gone
      window.removeEventListener('scroll', this._scrollListener)
    }
  }
}
