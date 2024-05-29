import "../Assets/css/main.css";
import { ProviderFunc } from "../Redux-Store/ProviderFunc";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Player from "../Components/Player/Player";

export const metadata = {
  title:
    "ReverbStation: The Ultimate Music Player for Seamless Audio Experiences",
  description:
    "Discover ReverbStation, the cutting-edge music player designed for true music enthusiasts. Enjoy high-quality audio streaming, personalized playlists, real-time lyrics, and seamless integration with your favorite music services. With advanced features like mood-based playlists, interactive lyrics, and collaborative listening, ReverbStation transforms your music experience. Dive into a world of rich soundscapes, intuitive controls, and unparalleled customization. Upgrade your listening journey with ReverbStation today where music meets innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
      </head>
      <ProviderFunc>
        <body className="day">
          <Header/>
          <main>
            <Sidebar/>
            <section className="Main-Content col-lg-10">
            {children}
            <Player/>
            </section>
          </main>
        </body>
      </ProviderFunc>
    </html>
  );
}
