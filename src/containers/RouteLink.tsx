import { Link } from "react-scroll";

type TRouteLink = {
  onClick?: () => void;
  to: string;
  title: string;
};

const RouteLink = ({ onClick, to, title }: TRouteLink) => (
  <Link onClick={onClick} to={to} smooth={true} duration={500}>
    {title}
  </Link>
);

export default RouteLink;
