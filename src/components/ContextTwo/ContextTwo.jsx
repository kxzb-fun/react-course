import Heading from "./Heading.jsx";
import Section from "./Section.jsx";

export default function ContextOne() {
  return (
    <div>
      <div>
        <p>vhjdfhjv</p>
      </div>
      <Section abc={1}>
        <Heading>主标题</Heading>
        <Section abc={2}>
          <Heading>副标题</Heading>
          <Heading>副标题</Heading>
          <Heading>副标题</Heading>
          <Section abc={3}>
            <Heading>子标题</Heading>
            <Heading>子标题</Heading>
            <Heading>子标题</Heading>
            <Section abc={4}>
              <Heading>子子标题</Heading>
              <Heading>子子标题</Heading>
              <Heading>子子标题</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}
