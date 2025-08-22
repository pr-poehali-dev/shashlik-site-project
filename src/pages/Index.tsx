import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Flame" size={32} className="text-primary" />
            <h1 className="text-2xl font-heading font-bold text-gray-800">ТАНДЫР</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#menu" className="text-gray-600 hover:text-primary transition-colors">Меню</a>
            <a href="#delivery" className="text-gray-600 hover:text-primary transition-colors">Доставка</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-fire text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-heading font-bold mb-6 animate-fade-in">
            Восточные блюда из настоящего тандыра
          </h2>
          <p className="text-xl mb-8 animate-fade-in">
            Ароматное мясо из тандыра, восточные специи и доставка по всему городу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
              <Icon name="ChefHat" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              <Icon name="Truck" size={20} className="mr-2" />
              Заказать доставку
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Наше меню
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="p-0">
                <img 
                  src="/img/2a7752a6-fbe1-46b2-af21-5fd1502b121e.jpg" 
                  alt="Шашлык из баранины"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 font-heading">Шашлык из баранины</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Нежное мясо, маринованное в специальном соусе с травами
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">580 ₽</span>
                  <Badge className="bg-accent text-accent-foreground">Хит продаж</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="p-0">
                <img 
                  src="/img/0f9fa960-e15a-4fa7-82a5-d34cb4f5ac86.jpg" 
                  alt="Шашлык из свинины"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 font-heading">Шашлык из свинины</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Сочная свинина на мангале с дымком, секретный маринад
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">450 ₽</span>
                  <Badge variant="secondary">Популярное</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="p-0">
                <img 
                  src="/img/8be13084-5f88-4ee8-b056-34cb7b81e34b.jpg" 
                  alt="Свежий салат"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 font-heading">Салат "Свежесть"</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Микс свежих овощей с зеленью и ароматной заправкой
                </CardDescription>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">280 ₽</span>
                  <Badge variant="outline" className="text-green-600 border-green-600">Веган</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Зоны доставки
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon name="MapPin" size={24} className="text-primary mr-3" />
                  <h4 className="text-xl font-heading font-semibold">Центр города</h4>
                </div>
                <p className="text-gray-600 mb-3">Доставка в течение 30-45 минут</p>
                <p className="text-lg font-bold text-primary">Бесплатно при заказе от 1000 ₽</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon name="Clock" size={24} className="text-secondary mr-3" />
                  <h4 className="text-xl font-heading font-semibold">Спальные районы</h4>
                </div>
                <p className="text-gray-600 mb-3">Доставка в течение 45-60 минут</p>
                <p className="text-lg font-bold text-secondary">200 ₽ (бесплатно от 1500 ₽)</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Icon name="Car" size={24} className="text-accent mr-3" />
                  <h4 className="text-xl font-heading font-semibold">За городом</h4>
                </div>
                <p className="text-gray-600 mb-3">Доставка в течение 60-90 минут</p>
                <p className="text-lg font-bold">По договоренности</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-heading font-semibold mb-6 text-center">Калькулятор доставки</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваш адрес</label>
                  <input 
                    type="text" 
                    placeholder="Введите адрес доставки"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сумма заказа</label>
                  <input 
                    type="number" 
                    placeholder="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-6 text-gray-800">
                О нашей шашлычной
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Уже более 15 лет мы готовим лучшие восточные блюда в настоящем тандыре. 
                Традиционные рецепты, отборное мясо и готовка в глиняной печи - 
                вот что делает наши блюда особенными.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Award" size={20} className="text-primary mr-3" />
                  <span>15+ лет опыта</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={20} className="text-primary mr-3" />
                  <span>10000+ довольных клиентов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Heart" size={20} className="text-primary mr-3" />
                  <span>Готовим с любовью</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-orange p-8 rounded-lg text-white">
              <h4 className="text-2xl font-heading font-bold mb-4">Режим работы</h4>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span>Пн-Чт:</span>
                  <span>11:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Пт-Сб:</span>
                  <span>11:00 - 01:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье:</span>
                  <span>12:00 - 22:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Отзывы клиентов
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Лучший шашлык в городе! Мясо просто тает во рту. 
                  Заказываем уже второй год подряд."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Анна К.</p>
                    <p className="text-sm text-gray-500">Постоянный клиент</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Быстрая доставка, всё горячее и вкусное. 
                  Особенно нравится шашлык из баранины!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Михаил Р.</p>
                    <p className="text-sm text-gray-500">Регулярно заказывает</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Заказывали на корпоратив, все были в восторге! 
                  Обязательно закажем ещё."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Елена В.</p>
                    <p className="text-sm text-gray-500">Корпоративный заказ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center mb-12 text-gray-800">
            Контакты
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <Icon name="Phone" size={24} className="text-primary mr-4" />
                <div>
                  <h4 className="font-semibold">Телефон для заказов</h4>
                  <p className="text-lg text-primary font-bold">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center">
                <Icon name="MapPin" size={24} className="text-primary mr-4" />
                <div>
                  <h4 className="font-semibold">Адрес</h4>
                  <p>ул. Шашлычная, 15, Москва</p>
                </div>
              </div>

              <div className="flex items-center">
                <Icon name="Mail" size={24} className="text-primary mr-4" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>info@babashashlik.ru</p>
                </div>
              </div>

              <div className="flex items-center">
                <Icon name="Clock" size={24} className="text-primary mr-4" />
                <div>
                  <h4 className="font-semibold">Время работы</h4>
                  <p>Ежедневно с 11:00 до 23:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h4 className="text-xl font-heading font-semibold mb-6">Быстрый заказ</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Номер телефона"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <textarea 
                  placeholder="Ваш заказ"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                ></textarea>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заказ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Flame" size={32} className="text-accent mr-2" />
            <h4 className="text-2xl font-heading font-bold">ТАНДЫР</h4>
          </div>
          <p className="text-gray-300 mb-4">
            Лучшие восточные блюда из тандыра с доставкой на дом
          </p>
          <p className="text-sm text-gray-400">
            © 2024 Тандыр. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;