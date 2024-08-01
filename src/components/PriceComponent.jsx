import styled from "@emotion/styled";
import PricingSection from "./PricingSection";
import WhySection from "./WhySection";

const Container = styled.div`
  max-width: 40rem;
  border-radius: 7px;
  overflow: hidden;

  box-shadow: 1px 0px 2rem hsl(0 0 0 / 15%);
`;

const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 40rem) {
    flex-direction: row;
  }
`;

const SectionOne = styled.div`
  background-color: hsl(var(--clr-white));
  padding-inline: 1.5rem;
  padding-block: 1.8rem;

  @media screen and (min-width: 40rem) {
    padding-inline: 2.5rem;
    padding-block: 2rem;
  }
`;

const Title = styled.span`
  margin-bottom: 1rem;
  display: block;
  font-size: 1.1rem;
  font-weight: 700;
  color: hsl(var(--clr-primary-cyan-200));

  @media screen and (min-width: 40rem) {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: hsl(var(--clr-primary-yellow));

  @media screen and (min-width: 40rem) {
    font-size: 1.15rem;
  }
`;

const Description = styled.p`
  color: hsl(var(--clr-neutral-200));

  font-size: 0.825rem;
`;

function PriceComponent() {
  return (
    <Container>
      <SectionOne>
        <Title>Join our community</Title>

        <SubTitle>30-day, hassle-free money back gurantee</SubTitle>
        <Description>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </Description>
      </SectionOne>

      <SectionTwo>
        <PricingSection />
        <WhySection />
      </SectionTwo>
    </Container>
  );
}

export default PriceComponent;
