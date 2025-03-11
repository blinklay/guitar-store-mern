import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";
import ThemeButton from "./ThemeButton/ThemeButton";

export default function Header() {
  return (
    <header className="p-5 bg-header">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 justify-between">
          <p>logo</p>
          <Search />
          <Navigation />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
