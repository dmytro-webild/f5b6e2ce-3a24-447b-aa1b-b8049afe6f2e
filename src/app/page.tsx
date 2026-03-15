"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Award, Check, Eye, Focus, Heart, Lightbulb, Shield, Sparkles, Star, ThumbsUp, Trophy, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="largeSmallSizeMediumTitles"
      background="noiseDiagonalGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Ilashyou by Verchita"
          navItems={[
            { name: "Strona główna", id: "hero" },
            { name: "Usługi", id: "services" },
            { name: "O nas", id: "about" },
            { name: "Opinie", id: "testimonials" },
            { name: "Kontakt", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Piękne rzęsy, które zmieniają Twój wygląd"
          description="Profesjonalne stylizacje rzęs i zabiegi urodzeniowe. Odkryj luksus i elegancję w naszym salonie. Zaufaj doświadczeniu Verchity."
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Umów wizytę", href: "#contact" },
            { text: "Zobacz usługi", href: "#services" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/close-up-beautiful-female-upper-part-face-young-brunette-girl-hiding-her-nose-mouth-red-flowers-pretty-lady-with-bright-make-up-holding-roses-concept-cosmetics-advertising_132075-12464.jpg"
          imageAlt="Profesjonalna stylizacja rzęs"
          mediaAnimation="slide-up"
          ariaLabel="Hero section - Piękne rzęsy"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBento
          title="Nasze usługi"
          description="Oferujemy kompleksowe zabiegi upiększające. Każda usługa wykonywana z precyzją i dbałością o najwyższą jakość."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Przedłużanie rzęs",              description: "Naturalne i trwałe przedłużanie rzęs najwyższej jakości. Efekt utrzymuje się do 4 tygodni.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Sparkles, label: "Naturalny efekt", value: "4 tygodnie" },
                { icon: Shield, label: "Bezpieczne", value: "Premium materiały" }
              ]
            },
            {
              title: "Stylizacja rzęs",              description: "Kreatywne projektowanie i stylizacja rzęs dla unikalnego wyglądu. Dostosowane do Twoich preferencji.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Star, label: "Kreatywny design", value: "Indywidualny" },
                { icon: Heart, label: "Niepowtarzalne", value: "Tylko dla Ciebie" }
              ]
            },
            {
              title: "Uzupełnianie rzęs",              description: "Profesjonalne uzupełnianie i konserwacja Twoich rzęs. Idealne dla tych, które potrzebują odświeżenia.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Zap, label: "Szybko", value: "30 minut" },
                { icon: Check, label: "Efektywnie", value: "Profesjonalnie" }
              ]
            },
            {
              title: "Laminacja rzęs",              description: "Zaawansowany zabieg pielęgnacyjny. Rzęsy stają się gęstsze, bardziej objętościowe i piękne.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Award, label: "Transformacja", value: "Spektakularna" },
                { icon: Sparkles, label: "Efekt", value: "8-10 tygodni" }
              ]
            },
            {
              title: "Regulacja brwi",              description: "Profesjonalne projektowanie i modelowanie brwi. Doskonały kształt dla Twojej twarzy.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Focus, label: "Precyzja", value: "Doskonała" },
                { icon: Eye, label: "Forma", value: "Idealna" }
              ]
            },
            {
              title: "Pielęgnacja i porady",              description: "Kompleksowe porady dotyczące pielęgnacji rzęs i brwi. Poznaj sekrety pięknych oczu.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Lightbulb, label: "Porady", value: "Personalizowane" },
                { icon: ThumbsUp, label: "Rezultaty", value: "Długotrwałe" }
              ]
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Dlaczego wybrać Ilashyou by Verchita?"
          metrics={[
            { icon: Trophy, label: "Doświadczenie", value: "Ponad 8 lat" },
            { icon: Star, label: "Zadowoleni klienci", value: "4.8/5" },
            { icon: Zap, label: "Najwyższa jakość", value: "Premium materiały" },
            { icon: Heart, label: "Indywidualne podejście", value: "Dla każdej" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Poznaj zespół"
          description="Verchita i jej zespół to profesjonaliści z bogatym doświadczeniem. Pasja do piękna i dbałość o szczegóły to nasze cechy."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          members={[
            {
              id: "verchita",              name: "Verchita",              role: "Stylistka rzęs i właścicielka",              description: "Specjalistka w przedłużaniu i stylizacji rzęs. Pasjonata piękna z certyfikatami międzynarodowymi. Każdy zabieg to sztuka.",              imageSrc: "http://img.b2bpic.net/free-photo/luxury-retro-wall-lamp-cafe_1150-10890.jpg",              imageAlt: "Salon Ilashyou"
            },
            {
              id: "stylist-2",              name: "Anna",              role: "Stylistka rzęs",              description: "Profesjonalistka z 5-letnim doświadczeniem. Specjalizuje się w kreatywnych stylach. Zawsze uśmiechnięta i pełna energii.",              imageSrc: "http://img.b2bpic.net/free-photo/view-scissors-hair-salon_23-2150462460.jpg",              imageAlt: "Salon Ilashyou"
            },
            {
              id: "stylist-3",              name: "Magdalena",              role: "Stylizacja brwi i pielęgnacja",              description: "Ekspertka w modelowaniu brwi. Tworzy piękne kształty dla każdej twarzy. Zamiłowana w szczegółach.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-female-upper-part-face-young-brunette-girl-hiding-her-nose-mouth-red-flowers-pretty-lady-with-bright-make-up-holding-roses-concept-cosmetics-advertising_132075-12464.jpg",              imageAlt: "Salon Ilashyou"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            { id: "testimonial-1", name: "Katarzyna M.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12702.jpg", imageAlt: "Katarzyna" },
            { id: "testimonial-2", name: "Joanna L.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-pleasant-girl-smiling-looking-friendly-happy-cute-face-expression-smile-white-teeth-standing-casual-blouse-against-white-background_176420-47612.jpg", imageAlt: "Joanna" },
            { id: "testimonial-3", name: "Urszula K.", imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-aside-smiling-confident-with-arms-crossed-chest_141793-55366.jpg", imageAlt: "Urszula" },
            { id: "testimonial-4", name: "Agnieszka W.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-businesswoman_23-2148204386.jpg", imageAlt: "Agnieszka" }
          ]}
          cardTitle="Opinie naszych klientek"
          cardTag="Polecam! ★★★★★"
          cardTagIcon={Heart}
          cardAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Umów wizytę"
          description="Skontaktuj się z nami i zarezerwuj swój termin. Odpowiemy na wszystkie Twoje pytania."
          imageSrc="http://img.b2bpic.net/free-photo/luxury-retro-wall-lamp-cafe_1150-10890.jpg"
          imageAlt="Salon Ilashyou"
          mediaAnimation="slide-up"
          mediaPosition="right"
          useInvertedBackground={false}
          inputs={[
            { name: "imię", type: "text", placeholder: "Twoje imię" },
            { name: "telefon", type: "tel", placeholder: "Twój numer telefonu" }
          ]}
          textarea={{ name: "wiadomość", placeholder: "Opisz co Ciebie interesuje", rows: 4 }}
          buttonText="Wyślij zapytanie"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/view-scissors-hair-salon_23-2150462460.jpg"
          imageAlt="Ilashyou by Verchita"
          logoText="Ilashyou by Verchita"
          copyrightText="© 2025 Ilashyou by Verchita. Wszelkie prawa zastrzeżone."
          columns={[
            {
              title: "Menu",              items: [
                { label: "Strona główna", href: "#hero" },
                { label: "Usługi", href: "#services" },
                { label: "O nas", href: "#about" },
                { label: "Opinie", href: "#testimonials" }
              ]
            },
            {
              title: "Kontakt",              items: [
                { label: "Korczaka 8a, 41-300 Dąbrowa Górnicza", href: "#" },
                { label: "728 338 090", href: "tel:728338090" },
                { label: "Umów wizytę", href: "#contact" },
                { label: "Godziny otwarcia", href: "#" }
              ]
            },
            {
              title: "Media społecznościowe",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Polityka prywatności", href: "#" },
                { label: "Warunki użytkowania", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}