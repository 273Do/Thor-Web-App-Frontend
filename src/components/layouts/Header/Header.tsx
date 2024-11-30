import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-10 flex h-14 items-center justify-between">
        <img src="imgs/Thor.png" className="size-14" alt="" />
        <div>
          <ul className="flex gap-2">
            <li>
              <Button variant="ghost" className="p-3">
                Docs
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="p-3">
                Credit
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="p-3">
                <SiGithub />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
