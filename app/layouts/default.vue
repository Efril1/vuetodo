<template>
  <header class="relative flex justify-between items-center p-3">
    <div class="flex items-center gap-4">
      <TodoToggletheme />

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

    <div class="flex items-center gap-x-2">
      <PrimaryChange />
      <NeutralChange />
      <UButton
        icon="i-lucide-github"
        color="neutral"
        to="https://github.com/Efril1"
        variant="ghost"
      />
    </div>
  </header>

  <main class="min-h-screen flex flex-col items-center p-4">
    <div class="w-full overflow-x-auto">
      <slot />
    </div>
  </main>
</template>
