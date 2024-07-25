import styled from "@emotion/styled";
import Button from "./common/Button";

const Container = styled.div`
  padding: 1rem 2rem;
`;

const SectionOne = styled.div``;

const PricingSection = styled.section``;

const About = styled.div``;

function PriceComponent() {
  return (
    <Container>
      <SectionOne>
        <h1>Join our community</h1>

        <h2>30-day, hassle-free money back gurantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </SectionOne>

      <PricingSection>
        <span>Monthly Subscription</span>
        <div>
          <span>$29</span>
          <span>per month</span>
        </div>

        <p>Full access for less than $1 a day</p>

        <Button />
      </PricingSection>

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
    </Container>
  );
}

export default PriceComponent;
