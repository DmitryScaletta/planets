-- На первом занятии необходимо выполнить следующие действия:
-- * Организацию соединения с базой данных вынести в отдельный класс, метод которого возвращает соединение.
-- * Создать БД (MySQL). Привести таблицы к одной из нормированных форм.
-- * Создать класс для выполнения запросов на извлечение информации из БД с использованием компилированных запросов (PreparedStatement).
-- * Создать класс на добавление информации.
-- * Создать класс, реализующий выбор задания и вывод на консоль результатов.
-- * Наполнить таблицы записями. В каждой таблице должно быть не менее 5 записей.
-- На втором занятии необходимо выполнить следующие действия:
-- * Для запросов, созданных на первом занятии создать HTML-документ с полями для формирования запросов.
-- * Результаты выполнения запроса передать клиенту в виде HTML-документа (можно использовать или сервлет, или JSP-страницу с тэгами <% %> или тэги JSTL).



-- 10.  Планеты. В БД хранится информация о планетах, их спутниках и галактиках.
-- Для планет необходимо хранить:
-- – название;
-- – радиус;
-- – температуру ядра;
-- – наличие атмосферы;
-- – наличие жизни;
-- – спутники.
-- Для спутников необходимо хранить:
-- – название;
-- – радиус;
-- – расстояние до планеты.
-- Для галактик необходимо хранить:
-- – название;
-- – планеты.


-- галактики
SELECT g.id,g.name,COUNT(p.id) AS planets_count
FROM Galaxy AS g
INNER JOIN Planet AS p ON g.id=p.galaxy_id


-- планеты
SELECT p.id,p.galaxy_id,g.name AS galaxy_name,p.name,p.radius,p.core_temperature,p.atmosphere,p.life
FROM Planet AS p
INNER JOIN Galaxy AS g ON p.galaxy_id=g.id


-- спутники
SELECT s.id,s.planet_id,p.name AS planet_name,s.name,s.radius,s.distance
FROM Satellite AS s
INNER JOIN Planet AS p ON s.planet_id=p.id


-- * Вывести информацию обо всех планетах, на которых присутствует жизнь, и их спутниках в заданной галактике.
SELECT
    p.id,
    p.name,
    p.galaxy_id,
    g.name AS galaxy_name,
    p.radius,
    p.core_temperature,
    p.atmosphere,
    p.life
FROM Planet AS p
INNER JOIN Galaxy AS g ON p.galaxy_id=g.id
WHERE g.id=? AND p.life=1


-- * Вывести информацию о планетах и их спутниках, имеющих наименьший радиус и наибольшее количество спутников.
SELECT
    p.id,
    p.name,
    p.galaxy_id,
    g.name AS galaxy_name,
    p.radius,
    p.core_temperature,
    p.atmosphere,
    p.life,
    COUNT(p.id) AS satellites_count
FROM Planet AS p
INNER JOIN Galaxy    AS g ON p.galaxy_id=g.id
INNER JOIN Satellite AS s ON s.planet_id=p.id
GROUP BY p.id
ORDER BY p.radius ASC, satellites_count DESC


-- * Вывести информацию о планете, галактике, в которой она находится, и ее спутниках, имеющей максимальное количество спутников, но с наименьшим общим объемом этих спутников.
SELECT
    p.id,
    p.name,
    g.id   AS galaxy_id,
    g.name AS galaxy_name,
    p.radius,
    p.core_temperature,
    p.atmosphere,
    p.life,
    COUNT(p.id) AS satellites_count,
    SUM(2.356194 * s.radius * s.radius * s.radius) AS satellites_volume
FROM Planet AS p
INNER JOIN Galaxy    AS g ON p.galaxy_id=g.id
INNER JOIN Satellite AS s ON s.planet_id=p.id
GROUP BY p.id
ORDER BY satellites_count DESC, satellites_volume ASC


-- * Найти галактику, сумма ядерных температур планет которой наибольшая.
SELECT
    g.id,
    g.name,
    SUM(p.core_temperature) AS sum_of_core_temperatures,
    COUNT(p.id) AS planets_count
FROM Galaxy AS g
INNER JOIN Planet AS p ON g.id=p.galaxy_id
GROUP BY g.id
ORDER BY sum_of_core_temperatures DESC
