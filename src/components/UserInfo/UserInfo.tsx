// Add the required types and props
type Props = {
  name: string;
  email: string;
};

export const UserInfo:React.FC<Props> = ({ name, email }) => (

  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>

);
