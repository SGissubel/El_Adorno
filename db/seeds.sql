USE impulso_db;

-- Load Object Types 
INSERT INTO object_types (obj_type) VALUES ('Artworks');
INSERT INTO object_types (obj_type) VALUES ('Backgrounds');
INSERT INTO object_types (obj_type) VALUES ('Color_Palettes');
INSERT INTO object_types (obj_type) VALUES ('Floors');
INSERT INTO object_types (obj_type) VALUES ('Furniture');
INSERT INTO object_types (obj_type) VALUES ('Rooms');
INSERT INTO object_types (obj_type) VALUES ('Textures');

-- Load Objects - Artwork
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('art01',1,666,999,'3:2',null,100,'art01.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('art02',1,666,999,'3:2',null,100,'art02.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Bayway Diner',1,666,999,'3:2',null,100,'Bayway_Diner.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Blue Hour Manhattan',1,666,999,'3:2',null,100,'Blue_Hour_Manhattan.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Denver Capitol',1,666,999,'3:2',null,100,'Denver_Capitol.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Midtown Magic',1,666,999,'3:2',null,100,'Midtown_Magic.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Monster Bridge',1,666,999,'3:2',null,100,'Monster_Bridge.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Center City Philadelphia',1,666,999,'3:2',null,100,'Center_City_Philadelphia.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Sleepy Hollow LightHouse',1,666,666,'1:1',null,100,'Sleepy_Hollow_LightHouse.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Two Cities',1,666,999,'3:2',null,100,'Two_Cities.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Freedom Tower Lights',1,666,666,'1:1',null,100,'Freedom_Tower_Lights.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Gehry Building',1,999,666,'2:3',null,100,'Gehry_Building.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Jersey City IndieGrove',1,999,666,'2:3',null,100,'Jersey_City_IndieGrove.png','Media/Artwork/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Arthur Kill Bridge',1,666,999,'3:2',null,100,'Arthur_Kill_Bridge.png','Media/Artwork/');

-- Load Objects - Backgrounds
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround01',2,666,999,'3:2',null,100,'bg01.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround02',2,666,999,'3:2',null,100,'bg02.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround03',2,666,999,'3:2',null,100,'bg03.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround05',2,666,999,'3:2',null,100,'bg05.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround06',2,666,999,'3:2',null,100,'bg06.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround08',2,666,999,'3:2',null,100,'bg08.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround09',2,666,999,'3:2',null,100,'bg09.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround10',2,666,999,'3:2',null,100,'bg10.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround11',2,666,999,'3:2',null,100,'bg11.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround12',2,666,999,'3:2',null,100,'bg12.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround13',2,666,999,'3:2',null,100,'bg13.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround14',2,666,999,'3:2',null,100,'bg14.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround15',2,666,999,'3:2',null,100,'bg15.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('backGround18',2,666,999,'3:2',null,100,'bg18.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 

VALUES ('bedRoom01',2,666,999,'3:2',null,100,'br01.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('bedRoom02',2,666,999,'3:2',null,100,'br02.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 

VALUES ('cafe01',2,666,999,'3:2',null,100,'cafe01.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('cafe02',2,666,999,'3:2',null,100,'cafe02.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('cafe03',2,666,999,'3:2',null,100,'cafe03.png','Media/Backgrounds/');

INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('waitingRoom01',2,666,999,'3:2',null,100,'wr01.png','Media/Backgrounds/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('waitingRoom02',2,666,999,'3:2',null,100,'wr02.png','Media/Backgrounds/');

-- Load Objects - Color Palettes
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Behr Timeless Colors',3,0,0,null,null,100,'behr-timeless-colors.ase','Media/Colors/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Benjamin Moore Historical Colors',3,0,0,null,null,100,'BenjaminMoore_HistoricalColors_en-us.ase','Media/Colors/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Kelly Moore Colors',3,0,0,null,null,100,'Kelly_Moore_Colors.ase','Media/Colors/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Sherwin Williams Colors',3,0,0,null,null,100,'Sherwin_Williams_Colors.ase','Media/Colors/');

-- Load Objects - Floors 
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('floor01',4,666,999,'3:2',null,100,'floor01.png','Media/Floors/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('floor02',4,666,999,'3:2',null,100,'floor02.png','Media/Floors/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('floor03',4,666,999,'3:2',null,100,'floor03.png','Media/Floors/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('floor04',4,666,999,'3:2',null,100,'floor04.png','Media/Floors/');

-- Load Objects - Furniture
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('armoire01',5,0,0,null,null,100,'armoire01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('bed01',5,0,0,null,null,100,'bed01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('bed02',5,0,0,null,null,100,'bed02.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('chaise01',5,0,0,null,null,100,'chaise01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('chaise02',5,0,0,null,null,100,'chaise02.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('chestMirror01',5,0,0,null,null,100,'chestMirror01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('closet01',5,0,0,null,null,100,'closet01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('framedMirror01',5,0,0,null,null,100,'framedMirror01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('mirror01',5,0,0,null,null,100,'mirror01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('schrank01',5,0,0,null,null,100,'schrank01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('sectional01',5,0,0,null,null,100,'sectional01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('sofa01',5,0,0,null,null,100,'sofa01.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('sofa02',5,0,0,null,null,100,'sofa02.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('sofa03',5,0,0,null,null,100,'sofa03.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('sofa04',5,0,0,null,null,100,'sofa04.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('sofa05',5,0,0,null,null,100,'sofa05.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('sofa06',5,0,0,null,null,100,'sofa06.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('sofa07',5,0,0,null,null,100,'sofa07.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('sofa08',5,0,0,null,null,100,'sofa08.png','Media/Furniture/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('wickerChair01',5,0,0,null,null,100,'wickerChair01.png','Media/Furniture/');

-- Load Objects - Rooms
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Room01',6,666,999,'3:2',null,100,'br01.jpg','Media/Rooms/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Room02',6,999,666,'2:3',null,100,'br02.jpg','Media/Rooms/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Room03',6,666,999,'3:2',null,100,'br03.jpg','Media/Rooms/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Room04',6,666,999,'3:2',null,100,'br04.jpg','Media/Rooms/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Room05',6,666,999,'3:2',null,100,'gal01.jpg','Media/Rooms/');

-- Load Objects - Textures
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture01',7,666,999,'3:2',null,50,'tx01.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture02',7,666,999,'3:2',null,50,'tx02.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture03',7,666,999,'3:2',null,50,'tx03.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture04',7,666,999,'3:2',null,50,'tx04.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture05',7,666,999,'3:2',null,50,'tx05.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture06',7,666,999,'3:2',null,50,'tx06.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture07',7,666,999,'3:2',null,50,'tx07.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture08',7,666,999,'3:2',null,50,'tx08.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture09',7,666,999,'3:2',null,50,'tx09.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture10',7,666,999,'3:2',null,50,'tx10.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture11',7,666,999,'3:2',null,50,'tx11.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture12',7,666,999,'3:2',null,50,'tx12.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture13',7,666,999,'3:2',null,50,'tx13.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture14',7,666,999,'3:2',null,50,'tx14.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture15',7,666,999,'3:2',null,50,'tx15.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture16',7,666,999,'3:2',null,50,'tx16.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture17',7,666,999,'3:2',null,50,'tx17.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture18',7,666,999,'3:2',null,50,'tx18.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture19',7,666,999,'3:2',null,50,'tx19.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture20',7,666,999,'3:2',null,50,'tx20.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture21',7,666,999,'3:2',null,50,'tx21.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture22',7,666,999,'3:2',null,50,'tx22.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture23',7,666,999,'3:2',null,50,'tx23.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture24',7,666,999,'3:2',null,50,'tx24.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture25',7,666,999,'3:2',null,50,'tx25.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture26',7,666,999,'3:2',null,50,'tx26.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture27',7,666,999,'3:2',null,50,'tx27.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture28',7,666,999,'3:2',null,50,'tx28.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture29',7,666,999,'3:2',null,50,'tx29.jpg','Media/Textures/');
INSERT INTO objects (obj_name, obj_type_id, height, width, aspect, color, opacity, file_name, file_path) 
VALUES ('Texture30',7,666,999,'3:2',null,50,'tx30.jpg','Media/Textures/');
