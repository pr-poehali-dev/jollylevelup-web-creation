import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-jolly-mint/20 to-jolly-blue/20">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Rocket" className="text-jolly-orange" size={32} />
            <h1 className="text-2xl font-fredoka font-bold text-jolly-orange">
              JollyLevelUP
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="font-nunito text-gray-700 hover:text-jolly-orange transition-colors"
            >
              О приложении
            </a>
            <a
              href="#team"
              className="font-nunito text-gray-700 hover:text-jolly-orange transition-colors"
            >
              Команда
            </a>
            <a
              href="#pricing"
              className="font-nunito text-gray-700 hover:text-jolly-orange transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#contact"
              className="font-nunito text-gray-700 hover:text-jolly-orange transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-jolly-orange hover:bg-jolly-orange/90 font-nunito">
            Попробовать бесплатно
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-jolly-mint text-white font-nunito text-sm px-4 py-2">
            🚀 Новое поколение образования
          </Badge>
          <h1 className="text-5xl md:text-7xl font-fredoka font-bold mb-6 text-gray-800">
            Обучение как
            <span className="text-jolly-orange">игра</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-nunito max-w-2xl mx-auto">
            Превратите скучную учёбу в увлекательное приключение с элементами
            геймификации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-jolly-orange hover:bg-jolly-orange/90 font-nunito text-lg px-8 py-3"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-jolly-blue text-jolly-blue hover:bg-jolly-blue/10 font-nunito text-lg px-8 py-3"
            >
              <Icon name="Video" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>
          <div className="relative">
            <img
              src="/img/9d94e0ba-7916-4eaa-8258-4cb41d8e5319.jpg"
              alt="JollyLevelUP Hero"
              className="rounded-2xl shadow-2xl mx-auto max-w-2xl w-full animate-pulse"
            />
            <div className="absolute -top-4 -right-4 bg-jolly-yellow rounded-full p-4 animate-bounce">
              <Icon name="Star" className="text-jolly-orange" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6 text-gray-800">
              Почему <span className="text-jolly-mint">JollyLevelUP</span>?
            </h2>
            <p className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto">
              Наше приложение использует проверенные методики геймификации для
              повышения мотивации и эффективности обучения
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-jolly-orange/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Trophy" className="text-jolly-orange" size={28} />
                </div>
                <CardTitle className="font-fredoka text-xl text-gray-800">
                  Система достижений
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-nunito text-gray-600 text-center">
                  Зарабатывайте награды, бейджи и очки опыта за каждое
                  выполненное задание
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-jolly-mint/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" className="text-jolly-mint" size={28} />
                </div>
                <CardTitle className="font-fredoka text-xl text-gray-800">
                  Социальное обучение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-nunito text-gray-600 text-center">
                  Соревнуйтесь с друзьями, создавайте команды и делитесь
                  успехами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-jolly-blue/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Brain" className="text-jolly-blue" size={28} />
                </div>
                <CardTitle className="font-fredoka text-xl text-gray-800">
                  Адаптивный ИИ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-nunito text-gray-600 text-center">
                  Персонализированный подход к обучению на основе ваших
                  способностей
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6 text-gray-800">
              Наша <span className="text-jolly-lavender">команда</span>
            </h2>
            <p className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto">
              Эксперты в области EdTech и геймификации, которые делают обучение
              увлекательным
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="bg-jolly-orange rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={32} />
                </div>
                <CardTitle className="font-fredoka text-xl text-gray-800">
                  Анна Смирнова
                </CardTitle>
                <CardDescription className="font-nunito text-jolly-orange">
                  CEO & Основатель
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-nunito text-gray-600 text-center">
                  10+ лет в EdTech, эксперт по геймификации образования
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="bg-jolly-mint rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Code" className="text-white" size={32} />
                </div>
                <CardTitle className="font-fredoka text-xl text-gray-800">
                  Максим Петров
                </CardTitle>
                <CardDescription className="font-nunito text-jolly-mint">
                  CTO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-nunito text-gray-600 text-center">
                  Ведущий разработчик с опытом создания игровых платформ
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="bg-jolly-blue rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Palette" className="text-white" size={32} />
                </div>
                <CardTitle className="font-fredoka text-xl text-gray-800">
                  Елена Козлова
                </CardTitle>
                <CardDescription className="font-nunito text-jolly-blue">
                  Head of Design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-nunito text-gray-600 text-center">
                  UX/UI дизайнер, специалист по игровому дизайну
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6 text-gray-800">
              Выберите свой <span className="text-jolly-orange">уровень</span>
            </h2>
            <p className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto">
              Начните бесплатно и повышайте уровень по мере роста ваших
              потребностей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-jolly-mint transition-colors duration-300">
              <CardHeader className="text-center">
                <Badge className="bg-gray-100 text-gray-600 font-nunito mb-4">
                  Новичок
                </Badge>
                <CardTitle className="font-fredoka text-2xl text-gray-800">
                  Бесплатно
                </CardTitle>
                <CardDescription className="font-nunito text-gray-600">
                  Идеально для начала
                </CardDescription>
                <div className="my-4">
                  <Progress value={30} className="h-2" />
                  <p className="text-sm text-gray-500 mt-2 font-nunito">
                    30% функций
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-nunito text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-jolly-mint" size={16} />5
                    курсов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-jolly-mint" size={16} />
                    Базовая геймификация
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-jolly-mint" size={16} />
                    Статистика прогресса
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gray-100 text-gray-800 hover:bg-gray-200 font-nunito">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-jolly-orange shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-jolly-orange text-white font-nunito px-4 py-2">
                  🔥 Популярный
                </Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="bg-jolly-orange/10 text-jolly-orange font-nunito mb-4 mt-4">
                  Продвинутый
                </Badge>
                <CardTitle className="font-fredoka text-2xl text-gray-800">
                  990₽/мес
                </CardTitle>
                <CardDescription className="font-nunito text-gray-600">
                  Для серьёзного обучения
                </CardDescription>
                <div className="my-4">
                  <Progress value={80} className="h-2" />
                  <p className="text-sm text-gray-500 mt-2 font-nunito">
                    80% функций
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-nunito text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-jolly-orange"
                      size={16}
                    />
                    Безлимит курсов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-jolly-orange"
                      size={16}
                    />
                    Полная геймификация
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-jolly-orange"
                      size={16}
                    />
                    Соревнования
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-jolly-orange"
                      size={16}
                    />
                    Персональный ментор
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-jolly-orange hover:bg-jolly-orange/90 font-nunito">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-jolly-blue transition-colors duration-300">
              <CardHeader className="text-center">
                <Badge className="bg-jolly-blue/10 text-jolly-blue font-nunito mb-4">
                  Эксперт
                </Badge>
                <CardTitle className="font-fredoka text-2xl text-gray-800">
                  1990₽/мес
                </CardTitle>
                <CardDescription className="font-nunito text-gray-600">
                  Максимальные возможности
                </CardDescription>
                <div className="my-4">
                  <Progress value={100} className="h-2" />
                  <p className="text-sm text-gray-500 mt-2 font-nunito">
                    100% функций
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-nunito text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-jolly-blue" size={16} />
                    Всё из плана Продвинутый
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-jolly-blue" size={16} />
                    Создание своих курсов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-jolly-blue" size={16} />
                    Аналитика и отчёты
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-jolly-blue" size={16} />
                    Приоритетная поддержка
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-jolly-blue hover:bg-jolly-blue/90 font-nunito">
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-jolly-orange/10 to-jolly-mint/10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6 text-gray-800">
              Готовы <span className="text-jolly-orange">начать</span>?
            </h2>
            <p className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto">
              Присоединяйтесь к тысячам студентов, которые уже превратили
              обучение в увлекательную игру
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <img
                src="/img/74bff36c-6726-4769-bf9d-5150b7cb6b46.jpg"
                alt="Happy students"
                className="rounded-xl mb-6 mx-auto max-w-sm w-full"
              />
              <h3 className="text-2xl font-fredoka font-bold mb-4 text-gray-800">
                Начните своё образовательное приключение сегодня!
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-jolly-orange hover:bg-jolly-orange/90 font-nunito"
                >
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать бесплатно
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-jolly-mint text-jolly-mint hover:bg-jolly-mint/10 font-nunito"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="flex justify-center gap-8 text-gray-600">
              <a href="#" className="hover:text-jolly-orange transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="hover:text-jolly-mint transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="hover:text-jolly-blue transition-colors">
                <Icon name="MessageSquare" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Rocket" className="text-jolly-orange" size={28} />
              <h3 className="text-2xl font-fredoka font-bold">JollyLevelUP</h3>
            </div>
            <p className="text-gray-400 font-nunito mb-6">
              Превращаем обучение в захватывающее приключение
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="#about"
                className="text-gray-400 hover:text-jolly-orange transition-colors font-nunito"
              >
                О нас
              </a>
              <a
                href="#team"
                className="text-gray-400 hover:text-jolly-mint transition-colors font-nunito"
              >
                Команда
              </a>
              <a
                href="#pricing"
                className="text-gray-400 hover:text-jolly-blue transition-colors font-nunito"
              >
                Тарифы
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-jolly-lavender transition-colors font-nunito"
              >
                Контакты
              </a>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 font-nunito text-sm">
                © 2024 JollyLevelUP. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
