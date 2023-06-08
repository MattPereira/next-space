// by default, Next.js statically renders routes to improve performance
// but you can also explicitly to force static?
export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "about nextspace social network",
};

export default async function About() {
  return (
    <main>
      <h1>About</h1>
      <p>The value of smart contracts is creating trust minimized agreements</p>
    </main>
  );
}
