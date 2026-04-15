import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppProviders from "../../components/AppProviders";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
}
