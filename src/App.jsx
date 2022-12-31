import { Menu } from "./components/Menu";

export function AppRouter() {
  return (
    <>
      <Menu />
    </>
  );
}

export function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}
