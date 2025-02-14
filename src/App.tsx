import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />

      <section className="mt-20">
        <Hero />
      </section>
    </ThemeProvider>
  );
}

export default App;
