import { Button } from '@mantine/core'
import { MantineProvider, Text } from '@mantine/core'

function App() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <div className="container mx-auto px-4 py-10">
        <Text>Welcome to Mantine!</Text>
        <div className="mx-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
            class name sort
          </button>
          <div className="p-4 pt-2"></div>
          <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
          </div>
          <Button>Button</Button>
        </div>
      </div>
    </MantineProvider>
  )
}

export default App
