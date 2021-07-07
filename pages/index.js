import ContactForm from "../components/contact-form";
import CTAImage from "../components/cta-image";
import LatestBlog from "../components/latest-blog";
import Stats from "../components/stats";
import GradientFeatures from "../components/gradient-features"
import Testimonials from "../components/testimonials";
import HomeSlider from "../components/home-slider";
import AlternatingFeature from "../components/alternating-feature"

export default function Home() {
  return (
    <>

        <HomeSlider />

        <AlternatingFeature></AlternatingFeature>

        <GradientFeatures></GradientFeatures>

        <Testimonials />

        <LatestBlog />

        <Stats></Stats>

        <ContactForm />

        <CTAImage />


    </>


  )
}
