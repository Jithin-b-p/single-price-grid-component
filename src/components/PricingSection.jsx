import styled from "@emotion/styled";
import Button from "./common/Button";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2rem 2.5rem;
  background-color: hsl(var(--clr-primary-cyan-200));
`;
const Price = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: hsl(var(--clr-white));
`;

const PriceTitle = styled.span`
  color: hsl(var(--clr-white));
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

const Month = styled.span`
  color: hsl(var(--clr-neutral-300));
`;

const Paragraph = styled.p`
  margin-block-end: 1.2rem;
  font-size: 1rem;
  color: hsl(var(--clr-neutral-100));
`;

function PricingSection() {
  return (
    <Container>
      <PriceTitle>Monthly Subscription</PriceTitle>
      <InnerContainer>
        <Price>$29</Price>
        <Month>per month</Month>
      </InnerContainer>

      <Paragraph>Full access for less than $1 a day</Paragraph>

      <Button />
    </Container>
  );
}

export default PricingSection;
