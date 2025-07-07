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
      <header className="bg-dark-secondary/95 backdrop-blur-sm border-b border-dark-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Gamepad2" className="text-accent-cyan" size={32} />
            <h1 className="text-2xl font-bold text-text-primary">
              JollyLevelUP
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-text-secondary hover:text-accent-cyan transition-colors"
            >
              О приложении
            </a>
            <a
              href="#team"
              className="text-text-secondary hover:text-accent-cyan transition-colors"
            >
              Команда
            </a>
            <a
              href="#pricing"
              className="text-text-secondary hover:text-accent-cyan transition-colors"
            >
              Тарифы
            </a>
            <a
              href="#contact"
              className="text-text-secondary hover:text-accent-cyan transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-accent-cyan to-accent-green hover:from-accent-cyan/90 hover:to-accent-green/90 text-dark-bg font-medium">
            Попробовать бесплатно
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 to-accent-green/5 blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-accent-purple to-accent-cyan text-white text-sm px-4 py-2 border-0">
            🚀 Новое поколение образования
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-primary leading-tight">
            Обучение как
            <span className="bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
              игра
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Превратите скучную учёбу в увлекательное приключение с геймификацией
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent-cyan to-accent-green hover:from-accent-cyan/90 hover:to-accent-green/90 text-dark-bg font-medium text-lg px-8 py-3"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 text-lg px-8 py-3"
            >
              <Icon name="Video" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>
          <div className="relative">
            <div className="bg-dark-card rounded-2xl p-8 border border-dark-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-cyan mb-2">
                    2000+
                  </div>
                  <div className="text-text-secondary text-sm">Студентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-green mb-2">
                    95%
                  </div>
                  <div className="text-text-secondary text-sm">Успех</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-purple mb-2">
                    50+
                  </div>
                  <div className="text-text-secondary text-sm">Курсов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-orange mb-2">
                    24/7
                  </div>
                  <div className="text-text-secondary text-sm">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              Почему{" "}
              <span className="bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
                JollyLevelUP
              </span>
              ?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Наше приложение использует проверенные методики геймификации для
              повышения мотивации и эффективности обучения
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-dark-card border-dark-border hover:border-accent-cyan/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-accent-cyan/20 to-accent-green/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-accent-cyan/30 group-hover:to-accent-green/30 transition-all">
                  <Icon name="Trophy" className="text-accent-cyan" size={28} />
                </div>
                <CardTitle className="text-xl text-text-primary">
                  Система достижений
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-secondary text-center">
                  Зарабатывайте награды, бейджи и очки опыта за каждое
                  выполненное задание
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-dark-card border-dark-border hover:border-accent-green/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-accent-green/20 to-accent-purple/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-accent-green/30 group-hover:to-accent-purple/30 transition-all">
                  <Icon name="Users" className="text-accent-green" size={28} />
                </div>
                <CardTitle className="text-xl text-text-primary">
                  Социальное обучение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-secondary text-center">
                  Соревнуйтесь с друзьями, создавайте команды и делитесь
                  успехами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-dark-card border-dark-border hover:border-accent-purple/50 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-accent-purple/20 to-accent-orange/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-accent-purple/30 group-hover:to-accent-orange/30 transition-all">
                  <Icon name="Brain" className="text-accent-purple" size={28} />
                </div>
                <CardTitle className="text-xl text-text-primary">
                  Адаптивный ИИ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-secondary text-center">
                  Персонализированный подход к обучению на основе ваших
                  способностей
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              Наша{" "}
              <span className="bg-gradient-to-r from-accent-purple to-accent-orange bg-clip-text text-transparent">
                команда
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Эксперты в области EdTech и геймификации, которые делают обучение
              увлекательным
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-dark-card border-dark-border hover:border-accent-cyan/50 transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-accent-cyan to-accent-green rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-dark-bg" size={32} />
                </div>
                <CardTitle className="text-xl text-text-primary">
                  Анна Смирнова
                </CardTitle>
                <CardDescription className="text-accent-cyan">
                  CEO & Основатель
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-center">
                  10+ лет в EdTech, эксперт по геймификации образования
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-card border-dark-border hover:border-accent-green/50 transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-accent-green to-accent-purple rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Code" className="text-dark-bg" size={32} />
                </div>
                <CardTitle className="text-xl text-text-primary">
                  Максим Петров
                </CardTitle>
                <CardDescription className="text-accent-green">
                  CTO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-center">
                  Ведущий разработчик с опытом создания игровых платформ
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-card border-dark-border hover:border-accent-purple/50 transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-accent-purple to-accent-orange rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Palette" className="text-dark-bg" size={32} />
                </div>
                <CardTitle className="text-xl text-text-primary">
                  Елена Козлова
                </CardTitle>
                <CardDescription className="text-accent-purple">
                  Head of Design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-center">
                  UX/UI дизайнер, специалист по игровому дизайну
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              Выберите свой{" "}
              <span className="bg-gradient-to-r from-accent-orange to-accent-cyan bg-clip-text text-transparent">
                уровень
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Начните бесплатно и повышайте уровень по мере роста ваших
              потребностей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-dark-card border-dark-border hover:border-accent-cyan/50 transition-colors duration-300">
              <CardHeader className="text-center">
                <Badge className="bg-dark-border text-text-secondary mb-4">
                  Новичок
                </Badge>
                <CardTitle className="text-2xl text-text-primary">
                  Бесплатно
                </CardTitle>
                <CardDescription className="text-text-secondary">
                  Идеально для начала
                </CardDescription>
                <div className="my-4">
                  <Progress value={30} className="h-2" />
                  <p className="text-sm text-text-muted mt-2">30% функций</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-accent-green"
                      size={16}
                    />
                    5 курсов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-accent-green"
                      size={16}
                    />
                    Базовая геймификация
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-accent-green"
                      size={16}
                    />
                    Статистика прогресса
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-dark-border text-text-secondary hover:bg-dark-border/80">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-dark-card border-accent-cyan shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-accent-cyan to-accent-green text-dark-bg px-4 py-2">
                  🔥 Популярный
                </Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="bg-gradient-to-r from-accent-cyan/20 to-accent-green/20 text-accent-cyan mb-4 mt-4">
                  Продвинутый
                </Badge>
                <CardTitle className="text-2xl text-text-primary">
                  990₽/мес
                </CardTitle>
                <CardDescription className="text-text-secondary">
                  Для серьёзного обучения
                </CardDescription>
                <div className="my-4">
                  <Progress value={80} className="h-2" />
                  <p className="text-sm text-text-muted mt-2">80% функций</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent-cyan" size={16} />
                    Безлимит курсов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent-cyan" size={16} />
                    Полная геймификация
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent-cyan" size={16} />
                    Соревнования
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent-cyan" size={16} />
                    Персональный ментор
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-accent-cyan to-accent-green hover:from-accent-cyan/90 hover:to-accent-green/90 text-dark-bg">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-dark-card border-dark-border hover:border-accent-purple/50 transition-colors duration-300">
              <CardHeader className="text-center">
                <Badge className="bg-gradient-to-r from-accent-purple/20 to-accent-orange/20 text-accent-purple mb-4">
                  Эксперт
                </Badge>
                <CardTitle className="text-2xl text-text-primary">
                  1990₽/мес
                </CardTitle>
                <CardDescription className="text-text-secondary">
                  Максимальные возможности
                </CardDescription>
                <div className="my-4">
                  <Progress value={100} className="h-2" />
                  <p className="text-sm text-text-muted mt-2">100% функций</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-accent-purple"
                      size={16}
                    />
                    Всё из плана Продвинутый
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-accent-purple"
                      size={16}
                    />
                    Создание своих курсов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-accent-purple"
                      size={16}
                    />
                    Аналитика и отчёты
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Check"
                      className="text-accent-purple"
                      size={16}
                    />
                    Приоритетная поддержка
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-accent-purple to-accent-orange hover:from-accent-purple/90 hover:to-accent-orange/90 text-dark-bg">
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              Готовы{" "}
              <span className="bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
                начать
              </span>
              ?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Присоединяйтесь к тысячам студентов, которые уже превратили
              обучение в увлекательную игру
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 mb-8">
              <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-green/10 rounded-xl p-6 mb-6">
                <Icon
                  name="Rocket"
                  className="text-accent-cyan mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-2xl font-bold mb-4 text-text-primary">
                  Начните своё образовательное приключение сегодня!
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent-cyan to-accent-green hover:from-accent-cyan/90 hover:to-accent-green/90 text-dark-bg"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать бесплатно
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="flex justify-center gap-8 text-text-secondary">
              <a href="#" className="hover:text-accent-cyan transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="hover:text-accent-green transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a
                href="#"
                className="hover:text-accent-purple transition-colors"
              >
                <Icon name="MessageSquare" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-secondary border-t border-dark-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Gamepad2" className="text-accent-cyan" size={28} />
              <h3 className="text-2xl font-bold text-text-primary">
                JollyLevelUP
              </h3>
            </div>
            <p className="text-text-secondary mb-6">
              Превращаем обучение в захватывающее приключение
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="#about"
                className="text-text-secondary hover:text-accent-cyan transition-colors"
              >
                О нас
              </a>
              <a
                href="#team"
                className="text-text-secondary hover:text-accent-green transition-colors"
              >
                Команда
              </a>
              <a
                href="#pricing"
                className="text-text-secondary hover:text-accent-purple transition-colors"
              >
                Тарифы
              </a>
              <a
                href="#contact"
                className="text-text-secondary hover:text-accent-orange transition-colors"
              >
                Контакты
              </a>
            </div>
            <div className="border-t border-dark-border pt-6">
              <p className="text-text-muted text-sm">
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
