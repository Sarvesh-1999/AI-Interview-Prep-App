import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  );
};

export default MainLayout;