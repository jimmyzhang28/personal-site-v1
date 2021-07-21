import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import '../styles/fonts.css';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <Seo title="Jimmy Zhang" />
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
  </Layout>
)

export default IndexPage
