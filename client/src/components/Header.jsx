import Navigation from "./Navigation/Navigation";

export default function Header() {
  return (
    <header className="p-5 bg-header">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 justify-between">
          <p>logo</p>
          <p>search</p>
          <Navigation />
          <p>theme</p>
        </div>
      </div>
    </header>
  );
}
