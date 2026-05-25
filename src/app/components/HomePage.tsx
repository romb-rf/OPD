import { Heart, Users, TrendingUp, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomePage() {
  const stats = [
    { icon: Users, label: "Активные пользователи", value: "2,547" },
    { icon: Heart, label: "Помощь оказана", value: "1,234" },
    { icon: TrendingUp, label: "Активных запросов", value: "89" },
    { icon: Clock, label: "Среднее время отклика", value: "2ч" },
  ];

  const recentRequests = [
    {
      id: 1,
      title: "Помощь с конспектами по матану",
      category: "Учеба",
      distance: "Корпус А",
      time: "5 мин назад",
    },
    {
      id: 2,
      title: "Нужен напарник для лабораторной",
      category: "Учеба",
      distance: "Корпус Б",
      time: "15 мин назад",
    },
    {
      id: 3,
      title: "Помощь с переездом в общежитие",
      category: "Бытовая помощь",
      distance: "Общежитие №3",
      time: "30 мин назад",
    },
  ];

  return (
    <div className="pb-6">
      <div className="relative h-48 overflow-hidden rounded-b-3xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763355873417-1e0926397851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1ODE1NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Community helping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="mb-2">Биржа помощи</h1>
          <p className="opacity-90">Студенческая взаимопомощь</p>
        </div>
      </div>

      <div className="px-4 mt-6">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <stat.icon className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl">Последние запросы</h2>
          <button className="text-blue-600 text-sm">Все</button>
        </div>

        <div className="space-y-3">
          {recentRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="flex-1">{request.title}</h3>
                <span className="text-sm text-gray-500">{request.time}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                  {request.category}
                </span>
                <span>{request.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
