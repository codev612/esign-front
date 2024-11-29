import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const Bottombar = () => {
    const searchInput = (
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
      />
    );
  
    return (
      <NextUINavbar maxWidth="xl" position="sticky" className="bg-background">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <ul className="hidden lg:flex gap-4 justify-start ml-2">
              <NavbarItem className="border-2">
                <NextLink
                  className="text-text"
                  href={'/'}
                >
                  © eSign, 2024, All rights reserved
                </NextLink>
              </NavbarItem>
              <NavbarItem className="border-2">
                <NextLink
                  className="text-text"
                  href={'/'}
                >
                  Terms of use
                </NextLink>
              </NavbarItem>
              <NavbarItem>
                <NextLink
                  className="text-text"
                  href={'/'}
                >
                  Privacy Policy
                </NextLink>
              </NavbarItem>
            </ul>
          </NavbarBrand>
          {/* <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul> */}
        </NavbarContent>
  
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          
        </NavbarContent>
  
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle /> */}
            <ul className="hidden lg:flex gap-4 justify-start ml-2">
                <NavbarItem className="border-2">
                    <NextLink
                    className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium",
                    )}
                    color="foreground"
                    href={'/'}
                    >
                    Terms of use
                    </NextLink>
                </NavbarItem>
                <NavbarItem>
                    <NextLink
                    className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium",
                    )}
                    color="foreground"
                    href={'/'}
                    >
                    Privacy Policy
                    </NextLink>
                </NavbarItem>
            </ul>
        </NavbarContent>
  
        <NavbarMenu>
          {/* {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div> */}
        </NavbarMenu>
      </NextUINavbar>
    );
  };

  const Navbar = () => {
    const searchInput = (
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
      />
    );
  
    return (
      <NextUINavbar maxWidth="xl" position="sticky" className="bg-forecolor">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Logo />
            </NextLink>
          </NavbarBrand>
          {/* <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul> */}
        </NavbarContent>
  
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          {/* <NavbarItem className="hidden sm:flex gap-2">
            <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Github" href={siteConfig.links.github}>
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          <NavbarItem className="hidden md:flex">
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.sponsor}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Sponsor
            </Button>
          </NavbarItem> */}
        </NavbarContent>
  
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle /> */}
        </NavbarContent>
  
        <NavbarMenu>
          {/* {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div> */}
        </NavbarMenu>
      </NextUINavbar>
    );
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow bg-background">
        <section className="flex flex-row items-center justify-between gap-1 py-1 md:py-1">
          <div className="inline-block max-w-lg text-start justify-start">
            {children}
          </div>
          <div className="inline-block max-w-lg text-center justify-center">
            Coming soon
          </div>
        </section>
      </main>
      <Bottombar />
    </>
  );
}