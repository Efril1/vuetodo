<template>
  <header class="flex justify-between items-center p-3">
    <div class="flex items-center gap-2">
      <TodoToggletheme />
    </div>

    <div class="flex-1 flex justify-center">
      <div class="inline-block hover:[&>span:first-child]:opacity-90">
        <span
          class="absolute ml-2 blur-sm opacity-0 hover:opacity-90 scale-200 transition-all duration-300 pointer-events-none"
        >
          todo
        </span>
        <ULink
          to="/"
          class="text-xl font-bold text-gray-800 dark:text-gray-200"
        >
          Todo
        </ULink>
      </div>
    </div>

    <div>
      <UButton
        icon="i-lucide-github"
        color="neutral"
        class="absolute right-1 top-2"
        to="https://github.com/Efril1"
        variant="ghost"
      />
    </div>
  </header>

  <main class="min-h-screen flex flex-col items-center p-4">
    <slot />
  </main>
</template>
