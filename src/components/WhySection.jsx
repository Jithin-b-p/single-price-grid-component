import styled from "@emotion/styled";

const WhySectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.8rem 1.5rem;
  background-color: hsl(var(--clr-primary-cyan-300));

  @media screen and (min-width: 40rem) {
    width: 50%;
  }

  @media screen and (min-width: 40rem) {
    padding: 2rem 2.5rem;
  }
`;

const Title = styled.span`
  display: block;
  font-weight: 700;
  color: hsl(var(--clr-white));
  margin-block-end: 0.8rem;
`;

const Paragraph = styled.p`
  font-size: 0.825rem;
  color: hsl(var(--clr-neutral-100));
`;

function WhySection() {
  return (
    <WhySectionContainer>
      <Title>Why Us</Title>
      <Paragraph>
        Tutorials by industry experts <br />
        Peer & expert code review <br />
        Coding exercises <br />
        Access to our Github repos
        <br />
        Community forum
        <br />
        Flashcard decks
        <br />
        New videos every week
        <br />
      </Paragraph>
    </WhySectionContainer>
  );
}

export default WhySection;
