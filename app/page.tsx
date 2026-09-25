import Button from "./components/button";
import LinkButton from "./components/buttonLink";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="flex flex-col flex-1 items-center justify-center gap-3">
        <LinkButton></LinkButton>
        <Button>B</Button>
      </div>
    </>
  );
}
