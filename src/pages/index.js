import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  Buttons,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Section,
  SectionHeader,
  SectionContent
} from 'pallote-react';

import InstallReact from '../components/index/InstallReact.mdx'
import InstallCSS from '../components/index/InstallCSS.mdx'

const InstallList = [
  {
    title: 'Pallote React',
    subtitle: "Leverage the power of the CSS library included in simple, easy to use React components.",
    markdownComponent: <InstallReact />,
    linkURL: "/docs/getting-started/installation?package=react"
  },
  {
    title: 'Pallote CSS',
    subtitle: "Stylish CSS library for all your web projects.",
    markdownComponent: <InstallCSS />,
    linkURL: "/docs/getting-started/installation?package=css"
  }
]

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <main>
        <Section fill='primary' landing>
          <SectionHeader
            title="Introducing Pallote"
            subtitle={
              <>
                Pallote is a handcrafted, simple and stylish 
                <Link className="ph-¼" to="/docs/getting-started/installation?package=react">React</Link>
                and 
                <Link className="ph-¼" to="/docs/getting-started/installation?package=css">CSS</Link>
                component library, built with passion and care
              </>
            }
            actions={
              <Button
                component={Link}
                color="main"
                size="lg"
                to="/docs/getting-started/installation"
              >
                Get started
              </Button>
            }
          />
        </Section>
        <Section id="section-install">
          <SectionHeader
            title="Install the packages"
            subtitle="Get started by installing the packages in your project."
          />
          <SectionContent>
            <Grid wrapper spacing={3} alignItems="stretch">
              {InstallList.map((props, idx) => (
                <Grid sm={4} key={idx} item>
                  <Card hasShadow className="h-full">
                    <CardHeader
                      title={props.title}
                      subtitle={props.subtitle}
                    />
                    <CardContent className="mt-auto">
                      {props.markdownComponent}
                    </CardContent>
                    <CardActions className="mt-0">
                      <Button fullWidth component={Link} to={props.linkURL}>Read the full doc</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </SectionContent>
        </Section>
        <Section fill="paper">
          <SectionHeader
            title="Contribute and support"
            subtitle="Pallote is a passion project born of a love for coding and design. All contributions and feedback are welcome to help the project grow."
            actions={
              <Buttons>
                <Button color="secondary" component="a" external href="https://github.com/sponsors/ArnaudDarre">
                  Sponsor on GitHub
                </Button>
                {/* <Button component={Link} to="/contact">
                  Give feedback
                </Button> */}
              </Buttons>
            }
          />
        </Section>
      </main>
    </Layout>
  );
}
