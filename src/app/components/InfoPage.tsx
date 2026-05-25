import { Shield, Star, Users, Award, Heart, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InfoPage() {
  const features = [
    {
      icon: Shield,
      title: "Студенческое сообщество",
      description: "Все участники — студенты вашего университета",
    },
    {
      icon: Star,
      title: "Рейтинговая система",
      description: "Отзывы и оценки помогают выбрать надежных помощников",
    },
    {
      icon: Users,
      title: "Взаимопомощь",
      description: "Помогай другим и получай помощь сам — абсолютно бесплатно",
    },
    {
      icon: Award,
      title: "Достижения",
      description: "Получайте награды за активное участие в жизни сообщества",
    },
  ];

  const stats = [
    { icon: Heart, value: "5000+", label: "Оказано помощи" },
    { icon: Users, value: "3000+", label: "Студентов в сообществе" },
    { icon: TrendingUp, value: "98%", label: "Довольных пользователей" },
  ];

  return (
    <div className="pb-6">
      <div className="px-4 pt-6">
        <h1 className="mb-2">О платформе</h1>
        <p className="text-gray-600 mb-6">
          Биржа помощи — платформа для студенческой взаимопомощи
        </p>

        <div className="relative h-48 overflow-hidden rounded-2xl mb-8">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY1ODI3MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Volunteers teamwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="mb-8">
          <h2 className="mb-4">Преимущества</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white mb-8">
          <h2 className="mb-4 text-white">Наши достижения</h2>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8" />
                </div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="mb-3">Как это работает</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="mb-1">Создайте запрос</h3>
                <p className="text-gray-600 text-sm">
                  Опишите, в чем вам нужна помощь — с учебой, проектами или бытом
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="mb-1">Найдите помощника</h3>
                <p className="text-gray-600 text-sm">
                  Выберите студента из откликнувшихся на ваш запрос
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="mb-1">Оцените помощь</h3>
                <p className="text-gray-600 text-sm">
                  Оставьте отзыв и помогите другим выбрать надежного помощника
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
