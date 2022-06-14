import Layout from "./layout";
import Products from "./components/pages/products/index";
import Projects from "./components/pages/projects/projects";
import Faq from "./components/pages/FAQ/FAQ";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/main";
import ProductId from "./components/pages/productId";
import ServicesPage from "./components/pages/services_page/services";
import AboutUsPage from "./components/pages/about_us_page";
import News from "./components/pages/news";
import NewsId from "./components/pages/news-id";
import Licenses from "./components/pages/licenses";


function App() {
  return (
    // <Layout>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about_us_page" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductId />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsId />} />
        <Route path="projects" element={<Projects />} />
        <Route path="licenses" element={<Licenses />} />
        <Route path="FAQ" element={<Faq />} />
      </Route>
    </Routes>

    // </Layout>
  );
}

export default App;
