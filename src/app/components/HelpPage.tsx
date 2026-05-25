import { Plus, Search, Filter, BookOpen, Users, Laptop, Home } from "lucide-react";
import { useState } from "react";

export function HelpPage() {
  const [activeFilter, setActiveFilter] = useState("Все");

  const categories = [
    { name: "Все", icon: Filter },
    { name: "Учеба", icon: BookOpen },
    { name: "Проекты", icon: Laptop },
    { name: "Быт", icon: Home },
    { name: "Компания", icon: Users },
  ];

  const helpRequests = [
    {
      id: 1,
      title: "Конспекты по высшей математике",
      description: "Пропустил пару лекций, нужны конспекты за ноябрь",
      category: "Учеба",
      author: "Алексей М.",
      location: "3 курс, ФИТ",
    },
    {
      id: 2,
      title: "Напарник для курсового проекта",
      description: "Ищу партнера для разработки веб-приложения на React",
      category: "Проекты",
      author: "Мария К.",
      location: "2 курс, ИВТ",
    },
    {
      id: 3,
      title: "Помощь с переездом в общежитие",
      description: "Нужна помощь перенести вещи из старой комнаты в новую",
      category: "Быт",
      author: "Дмитрий П.",
      location: "Общежитие №3",
    },
    {
      id: 4,
      title: "Компания для спортзала",
      description: "Ищу напарника для занятий в спортзале по вечерам",
      category: "Компания",
      author: "Иван С.",
      location: "Спортзал университета",
    },
    {
      id: 5,
      title: "Помощь с подготовкой к экзамену по физике",
      description: "Нужен кто-то, кто хорошо разбирается в квантовой механике",
      category: "Учеба",
      author: "Анна Л.",
      location: "2 курс, ФТФ",
    },
    {
      id: 6,
      title: "Участник команды на хакатон",
      description: "Собираем команду для участия в хакатоне на следующей неделе",
      category: "Проекты",
      author: "Сергей Б.",
      location: "Все курсы",
    },
  ];

  return (
    <div className="pb-6">
      <div className="px-4 pt-6 pb-4">
        <h1 className="mb-6">Запросы помощи</h1>

        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Поиск запросов..."
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveFilter(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeFilter === category.name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-4">
        {helpRequests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="mb-1">{request.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{request.description}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                  {request.author.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900">{request.author}</p>
                  <p className="text-gray-500 text-xs">{request.location}</p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                {request.category}
              </span>
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Откликнуться
            </button>
          </div>
        ))}
      </div>

      <button className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
