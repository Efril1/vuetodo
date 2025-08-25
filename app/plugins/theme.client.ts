export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const neutralCookie = useCookie<string>('primary_color')

  if (neutralCookie.value) {
    appConfig.ui.colors.primary = neutralCookie.value
  }
})
