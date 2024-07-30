import styled from "@emotion/styled";
import PricingSection from "./PricingSection";

const Container = styled.div`
  /* padding: 1rem 2rem; */
  max-width: 40rem;
  border-radius: 7px;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
`;

const SectionOne = styled.div`
  background-color: hsl(var(--clr-white));
  padding-inline: 2.5rem;
  padding-block: 2rem;
`;

const About = styled.div`
  width: 50%;
`;

const Title = styled.span`
  margin-bottom: 1rem;
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(var(--clr-primary-cyan-200));
`;

const SubTitle = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: hsl(var(--clr-primary-yellow));
`;

const Description = styled.p`
  color: hsl(var(--clr-neutral-200));
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

      <InnerContainer>
        <PricingSection />
        <About>
          <span>Why us</span>
          <span>Tutorials by industry experts</span>
          <span>Peer & expert code review</span>
          <span>Coding exercises</span>
          <span>Access to our Github repos</span>
          <span>Community forum</span>
          <span>Flashcard decks</span>
          <span>New videos every week</span>
        </About>
      </InnerContainer>
    </Container>
  );
}

export default PriceComponent;
