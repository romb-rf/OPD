import { ChevronDown, MessageCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Как начать пользоваться биржей помощи?",
      answer:
        "Зарегистрируйтесь, используя студенческий email. После верификации вы сможете создавать запросы или откликаться на существующие.",
    },
    {
      question: "Это платно?",
      answer:
        "Нет! Вся помощь на платформе абсолютно бесплатна и добровольна. Мы создаем сообщество взаимопомощи, где студенты поддерживают друг друга.",
    },
    {
      question: "Безопасно ли пользоваться платформой?",
      answer:
        "Да, все пользователи проходят верификацию по студенческому email. Система рейтингов и отзывов помогает выбирать надежных помощников. Рекомендуем встречаться в общественных местах университета.",
    },
    {
      question: "Можно ли отменить запрос?",
      answer:
        "Да, вы можете отменить запрос в любой момент до подтверждения помощника. Если помощник уже подтвержден, свяжитесь с ним напрямую для обсуждения.",
    },
    {
      question: "Что делать, если возникла проблема?",
      answer:
        "Обратитесь в службу поддержки через чат в приложении, по email или телефону. Мы поможем решить любую ситуацию.",
    },
    {
      question: "Как получить высокий рейтинг?",
      answer:
        "Будьте вежливы, выполняйте обещания в срок, качественно помогайте. Чем больше положительных отзывов, тем выше рейтинг.",
    },
    {
      question: "Только для студентов?",
      answer:
        "Да, платформа создана исключительно для студентов. Для регистрации нужен действующий студенческий email университета.",
    },
    {
      question: "Как работают уведомления?",
      answer:
        "Вы получаете push-уведомления о новых запросах в вашем университете, откликах на ваши запросы, сообщениях и изменениях статуса. Настройки можно изменить в профиле.",
    },
  ];

  return (
    <div className="pb-6">
      <div className="px-4 pt-6">
        <h1 className="mb-2">Частые вопросы</h1>
        <p className="text-gray-600 mb-6">
          Ответы на популярные вопросы о работе платформы
        </p>

        <div className="space-y-3 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 py-4 flex items-center justify-between text-left"
              >
                <h3 className="flex-1 pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <h2 className="mb-3 text-white">Не нашли ответ?</h2>
          <p className="mb-6 opacity-90">
            Свяжитесь с нами любым удобным способом
          </p>

          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <div className="text-left flex-1">
                <p className="font-semibold">Онлайн чат</p>
                <p className="text-sm opacity-90">Ответим в течение 5 минут</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-colors">
              <Mail className="w-5 h-5" />
              <div className="text-left flex-1">
                <p className="font-semibold">Email</p>
                <p className="text-sm opacity-90">support@studenthelp.ru</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-colors">
              <Phone className="w-5 h-5" />
              <div className="text-left flex-1">
                <p className="font-semibold">Телефон</p>
                <p className="text-sm opacity-90">8 (800) 555-35-35</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
