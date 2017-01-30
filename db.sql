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


-- вспомагательный запрос - получение спутников для планет
SELECT 
    s.name,
    s.planet_id,
    p.name AS planet_name,
    s.name,
    s.radius,
    s.distance
FROM Satellite AS s
INNER JOIN Planet AS p ON s.planet_id=p.id
WHERE p.id IN ()


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
    SUM(p.core_temperature) AS sum_of_core_temperatures
FROM Galaxy AS g
INNER JOIN Planet AS p ON g.id=p.galaxy_id
GROUP BY g.id
ORDER BY sum_of_core_temperatures DESC




CREATE TABLE IF NOT EXISTS Planet
(
    id                  INTEGER     PRIMARY KEY AUTOINCREMENT,
    galaxy_id           INTEGER,    -- id галактики
    name                TEXT,       -- название;
    radius              INTEGER,    -- радиус
    core_temperature    INTEGER,    -- температура ядра
    atmosphere          INTEGER,    -- наличие атмосферы
    life                INTEGER     -- наличие жизни
);

CREATE TABLE IF NOT EXISTS Satellite
(
    id                  INTEGER     PRIMARY KEY AUTOINCREMENT,
    planet_id           INTEGER,    -- id планеты
    name                TEXT,       -- название
    radius              INTEGER,    -- радиус
    distance            INTEGER     -- расстояние до планеты
);

CREATE TABLE IF NOT EXISTS Galaxy
(
    id                  INTEGER     PRIMARY KEY AUTOINCREMENT,
    name                TEXT        -- название
);

INSERT INTO Satellite (planet_id,name,radius,distance) VALUES
(1,  'Deimos',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(1,  'Phobos',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(2,  'Io',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(3,  'Europa',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(3,  'Ganymede',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(3,  'Callisto',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(4,  'Amalthea',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(4,  'Himalia',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(5,  'Elara',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(6,  'Pasiphae',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(6,  'Sinope',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(8,  'Lysithea',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(8,  'Carme',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(8,  'Ananke',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(9,  'Leda',        ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(9,  'Thebe',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(10, 'Adrastea',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(11, 'Metis',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(11, 'Callirrhoe',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(12, 'Themisto',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(12, 'Megaclite',   ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(13, 'Taygete',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(13, 'Chaldene',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(13, 'Harpalyke',   ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(13, 'Kalyke',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(15, 'Iocaste',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(16, 'Erinome',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(16, 'Isonoe',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(17, 'Praxidike',   ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(18, 'Autonoe',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(18, 'Thyone',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(19, 'Hermippe',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(19, 'Aitne',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(19, 'Eurydome',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(20, 'Euanthe',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(20, 'Euporie',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(21, 'Orthosie',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(21, 'Sponde',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(21, 'Kale',        ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(22, 'Pasithee',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(23, 'Hegemone',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(25, 'Mneme',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(25, 'Aoede',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(26, 'Thelxinoe',   ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(27, 'Arche',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(29, 'Kallichore',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(29, 'Helike',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(29, 'Carpo',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(30, 'Eukelade',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(30, 'Cyllene',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(31, 'Kore',        ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(31, 'Herse',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(32, 'S/2010 J 1',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(33, 'S/2010 J 2',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(33, 'Dia',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(34, 'S/2003 J 2',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(35, 'S/2003 J 3',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(35, 'S/2003 J 4',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(35, 'S/2003 J 5',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(36, 'S/2003 J 9',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(37, 'S/2003 J 10', ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(37, 'S/2003 J 12', ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(39, 'S/2003 J 15', ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(39, 'S/2003 J 16', ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(39, 'S/2003 J 18', ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(40, 'S/2003 J 19', ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(40, 'S/2003 J 23', ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(40, 'S/2011 J 1',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(40, 'S/2011 J 2',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(41, 'Mimas',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(43, 'Enceladus',   ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(43, 'Tethys',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(44, 'Dione',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(44, 'Rhea',        ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(44, 'Titan',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(45, 'Hyperion',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(45, 'Iapetus',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(46, 'Phoebe',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(46, 'Janus',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(47, 'Epimetheus',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(47, 'Helene',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(47, 'Telesto',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(48, 'Calypso',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(50, 'Atlas',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(50, 'Prometheus',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(51, 'Pandora',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(51, 'Pan',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(51, 'Ymir',        ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(52, 'Paaliaq',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(52, 'Tarvos',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(52, 'Ijiraq',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(52, 'Suttungr',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(52, 'Kiviuq',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(53, 'Mundilfari',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(53, 'Albiorix',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(53, 'Skathi',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(53, 'Erriapus',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(54, 'Siarnaq',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(54, 'Thrymr',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(54, 'Narvi',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(54, 'Methone',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(54, 'Pallene',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(54, 'Polydeuces',  ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(54, 'Daphnis',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(55, 'Aegir',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(55, 'Bebhionn',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(55, 'Bergelmir',   ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(55, 'Bestla',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (1000000 - 50000) + 50000),
(56, 'Moon',        1737, 384400);


INSERT INTO Galaxy (id,name) VALUES 
(1,  'Andromeda'),
(2,  'Black Eye Galaxy'),
(3,  'Bode''s Galaxy'),
(4,  'Cartwheel Galaxy'),
(5,  'Cigar Galaxy'),
(6,  'Comet Galaxy'),
(7,  'Cosmos Redshift 7'),
(8,  'Hoag''s Object'),
(9,  'Large Magellanic Cloud'),
(10, 'Small Magellanic Cloud'),
(11, 'Mayall''s Object'),
(12, 'Milky Way'),
(13, 'Pinwheel Galaxy'),
(14, 'Sombrero Galaxy'),
(15, 'Sunflower Galaxy'),
(16, 'Tadpole Galaxy'),
(17, 'Whirlpool Galaxy');

INSERT INTO Planet (id,galaxy_id,name,radius,core_temperature,atmosphere,life) VALUES
(1,  1,  'Proxima Centauri',   ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(2,  1,  'Alpha Centauri',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(3,  1,  'Luhman 16',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(4,  2,  'Epsilon Eridani',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(5,  2,  'Groombridge 34',     ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(6,  2,  'Epsilon Indi',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(7,  3,  'Tau Ceti',           ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(8,  3,  'Kapteyn''s star',    ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(9,  4,  'Wolf 1061',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(10, 4,  'Gliese 687',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(11, 4,  'Gliese 674',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(12, 4,  'Gliese 876',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(13, 5,  'Gliese 832',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(14, 6,  'Gliese 682',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(15, 6,  'Gliese 229',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(16, 6,  '82 G. Eridani',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(17, 6,  'Gliese 581',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(18, 7,  'HD 219134',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(19, 7,  'Gliese 667',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(20, 8,  'HD 95872',           ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(21, 8,  'Fomalhaut',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(22, 8,  '61 Virginis',        ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(23, 8,  'HD 192310',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(24, 9,  'Gliese 433',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(25, 9,  'Gliese 849',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(26, 9,  'HD 102365',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(27, 10, 'Gliese 176',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(28, 10, 'Gliese 436',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(29, 10, 'Gliese 649',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(30, 10, 'Pollux',             ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(31, 11, 'Gliese 86',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(32, 11, 'HIP 57050',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(33, 12, '54 Piscium',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(34, 12, 'HD 85512',           ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(35, 12, 'GJ 180',             ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(36, 13, 'Ross 458',           ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(37, 13, 'Gliese 1132',        ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(38, 13, 'Gliese 179',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(39, 13, '55 Cancri',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(40, 14, 'HD 69830',           ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(41, 14, 'Innes'' star',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(42, 14, 'VHS 1256-1257',      ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(43, 15, 'HD 147513',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(44, 15, 'HD 40307',           ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(45, 15, 'GJ 1214',            ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(46, 15, 'Upsilon Andromedae', ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(47, 15, 'Gamma Cephei',       ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(48, 16, '47 Ursae Majoris',   ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(49, 16, 'HIP 79431',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(50, 16, 'Nu2 Lupi',           ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(51, 16, 'Gliese 163',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(52, 17, 'HD 176051',          ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(53, 17, 'Gliese 317',         ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(54, 17, 'HD 38858',           ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(55, 17, 'Mu Arae',            ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % 2, 0),
(56, 12, 'Earth',              ABS(RANDOM()) % (20000 - 500) + 500, ABS(RANDOM()) % (20000 - 500) + 500, 1, 1);