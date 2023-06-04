import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
