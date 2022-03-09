import React from "react";
import Header from "../components/Header";
import ContentSection from "../components/ContentSection";
import { QueryClient, QueryClientProvider } from "react-query";
import Discord from "../../static/img/DiscordIcon";
import Twitter from "../../static/img/TwitterIcon";

const queryClient = new QueryClient();

const Home = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <div className="containerHome">
        <Header />
        <ContentSection />
        <div className="foot-note">
          Note: Earn Alliance and its subsidiaries are not affiliated with Axie
          Infinity.
        </div>
        <div className="contact-div">
          <div className="contact-discord">
            <a href="https://discord.gg/GD65eQuVGz" target="_blank">
              <Discord className="icon" />
            </a>
          </div>
          <div className="twitter-div">
            <a href="https://twitter.com/earnalliance" target="_blank">
              <Twitter className="icon" />
            </a>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  </>
);
export default Home;
