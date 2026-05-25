import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Star,
  Settings,
  LogOut,
  Bell,
  Shield,
  Award,
  Heart,
  CheckCircle,
} from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface ProfilePageProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

export function ProfilePage({ isAuthenticated, onLogin, onLogout }: ProfilePageProps) {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormData>();

  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
  } = useForm<RegisterFormData>();

  const onLoginSubmit = (data: LoginFormData) => {
    console.log("Login:", data);
    onLogin();
  };

  const onSignupSubmit = (data: RegisterFormData) => {
    console.log("Signup:", data);
    onLogin();
  };

  if (!isAuthenticated) {
    return (
      <div className="pb-6 px-4 pt-6">
        <h1 className="mb-2">{isLoginMode ? "Вход" : "Регистрация"}</h1>
        <p className="text-gray-600 mb-8">
          {isLoginMode
            ? "Войдите в свой аккаунт"
            : "Создайте аккаунт для начала работы"}
        </p>

        {isLoginMode ? (
          <form onSubmit={handleLoginSubmit(onLoginSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...registerLogin("email", {
                    required: "Email обязателен",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Неверный формат email",
                    },
                  })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {loginErrors.email && (
                <p className="text-red-500 text-sm mt-1">{loginErrors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Пароль</label>
              <input
                type="password"
                placeholder="••••••••"
                {...registerLogin("password", {
                  required: "Пароль обязателен",
                  minLength: {
                    value: 6,
                    message: "Минимум 6 символов",
                  },
                })}
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500"
              />
              {loginErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {loginErrors.password.message}
                </p>
              )}
            </div>

            <button className="text-blue-600 text-sm hover:underline">
              Забыли пароль?
            </button>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Войти
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit(onSignupSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-gray-700">Имя</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  {...registerSignup("name", {
                    required: "Имя обязательно",
                  })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {signupErrors.name && (
                <p className="text-red-500 text-sm mt-1">{signupErrors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...registerSignup("email", {
                    required: "Email обязателен",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Неверный формат email",
                    },
                  })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {signupErrors.email && (
                <p className="text-red-500 text-sm mt-1">{signupErrors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Телефон</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  {...registerSignup("phone", {
                    required: "Телефон обязателен",
                  })}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {signupErrors.phone && (
                <p className="text-red-500 text-sm mt-1">{signupErrors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Пароль</label>
              <input
                type="password"
                placeholder="••••••••"
                {...registerSignup("password", {
                  required: "Пароль обязателен",
                  minLength: {
                    value: 6,
                    message: "Минимум 6 символов",
                  },
                })}
                className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500"
              />
              {signupErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {signupErrors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Зарегистрироваться
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLoginMode ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
            <button
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="text-blue-600 hover:underline"
            >
              {isLoginMode ? "Зарегистрироваться" : "Войти"}
            </button>
          </p>
        </div>

        <div className="mt-8 bg-blue-50 rounded-2xl p-4">
          <h3 className="mb-2">Зачем регистрироваться?</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Создавайте запросы о помощи</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Откликайтесь на запросы других пользователей</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Повышайте свой рейтинг и получайте награды</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // Authenticated user profile
  const userProfile = {
    name: "Мария Петрова",
    email: "maria@example.com",
    phone: "+7 (999) 123-45-67",
    location: "Москва, Центральный район",
    rating: 4.8,
    reviews: 45,
    helpGiven: 32,
    helpReceived: 15,
    joinDate: "Январь 2024",
    verified: true,
  };

  const achievements = [
    { icon: Heart, name: "Помощник месяца", color: "text-red-500" },
    { icon: Award, name: "10 помощей", color: "text-yellow-500" },
    { icon: Star, name: "5 звезд", color: "text-blue-500" },
  ];

  return (
    <div className="pb-6">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 px-4 pt-6 pb-8 text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur">
              {userProfile.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-white">{userProfile.name}</h2>
                {userProfile.verified && (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                )}
              </div>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{userProfile.rating}</span>
                <span className="text-sm opacity-75">({userProfile.reviews} отзывов)</span>
              </div>
              <p className="text-sm opacity-90">С нами с {userProfile.joinDate}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-4 -mt-4">
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-semibold text-gray-900">{userProfile.helpGiven}</p>
              <p className="text-sm text-gray-600">Помощь оказана</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-semibold text-gray-900">
                {userProfile.helpReceived}
              </p>
              <p className="text-sm text-gray-600">Помощь получена</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">Достижения</h3>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                </div>
                <p className="text-xs text-gray-600">{achievement.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-3">Информация</h3>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
            <div className="p-4 flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-gray-900">{userProfile.email}</p>
              </div>
            </div>
            <div className="p-4 flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Телефон</p>
                <p className="text-gray-900">{userProfile.phone}</p>
              </div>
            </div>
            <div className="p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Местоположение</p>
                <p className="text-gray-900">{userProfile.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="flex-1 text-left text-gray-900">Уведомления</span>
          </button>

          <button className="w-full flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <Shield className="w-5 h-5 text-gray-600" />
            <span className="flex-1 text-left text-gray-900">Безопасность</span>
          </button>

          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-red-100 text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="flex-1 text-left">Выйти</span>
          </button>
        </div>
      </div>
    </div>
  );
}
