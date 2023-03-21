"use client";

import Link from "next/link";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const Home = ({ params: { lng } }: { params: { lng: string } }) => {
  return (
    <div>
      <h1>Hi there!</h1>
      {/* <Link href={`/${lng}`}>back</Link> */}
    </div>
  );
};
export default Home;
