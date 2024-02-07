import {
  JobsWrapper,
  Job,
  Featured,
  Badge,
  Logo,
  Content,
  Description,
  Divider,
  HeadDescription,
  Details,
  Position,
  Languages,
  DescriptionArea,
} from "./Main.style";
import data from "../../assets/data.json";

function Main() {
  return (
    <JobsWrapper>
      {data.map((item) => (
        <Job key={item.id}>
          {item.featured && <Featured />}

          <Content>
            <DescriptionArea>
              <Logo src={item.logo} alt={item.company} />
              <Description>
                <HeadDescription className="teste">
                  <span>{item.company}</span>
                  {item.new && <Badge backgroundcolor="primary">NEW!</Badge>}
                  {item.featured && (
                    <Badge backgroundcolor="darkerCyan">FEATURED</Badge>
                  )}
                </HeadDescription>
                <Position>{item.position}</Position>
                <Details>
                  <li>{item.postedAt}</li>
                  <li>{item.contract}</li>
                  <li>{item.location}</li>
                </Details>
              </Description>
            </DescriptionArea>

            <Divider />

            <Languages>
              <span>{item.role}</span>
              <span>{item.level}</span>
              {item.languages.map((language) => (
                <span key={language}>{language}</span>
              ))}
              {item.tools &&
                item.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </Languages>
          </Content>
        </Job>
      ))}
    </JobsWrapper>
  );
}

export default Main;
