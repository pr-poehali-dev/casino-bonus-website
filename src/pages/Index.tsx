import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const casinos = [
    {
      id: 1,
      name: "Casino Royal",
      bonus: "100% до 50,000₽",
      rating: 4.8,
      license: "Malta Gaming Authority",
      features: ["Быстрые выплаты", "24/7 поддержка", "Криптовалюта"],
      image: "🎰"
    },
    {
      id: 2,
      name: "Lucky Star",
      bonus: "200% + 100 FS",
      rating: 4.6,
      license: "Curacao eGaming",
      features: ["Live казино", "Турниры", "VIP программа"],
      image: "⭐"
    },
    {
      id: 3,
      name: "Golden Palace",
      bonus: "150% + 50 FS",
      rating: 4.7,
      license: "UK Gambling Commission",
      features: ["Мобильная версия", "Слоты", "Рулетка"],
      image: "👑"
    },
    {
      id: 4,
      name: "Diamond Club",
      bonus: "300% до 100,000₽",
      rating: 4.9,
      license: "Gibraltar Regulatory Authority",
      features: ["Эксклюзивные игры", "Кэшбэк", "Личный менеджер"],
      image: "💎"
    }
  ];

  const topBonuses = [
    {
      type: "Приветственный",
      description: "Получите до 500% на первые депозиты",
      gradient: "gradient-casino"
    },
    {
      type: "Без депозита",
      description: "Бесплатные вращения за регистрацию",
      gradient: "gradient-casino-reverse"
    },
    {
      type: "Кэшбэк",
      description: "Возврат до 25% проигранных средств",
      gradient: "gradient-casino"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-casino-dark via-gray-900 to-casino-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎰</span>
              <h1 className="text-2xl font-bold gradient-text">CASINO BONUSES</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-white hover:text-casino-orange transition-colors">Главная</a>
              <a href="#bonuses" className="text-white hover:text-casino-orange transition-colors">Бонусы</a>
              <a href="#casinos" className="text-white hover:text-casino-orange transition-colors">Казино</a>
              <a href="#rating" className="text-white hover:text-casino-orange transition-colors">Рейтинг</a>
            </div>
            <Button className="gradient-casino text-white hover:opacity-90">
              Получить бонус
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Лучшие бонусы<br />
              <span className="gradient-text">онлайн-казино</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Получите эксклюзивные бонусы в проверенных казино с лицензиями и сертификатами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-casino text-white text-lg px-8 py-4 hover:opacity-90">
                <Icon name="Gift" className="mr-2" />
                Топ бонусы
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-casino-dark">
                <Icon name="Award" className="mr-2" />
                Рейтинг казино
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Bonuses */}
      <section id="bonuses" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            🎁 Топ бонусов
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {topBonuses.map((bonus, index) => (
              <Card key={index} className="glass-card border-0 animate-scale-in hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className={`${bonus.gradient} rounded-lg p-6 text-white text-center mb-4`}>
                    <h4 className="text-xl font-bold mb-2">{bonus.type}</h4>
                    <p className="text-sm opacity-90">{bonus.description}</p>
                  </div>
                  <Button className="w-full gradient-casino-reverse text-white hover:opacity-90">
                    Получить бонус
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casino Cards */}
      <section id="casinos" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            🏆 Рейтинг казино
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {casinos.map((casino, index) => (
              <Card key={casino.id} className="glass-card border-0 animate-fade-in hover:scale-[1.02] transition-transform">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{casino.image}</span>
                      <div>
                        <CardTitle className="text-white text-xl">{casino.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex text-casino-gold">
                            {[...Array(5)].map((_, i) => (
                              <Icon 
                                key={i} 
                                name="Star" 
                                size={16} 
                                className={i < Math.floor(casino.rating) ? "fill-current" : "opacity-30"} 
                              />
                            ))}
                          </div>
                          <span className="text-white text-sm">{casino.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="text-xs">#{index + 1}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="gradient-casino rounded-lg p-4 text-white text-center mb-4">
                    <p className="text-lg font-bold">{casino.bonus}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Shield" size={16} className="text-green-400" />
                      <span className="text-sm text-gray-300">Лицензия: {casino.license}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {casino.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 gradient-casino text-white hover:opacity-90">
                      Играть
                    </Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-casino-dark">
                      <Icon name="ExternalLink" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section id="rating" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              📊 Критерии оценки
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Мы оцениваем казино по строгим критериям: лицензии, безопасность, скорость выплат и качество поддержки
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: "Shield", title: "Лицензия", desc: "Проверенные регуляторы" },
                { icon: "Zap", title: "Выплаты", desc: "Быстрые транзакции" },
                { icon: "Headphones", title: "Поддержка", desc: "24/7 помощь" },
                { icon: "Award", title: "Репутация", desc: "Отзывы игроков" }
              ].map((item, index) => (
                <Card key={index} className="glass-card border-0 text-center p-6 hover:scale-105 transition-transform">
                  <Icon name={item.icon} size={32} className="text-casino-orange mx-auto mb-4" />
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🎰</span>
            <h4 className="text-xl font-bold gradient-text">CASINO BONUSES</h4>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Играйте ответственно. Азартные игры могут вызывать зависимость. 18+
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-casino-orange transition-colors">О нас</a>
            <a href="#" className="hover:text-casino-orange transition-colors">Контакты</a>
            <a href="#" className="hover:text-casino-orange transition-colors">Политика</a>
          </div>
        </div>
      </footer>
    </div>
  );
}