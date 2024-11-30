import { ModeToggle } from "@/components/mode-toggle";

const Footer = () => {
  return (
    <div className="fixed bottom-0 z-50 w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center">
        <p>273DoWorks</p>
        <div className="fixed right-0 mr-7">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
