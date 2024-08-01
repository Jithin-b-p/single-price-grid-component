import styled from "@emotion/styled";

const Btn = styled.button`
  padding: 0.5rem 2rem;

  font-weight: 700;
  background-color: hsl(var(--clr-primary-yellow));
  color: hsl(var(--clr-white));
  border: none;
  border-radius: 3px;
`;

function Button() {
  return <Btn>Sign Up</Btn>;
}

export default Button;
