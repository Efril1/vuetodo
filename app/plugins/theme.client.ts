export default defineNuxtPlugin(() => {
  const neutralCookie = useCookie<string>('primary_color')

  if (neutralCookie.value) {
    updateAppConfig({
      ui: {
        colors: {
          primary: neutralCookie.value,
        },
      },
    })
  }
})
