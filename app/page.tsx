import Button from "./components/button";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="flex flex-col flex-1 items-center justify-center gap-3">
        <Button>A</Button>
        <Button>B</Button>
      </div>
    </>
  );
}
