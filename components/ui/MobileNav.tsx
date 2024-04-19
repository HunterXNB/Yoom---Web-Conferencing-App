"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {}
const MobileNav = ({}: IProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"/icons/hamburger.svg"}
            alt="Mobile Navigation"
            className="cursor-pointer sm:hidden"
            width={36}
            height={36}
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-dark-1" side={"left"}>
          <Link href={"/"} className="flex items-center gap-1 ">
            <Image
              src={"/icons/logo.svg"}
              alt="Yoom"
              className="max-sm:size-10"
              width={32}
              height={32}
            />
            <p className="text-[26px] font-extrabold text-white ">Yoom</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {" "}
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    (pathname.startsWith(link.route) && link.route !== "/");
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-blue-1": isActive }
                        )}
                        href={link.route}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold ">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
