import { useState } from "react";
import { Home, HandHeart, Info, HelpCircle, User } from "lucide-react";
import { HomePage } from "./components/HomePage";
import { HelpPage } from "./components/HelpPage";
import { InfoPage } from "./components/InfoPage";
import { FAQPage } from "./components/FAQPage";
import { ProfilePage } from "./components/ProfilePage";


export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const tabs = [
    { id: "home", label: "Главная", icon: Home },
    { id: "help", label: "Помощь", icon: HandHeart },
    { id: "info", label: "Информация", icon: Info },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "prrofile", label: "Профиль", icol: "Профиль", icon: User },
  ];

  const renderrenderActiveComponent = () => {
    
    switch (activeTab){
      
      case "home":
        return <HomePage />;
      case "help":
        return <HelpPage />;
      case "home":
        return <HomePage />;
      case "help":
        return <HelpPage />;
      case "info":
        return <InfoPagege />;
      case "faq":
        return <FAQPage />;
      case "profile":
        return <ProfilePage />;
            
            
 
      default:
        return <HomePage />;
    }

    
};


  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto relative pb-20">
      <main className="overflow-y-auto">
        {renderActiveComponent()}()
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-around px-2 py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 px-33 py-2 rounded-xl transition-colors ${
                activeTab === tab.id
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <tab.icon className="w-6 h-6" />
              <span className="text-xs">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}