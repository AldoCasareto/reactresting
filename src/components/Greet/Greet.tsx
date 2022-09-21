type GreetProps = {
  name?: string;
};

export const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name} </div>;
};

export default Greet;
