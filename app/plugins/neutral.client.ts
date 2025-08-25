export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const colorCookie = useCookie<string>('neutral_color')

  if (colorCookie.value) {
    appConfig.ui.colors.neutral = colorCookie.value
  }
})
