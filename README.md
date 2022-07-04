### mantine-tailwind-boilerplate

The code repository is composed of mantine + tailwindcss + vite, which is a set of boilerplate code. At the same time added a plugin for automatic sorting of class names。

### keypoint

`tailwind.config.ts`file, set preflight false

```
{
  xxx,
  corePlugins: { preflight: false },
  xxx,
}
```

`App.tsx`file, `MantineProvider` component add `withNormalizeCSS` prop

```
function App() {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
    >
      ...
    </MantineProvider>
  )
}
```

### LICENSE

MIT
