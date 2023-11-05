import { Inter, Roboto } from "next/font/google";
import "./../styles/style.scss";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight:'500' });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="content">
          <div className="left">
            <Sidebar />
          </div>
          <div className="right">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
