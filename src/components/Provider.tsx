"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
