import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  Navbar,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 via-indigo-400 to-blue-500 rounded-lg text-white">
          QuocKiet&apos;s
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          id="search"
          type="text"
          placeholder="Search..."
          rightIcon={FaSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="lg:hidden w-12 h-10" color="light" pill>
        <FaSearch />
      </Button>
      <div className="flex gap-4 md:order-2">
        <Button
          onClick={() => dispatch(toggleTheme())}
          className="w-12 h-10 hidden sm:inline"
          color="light"
          pill
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" img={currentUser.profilePic} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue">Sign In</Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"}>
          <Link to="/projects">Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
