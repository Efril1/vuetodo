export default defineNuxtPlugin(() => {
  const colorCookie = useCookie<string>('neutral_color')

  if (colorCookie.value) {
    updateAppConfig({
      ui: {
        colors: {
          neutral: colorCookie.value,
        },
      },
    })
  }
})
