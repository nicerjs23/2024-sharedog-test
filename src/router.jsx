import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";

import { StartPage } from "@pages/testPage/StartPage";
import { TestStartPage } from "@pages/testPage/TestStartPage";
import { TestPage } from "@pages/testPage/TestPage";
import { TestResultNoPage } from "@pages/testPage/TestResultNoPage";
import { TestResultOkPage } from "@pages/testPage/TestResultOkPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "testStart", element: <TestStartPage /> },
      { path: "test", element: <TestPage /> },
      { path: "resultOK", element: <TestResultOkPage /> },
      { path: "resultNO", element: <TestResultNoPage /> },
    ],
  },
]);
