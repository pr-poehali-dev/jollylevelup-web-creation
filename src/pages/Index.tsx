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
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="bg-dark-card/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-dark-gray">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/files/0606a848-3d3e-45b7-a17f-c2c4ea2fc5cb.png"
              alt="JollyLevelUP"
              className="w-8 h-8"
            />
            <h1 className="text-2xl font-fredoka font-bold text-jolly-blue">
              JollyLevelUP
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="font-nunito text-dark-text hover:text-jolly-blue transition-colors"
            >
              О приложении
            </a>
            <a
              href="#features"
              className="font-nunito text-dark-text hover:text-jolly-blue transition-colors"
            >
              Возможности
            </a>
            <a
              href="#team"
              className="font-nunito text-dark-text hover:text-jolly-blue transition-colors"
            >
              Команда
            </a>
            <a
              href="#pricing"
              className="font-nunito text-dark-text hover:text-jolly-blue transition-colors"
            >
              Тарифы
            </a>
          </nav>
          <Button className="bg-jolly-blue hover:bg-jolly-blue/90 font-nunito">
            Попробовать бесплатно
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-jolly-blue/20 text-jolly-blue border-jolly-blue/30 font-nunito text-sm px-4 py-2">
            🚀 Новое поколение образования
          </Badge>
          <h1 className="text-5xl md:text-7xl font-fredoka font-bold mb-6 text-dark-text">
            Обучение как
            <span className="text-jolly-blue"> игра</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-nunito max-w-3xl mx-auto">
            Превратите скучную учёбу в увлекательное приключение с элементами
            геймификации для всех возрастов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-jolly-blue hover:bg-jolly-blue/90 font-nunito text-lg px-8 py-3"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-jolly-lavender text-jolly-lavender hover:bg-jolly-lavender/10 font-nunito text-lg px-8 py-3"
            >
              <Icon name="Video" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/files/95420af0-20ff-4aa8-8638-e4fa88d73db0.png"
              alt="JollyLevelUP Character"
              className="rounded-2xl mx-auto max-w-md w-full"
            />
            <div className="absolute -top-4 -right-4 bg-jolly-blue/20 rounded-full p-4 animate-bounce">
              <Icon name="Star" className="text-jolly-blue" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6 text-dark-text">
              Почему <span className="text-jolly-blue">JollyLevelUP</span>?
            </h2>
            <p className="text-xl text-gray-400 font-nunito max-w-3xl mx-auto">
              Наше приложение использует проверенные методики геймификации для
              повышения мотивации и эффективности обучения как для детей, так и
              для взрослых
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-dark-gray border-dark-gray hover:border-jolly-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-jolly-blue/20">
              <CardHeader className="text-center">
                <div className="bg-jolly-blue/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Trophy" className="text-jolly-blue" size={28} />
                </div>
                <CardTitle className="font-fredoka text-xl text-dark-text">
                  Система достижений
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-nunito text-gray-400 text-center">
                  Зарабатывайте награды, бейджи и очки опыта за каждое
                  выполненное задание
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-dark-gray border-dark-gray hover:border-jolly-lavender/50 transition-all duration-300 hover:shadow-lg hover:shadow-jolly-lavender/20">
              <CardHeader className="text-center">
                <div className="bg-jolly-lavender/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon
                    name="Users"
                    className="text-jolly-lavender"
                    size={28}
                  />
                </div>
                <CardTitle className="font-fredoka text-xl text-dark-text">
                  Социальное обучение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-nunito text-gray-400 text-center">
                  Соревнуйтесь с друзьями, создавайте команды и делитесь
                  успехами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-dark-gray border-dark-gray hover:border-jolly-mint/50 transition-all duration-300 hover:shadow-lg hover:shadow-jolly-mint/20">
              <CardHeader className="text-center">
                <div className="bg-jolly-mint/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Brain" className="text-jolly-mint" size={28} />
                </div>
                <CardTitle className="font-fredoka text-xl text-dark-text">
                  Адаптивный ИИ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-nunito text-gray-400 text-center">
                  Персонализированный подход к обучению на основе ваших
                  способностей
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6 text-dark-text">
              Возможности <span className="text-jolly-lavender">платформы</span>
            </h2>
            <p className="text-xl text-gray-400 font-nunito max-w-3xl mx-auto">
              Полный набор инструментов для эффективного и увлекательного
              обучения
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img
                src="/img/3a2791f3-ea82-414a-ad9d-2ad4a8dca6c9.jpg"
                alt="Персонализированное обучение"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-fredoka font-bold mb-6 text-dark-text">
                Персонализированное обучение
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-jolly-blue/20 rounded-full p-3 flex-shrink-0">
                    <Icon name="Target" className="text-jolly-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-dark-text mb-2">
                      Индивидуальный путь
                    </h4>
                    <p className="text-gray-400 font-nunito">
                      ИИ анализирует ваши сильные и слабые стороны, создавая
                      персональную программу обучения
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-jolly-lavender/20 rounded-full p-3 flex-shrink-0">
                    <Icon
                      name="BookOpen"
                      className="text-jolly-lavender"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-dark-text mb-2">
                      Адаптивный контент
                    </h4>
                    <p className="text-gray-400 font-nunito">
                      Материалы автоматически подстраиваются под ваш уровень и
                      скорость обучения
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-jolly-mint/20 rounded-full p-3 flex-shrink-0">
                    <Icon
                      name="BarChart"
                      className="text-jolly-mint"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-dark-text mb-2">
                      Детальная аналитика
                    </h4>
                    <p className="text-gray-400 font-nunito">
                      Отслеживайте прогресс в реальном времени и получайте
                      рекомендации по улучшению
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-fredoka font-bold mb-6 text-dark-text">
                Геймификация и мотивация
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-jolly-blue/20 rounded-full p-3 flex-shrink-0">
                    <Icon name="Award" className="text-jolly-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-dark-text mb-2">
                      Система уровней
                    </h4>
                    <p className="text-gray-400 font-nunito">
                      Повышайте уровень, открывайте новые возможности и
                      получайте признание за достижения
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-jolly-orange/20 rounded-full p-3 flex-shrink-0">
                    <Icon name="Zap" className="text-jolly-orange" size={24} />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-dark-text mb-2">
                      Челленджи и квесты
                    </h4>
                    <p className="text-gray-400 font-nunito">
                      Участвуйте в ежедневных заданиях и долгосрочных проектах
                      для поддержания мотивации
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-jolly-lavender/20 rounded-full p-3 flex-shrink-0">
                    <Icon
                      name="Crown"
                      className="text-jolly-lavender"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-dark-text mb-2">
                      Рейтинги и лидерборды
                    </h4>
                    <p className="text-gray-400 font-nunito">
                      Соревнуйтесь с друзьями и учениками со всего мира в
                      дружественной атмосфере
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/img/0dbc5e1b-b89b-4f55-add3-b0c1c119d76f.jpg"
                alt="Достижения и награды"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6 text-dark-text">
              Наша <span className="text-jolly-lavender">команда</span>
            </h2>
            <p className="text-xl text-gray-400 font-nunito max-w-3xl mx-auto">
              Эксперты в области EdTech и геймификации, которые делают обучение
              увлекательным
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-dark-gray border-dark-gray hover:border-jolly-blue/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-jolly-blue/20">
              <CardHeader className="text-center">
                <div className="bg-jolly-blue rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={32} />
                </div>
                <CardTitle className="font-fredoka text-xl text-dark-text">
                  Анна Смирнова
                </CardTitle>
                <CardDescription className="font-nunito text-jolly-blue">
                  CEO & Основатель
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-nunito text-gray-400 text-center">
                  10+ лет в EdTech, эксперт по геймификации образования
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-gray border-dark-gray hover:border-jolly-mint/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-jolly-mint/20">
              <CardHeader className="text-center">
                <div className="bg-jolly-mint rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Code" className="text-white" size={32} />
                </div>
                <CardTitle className="font-fredoka text-xl text-dark-text">
                  Максим Петров
                </CardTitle>
                <CardDescription className="font-nunito text-jolly-mint">
                  CTO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-nunito text-gray-400 text-center">
                  Ведущий разработчик с опытом создания игровых платформ
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-gray border-dark-gray hover:border-jolly-lavender/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-jolly-lavender/20">
              <CardHeader className="text-center">
                <div className="bg-jolly-lavender rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Palette" className="text-white" size={32} />
                </div>
                <CardTitle className="font-fredoka text-xl text-dark-text">
                  Елена Козлова
                </CardTitle>
                <CardDescription className="font-nunito text-jolly-lavender">
                  Head of Design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-nunito text-gray-400 text-center">
                  UX/UI дизайнер, специалист по игровому дизайну
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6 text-dark-text">
              Выберите свой <span className="text-jolly-blue">уровень</span>
            </h2>
            <p className="text-xl text-gray-400 font-nunito max-w-3xl mx-auto">
              Тарифы для индивидуальных пользователей и образовательных
              учреждений
            </p>
          </div>

          {/* Personal Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-fredoka font-bold mb-8 text-center text-dark-text">
              Для <span className="text-jolly-mint">личного использования</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-dark-card border-dark-gray hover:border-jolly-mint/50 transition-colors duration-300">
                <CardHeader className="text-center">
                  <Badge className="bg-gray-600 text-gray-300 font-nunito mb-4">
                    Новичок
                  </Badge>
                  <CardTitle className="font-fredoka text-2xl text-dark-text">
                    Бесплатно
                  </CardTitle>
                  <CardDescription className="font-nunito text-gray-400">
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
                  <ul className="space-y-3 font-nunito text-gray-400">
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-mint"
                        size={16}
                      />
                      5 курсов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-mint"
                        size={16}
                      />
                      Базовая геймификация
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-mint"
                        size={16}
                      />
                      Статистика прогресса
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-dark-gray text-dark-text hover:bg-gray-700 font-nunito">
                    Начать бесплатно
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-dark-card border-jolly-blue shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-jolly-blue text-white font-nunito px-4 py-2">
                    🔥 Популярный
                  </Badge>
                </div>
                <CardHeader className="text-center">
                  <Badge className="bg-jolly-blue/20 text-jolly-blue font-nunito mb-4 mt-4">
                    Продвинутый
                  </Badge>
                  <CardTitle className="font-fredoka text-2xl text-dark-text">
                    990₽/мес
                  </CardTitle>
                  <CardDescription className="font-nunito text-gray-400">
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
                  <ul className="space-y-3 font-nunito text-gray-400">
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-blue"
                        size={16}
                      />
                      Безлимит курсов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-blue"
                        size={16}
                      />
                      Полная геймификация
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-blue"
                        size={16}
                      />
                      Соревнования
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-blue"
                        size={16}
                      />
                      Персональный ментор
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-jolly-blue hover:bg-jolly-blue/90 font-nunito">
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-dark-card border-dark-gray hover:border-jolly-lavender/50 transition-colors duration-300">
                <CardHeader className="text-center">
                  <Badge className="bg-jolly-lavender/20 text-jolly-lavender font-nunito mb-4">
                    Эксперт
                  </Badge>
                  <CardTitle className="font-fredoka text-2xl text-dark-text">
                    1990₽/мес
                  </CardTitle>
                  <CardDescription className="font-nunito text-gray-400">
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
                  <ul className="space-y-3 font-nunito text-gray-400">
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-lavender"
                        size={16}
                      />
                      Всё из плана Продвинутый
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-lavender"
                        size={16}
                      />
                      Создание своих курсов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-lavender"
                        size={16}
                      />
                      Аналитика и отчёты
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-lavender"
                        size={16}
                      />
                      Приоритетная поддержка
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-jolly-lavender hover:bg-jolly-lavender/90 font-nunito">
                    Связаться с нами
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Educational Plans */}
          <div>
            <h3 className="text-2xl font-fredoka font-bold mb-8 text-center text-dark-text">
              Для{" "}
              <span className="text-jolly-orange">
                образовательных учреждений
              </span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-dark-card border-dark-gray hover:border-jolly-orange/50 transition-colors duration-300">
                <CardHeader className="text-center">
                  <Badge className="bg-jolly-orange/20 text-jolly-orange font-nunito mb-4">
                    Школы
                  </Badge>
                  <CardTitle className="font-fredoka text-2xl text-dark-text">
                    от 50₽/ученик
                  </CardTitle>
                  <CardDescription className="font-nunito text-gray-400">
                    Для школ и колледжей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-nunito text-gray-400">
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-orange"
                        size={16}
                      />
                      Административная панель
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-orange"
                        size={16}
                      />
                      Управление классами
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-orange"
                        size={16}
                      />
                      Отчёты по успеваемости
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-orange"
                        size={16}
                      />
                      Интеграция с LMS
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-orange"
                        size={16}
                      />
                      Обучение учителей
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-jolly-orange hover:bg-jolly-orange/90 font-nunito">
                    Запросить демо
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-dark-card border-dark-gray hover:border-jolly-mint/50 transition-colors duration-300">
                <CardHeader className="text-center">
                  <Badge className="bg-jolly-mint/20 text-jolly-mint font-nunito mb-4">
                    Университеты
                  </Badge>
                  <CardTitle className="font-fredoka text-2xl text-dark-text">
                    Индивидуально
                  </CardTitle>
                  <CardDescription className="font-nunito text-gray-400">
                    Для ВУЗов и крупных организаций
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-nunito text-gray-400">
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-mint"
                        size={16}
                      />
                      Всё из плана Школы
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-mint"
                        size={16}
                      />
                      Белая маркировка
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-mint"
                        size={16}
                      />
                      API для интеграций
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-mint"
                        size={16}
                      />
                      Выделенный сервер
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        className="text-jolly-mint"
                        size={16}
                      />
                      Персональный менеджер
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-jolly-mint hover:bg-jolly-mint/90 font-nunito">
                    Обсудить условия
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-jolly-blue/10 to-jolly-lavender/10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-6 text-dark-text">
              Готовы <span className="text-jolly-blue">начать</span>?
            </h2>
            <p className="text-xl text-gray-400 font-nunito max-w-3xl mx-auto">
              Присоединяйтесь к тысячам студентов, которые уже превратили
              обучение в увлекательную игру
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-dark-card rounded-2xl shadow-xl p-8 mb-8">
              <img
                src="/img/74bff36c-6726-4769-bf9d-5150b7cb6b46.jpg"
                alt="Happy students"
                className="rounded-xl mb-6 mx-auto max-w-sm w-full"
              />
              <h3 className="text-2xl font-fredoka font-bold mb-4 text-dark-text">
                Начните своё образовательное приключение сегодня!
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-jolly-blue hover:bg-jolly-blue/90 font-nunito"
                >
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать бесплатно
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-jolly-lavender text-jolly-lavender hover:bg-jolly-lavender/10 font-nunito"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="flex justify-center gap-8 text-gray-400">
              <a href="#" className="hover:text-jolly-blue transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a
                href="#"
                className="hover:text-jolly-lavender transition-colors"
              >
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="hover:text-jolly-mint transition-colors">
                <Icon name="MessageSquare" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-card text-dark-text py-12 border-t border-dark-gray">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/files/0606a848-3d3e-45b7-a17f-c2c4ea2fc5cb.png"
                alt="JollyLevelUP"
                className="w-7 h-7"
              />
              <h3 className="text-2xl font-fredoka font-bold">JollyLevelUP</h3>
            </div>
            <p className="text-gray-400 font-nunito mb-6">
              Превращаем обучение в захватывающее приключение
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="#about"
                className="text-gray-400 hover:text-jolly-blue transition-colors font-nunito"
              >
                О нас
              </a>
              <a
                href="#features"
                className="text-gray-400 hover:text-jolly-lavender transition-colors font-nunito"
              >
                Возможности
              </a>
              <a
                href="#team"
                className="text-gray-400 hover:text-jolly-mint transition-colors font-nunito"
              >
                Команда
              </a>
              <a
                href="#pricing"
                className="text-gray-400 hover:text-jolly-orange transition-colors font-nunito"
              >
                Тарифы
              </a>
            </div>
            <div className="border-t border-dark-gray pt-6">
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
