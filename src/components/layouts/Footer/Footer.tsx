import { ModeToggle } from "@/components/mode-toggle";

const Footer = () => {
  return (
    <div className="fixed bottom-0 z-50 flex h-14 w-full items-center justify-center border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <p className="">273DoWorks</p>
      <div className="fixed right-0 mr-7">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Footer;
