import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Team", "Events"];

  return (
    <Navbar
      className="bg-background p-2"
      maxWidth="2xl"
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Avatar src="engg4_logo.png" className="w-10 h-10 text-large" />
          <p className="hidden sm:block ml-2 font-bold text-2xl">
            Engineering 4.0 <span className="font-normal">| UWindsor</span>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:block">
          <Link color="foreground" href="#">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:block">
          <Link color="foreground" href="#">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Become a Member
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={"primary"} className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
