# Hadj App
Мобильное приложение "Помощник по хаджу"

Приложение разработано на JS фреймворке ionic 2.0. Страница приложения - https://masjid.ru/hadj/
Для развертывания на локальной машине необходимо: 
Установить окружение:
- установить nodeJS https://nodejs.org
- установить ionic/cordova (команда выполняется из под рута) npm install -g ionic@2.0.0-beta.36 cordova@6.3.1

Создать проект:
1. Создать пустой проект
ionic start hadj --v2 --ts
2. Переходим в директорию проекта
cd hadj
3. Копируем проект приложения из github:
git clone https://github.com/it-muslim/hadj temp
Переносим содержимое папки temp в корневую папку проекта (конфилктующие файлы заменяем)
4. Обновляем зависимости (на варнинги не обращаем внимания)
npm install

Запуск на компьютере
ionic run

Установка доп. модулей:
1. Платформы
ionic platform add ios (работает только на macOS)
ionic platform add android
2. Тайпинги:
npm install xml2js --save
npm install @types/xml2js --save

Сборка приложения
1. Корректируем конфиг:
В файле config.xml прописываем на второй строке имя прилоежния
2. Собираем приложение
ionic build
