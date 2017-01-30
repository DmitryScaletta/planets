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




BEGIN TRANSACTION;

-- планета
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

-- спутник
CREATE TABLE IF NOT EXISTS Satellite
(
    id                  INTEGER     PRIMARY KEY AUTOINCREMENT,
    planet_id           INTEGER,    -- id планеты
    name                TEXT,       -- название
    radius              INTEGER,    -- радиус
    distance            INTEGER     -- расстояние до планеты
);

-- галактика
CREATE TABLE IF NOT EXISTS Galaxy
(
    id                  INTEGER     PRIMARY KEY AUTOINCREMENT,
    name                TEXT        -- название
);


INSERT INTO Satellite (id,planet_id,name,radius,distance) VALUES
(1,  1,  'Deimos',      14532, 345200),
(2,  1,  'Phobos',      7048,  230675),
(3,  2,  'Io',          13414, 190634),
(4,  3,  'Europa',      13855, 549738),
(5,  3,  'Ganymede',    17919, 941277),
(6,  3,  'Callisto',    4401,  223532),
(7,  4,  'Amalthea',    18745, 750663),
(8,  4,  'Himalia',     2785,  831323),
(9,  5,  'Elara',       19595, 298064),
(10, 6,  'Pasiphae',    2651,  248740),
(11, 6,  'Sinope',      13770, 629989),
(12, 8,  'Lysithea',    17515, 849780),
(13, 8,  'Carme',       6461,  801501),
(14, 8,  'Ananke',      13345, 204620),
(15, 9,  'Leda',        14117, 716530),
(16, 9,  'Thebe',       17355, 514839),
(17, 10, 'Adrastea',    5456,  268754),
(18, 11, 'Metis',       3342,  431154),
(19, 11, 'Callirrhoe',  1932,  581978),
(20, 12, 'Themisto',    6503,  442031),
(21, 12, 'Megaclite',   7778,  857202),
(22, 13, 'Taygete',     19652, 858134),
(23, 13, 'Chaldene',    9547,  156258),
(24, 13, 'Harpalyke',   3904,  207582),
(25, 13, 'Kalyke',      16538, 880369),
(26, 15, 'Iocaste',     12154, 341306),
(27, 16, 'Erinome',     4696,  856454),
(28, 16, 'Isonoe',      9751,  170794),
(29, 17, 'Praxidike',   18433, 598048),
(30, 18, 'Autonoe',     11570, 992892),
(31, 18, 'Thyone',      14530, 876743),
(32, 19, 'Hermippe',    10712, 398107),
(33, 19, 'Aitne',       12951, 110199),
(34, 19, 'Eurydome',    14060, 75325 ),
(35, 20, 'Euanthe',     9429,  692629),
(36, 20, 'Euporie',     4389,  447278),
(37, 21, 'Orthosie',    19632, 365294),
(38, 21, 'Sponde',      6433,  166062),
(39, 21, 'Kale',        9921,  239834),
(40, 22, 'Pasithee',    13761, 284084),
(41, 23, 'Hegemone',    8276,  519915),
(42, 25, 'Mneme',       13064, 172431),
(43, 25, 'Aoede',       3913,  832661),
(44, 26, 'Thelxinoe',   17926, 929967),
(45, 27, 'Arche',       5988,  222993),
(46, 29, 'Kallichore',  12639, 463300),
(47, 29, 'Helike',      18058, 793404),
(48, 29, 'Carpo',       2511,  932853),
(49, 30, 'Eukelade',    2331,  68233 ),
(50, 30, 'Cyllene',     6018,  816897),
(51, 31, 'Kore',        18159, 737972),
(52, 31, 'Herse',       15091, 672202),
(53, 32, 'S/2010 J 1',  11692, 752143),
(54, 33, 'S/2010 J 2',  2231,  337073),
(55, 33, 'Dia',         15846, 949286),
(56, 34, 'S/2003 J 2',  6634,  415846),
(57, 35, 'S/2003 J 3',  16895, 145249),
(58, 35, 'S/2003 J 4',  18081, 908671),
(59, 35, 'S/2003 J 5',  3590,  345131),
(60, 36, 'S/2003 J 9',  1678,  89459 ),
(61, 37, 'S/2003 J 10', 3082,  281617),
(62, 37, 'S/2003 J 12', 9517,  874566),
(63, 39, 'S/2003 J 15', 18076, 313066),
(64, 39, 'S/2003 J 16', 18130, 161218),
(65, 39, 'S/2003 J 18', 9052,  403658),
(66, 40, 'S/2003 J 19', 13847, 765961),
(67, 40, 'S/2003 J 23', 18164, 81541 ),
(68, 40, 'S/2011 J 1',  14963, 672617),
(69, 40, 'S/2011 J 2',  2393,  602792),
(70, 41, 'Mimas',       10569, 126247),
(71, 43, 'Enceladus',   11674, 50095 ),
(72, 43, 'Tethys',      4083,  700539),
(73, 44, 'Dione',       10659, 217338),
(74, 44, 'Rhea',        2556,  571739),
(75, 44, 'Titan',       6170,  695792),
(76, 45, 'Hyperion',    10840, 264023),
(77, 45, 'Iapetus',     17837, 731490),
(78, 46, 'Phoebe',      6935,  333351),
(79, 46, 'Janus',       6456,  61821 ),
(80, 47, 'Epimetheus',  18161, 116013),
(81, 47, 'Helene',      9214,  397625),
(82, 47, 'Telesto',     19486, 821391),
(83, 48, 'Calypso',     14603, 806055),
(84, 50, 'Atlas',       17996, 597024),
(85, 50, 'Prometheus',  9961,  773510),
(86, 51, 'Pandora',     17685, 777397),
(87, 51, 'Pan',         15696, 322759),
(88, 51, 'Ymir',        12431, 616475),
(89, 52, 'Paaliaq',     7048,  77696 ),
(90, 52, 'Tarvos',      7956,  289058),
(91, 52, 'Ijiraq',      16656, 312765),
(92, 52, 'Suttungr',    9038,  943998),
(93, 52, 'Kiviuq',      16858, 695554),
(94, 53, 'Mundilfari',  1837,  630599),
(95, 53, 'Albiorix',    4540,  634756),
(96, 53, 'Skathi',      10967, 740592),
(97, 53, 'Erriapus',    4345,  312222),
(98, 54, 'Siarnaq',     14408, 628919),
(99, 54, 'Thrymr',      1366,  454843),
(100, 54, 'Narvi',      1401,  57212 ),
(101, 54, 'Methone',    5544,  80075 ),
(102, 54, 'Pallene',    16369, 113736),
(103, 54, 'Polydeuces', 900,   364535),
(104, 54, 'Daphnis',    5899,  854942),
(105, 55, 'Aegir',      12777, 687890),
(106, 55, 'Bebhionn',   17720, 109472),
(107, 55, 'Bergelmir',  3645,  895190),
(108, 55, 'Bestla',     608,   65004 ),
(109, 56, 'Moon',       1737,  384400);

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
(1,  1,  'Proxima Centauri',   15950, 4938,  0, 0),
(2,  1,  'Alpha Centauri',     19376, 5809,  0, 0),
(3,  1,  'Luhman 16',          16645, 15895, 1, 0),
(4,  2,  'Epsilon Eridani',    7312,  14125, 0, 0),
(5,  2,  'Groombridge 34',     1143,  4637,  1, 0),
(6,  2,  'Epsilon Indi',       15097, 7438,  1, 0),
(7,  3,  'Tau Ceti',           19433, 1504,  1, 0),
(8,  3,  'Kapteyn''s star',    13207, 17232, 0, 0),
(9,  4,  'Wolf 1061',          17804, 4234,  1, 0),
(10, 4,  'Gliese 687',         10509, 13990, 1, 0),
(11, 4,  'Gliese 674',         12885, 14873, 0, 0),
(12, 4,  'Gliese 876',         2315,  1439,  1, 0),
(13, 5,  'Gliese 832',         14641, 8700,  0, 0),
(14, 6,  'Gliese 682',         3276,  1198,  0, 0),
(15, 6,  'Gliese 229',         13830, 13067, 0, 0),
(16, 6,  '82 G. Eridani',      4068,  16967, 0, 0),
(17, 6,  'Gliese 581',         19032, 14312, 1, 0),
(18, 7,  'HD 219134',          5604,  10621, 1, 0),
(19, 7,  'Gliese 667',         14143, 7236,  0, 0),
(20, 8,  'HD 95872',           5682,  17681, 0, 0),
(21, 8,  'Fomalhaut',          14909, 3199,  1, 0),
(22, 8,  '61 Virginis',        2149,  13457, 0, 0),
(23, 8,  'HD 192310',          13584, 6872,  1, 0),
(24, 9,  'Gliese 433',         16133, 4641,  0, 0),
(25, 9,  'Gliese 849',         16481, 10351, 0, 0),
(26, 9,  'HD 102365',          4753,  10102, 1, 0),
(27, 10, 'Gliese 176',         1234,  5990,  0, 0),
(28, 10, 'Gliese 436',         6851,  7807,  1, 0),
(29, 10, 'Gliese 649',         1756,  10263, 1, 0),
(30, 10, 'Pollux',             8083,  18009, 1, 0),
(31, 11, 'Gliese 86',          9120,  10540, 0, 0),
(32, 11, 'HIP 57050',          17477, 902,   1, 0),
(33, 12, '54 Piscium',         13678, 2514,  1, 0),
(34, 12, 'HD 85512',           16272, 19611, 0, 0),
(35, 12, 'GJ 180',             15304, 7581,  0, 0),
(36, 13, 'Ross 458',           14270, 13245, 0, 0),
(37, 13, 'Gliese 1132',        5423,  19357, 1, 0),
(38, 13, 'Gliese 179',         13014, 7677,  1, 0),
(39, 13, '55 Cancri',          11327, 17461, 1, 0),
(40, 14, 'HD 69830',           6190,  7725,  0, 0),
(41, 14, 'Innes'' star',       6395,  16573, 1, 0),
(42, 14, 'VHS 1256-1257',      15645, 1685,  1, 0),
(43, 15, 'HD 147513',          4745,  16969, 0, 0),
(44, 15, 'HD 40307',           9286,  13187, 1, 0),
(45, 15, 'GJ 1214',            4323,  3863,  0, 0),
(46, 15, 'Upsilon Andromedae', 19212, 11832, 1, 0),
(47, 15, 'Gamma Cephei',       1629,  12613, 0, 0),
(48, 16, '47 Ursae Majoris',   13157, 5856,  0, 0),
(49, 16, 'HIP 79431',          10695, 11448, 0, 0),
(50, 16, 'Nu2 Lupi',           677,   10758, 0, 0),
(51, 16, 'Gliese 163',         3451,  15563, 0, 0),
(52, 17, 'HD 176051',          16581, 18665, 0, 0),
(53, 17, 'Gliese 317',         9736,  17508, 0, 0),
(54, 17, 'HD 38858',           17977, 12498, 0, 0),
(55, 17, 'Mu Arae',            591,   19422, 0, 0),
(56, 12, 'Earth',              3192,  5009,  1, 1);

END TRANSACTION;