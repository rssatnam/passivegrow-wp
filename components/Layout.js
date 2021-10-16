import Head from "next/head";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="container pt-5">
        <h1 className="text-center pb-5">Tech Blog</h1>
        {children}
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "Tech Blog",
  description: "Keep up to date with the latest trends in tech",
};
