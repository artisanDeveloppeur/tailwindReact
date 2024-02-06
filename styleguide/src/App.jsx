import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { Footer } from "./layouts/Footer"
import { Header } from "./layouts/Header"
import { Home } from "./pages/Home";
import { ScrollTop } from "./components/Navigation/Scroll/ScrollTop";
import { Styleguide } from "./pages/Styleguide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,

    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'styleguide',
        element: <Styleguide />,
      },



    ],
  },
]);

function PageError() {
  const error = useRouteError();
  return (
    <>
      <Header />
      <h1>Une erreur est survervenue</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
      <Footer />
    </>
  );
}

function Root() {


  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;

}

export default App
