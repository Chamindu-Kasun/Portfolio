import "@styles/globals.css";

export const metadata = {
  title: "Chamindu Kasun Karunarathna",
  description: "Portfolio web site of Chamindu Kasun Karunarathna",
};

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;
