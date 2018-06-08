-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: us-cdbr-iron-east-04.cleardb.net    Database: heroku_552a0ff44c27e3c
-- ------------------------------------------------------
-- Server version	5.5.56-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (25,'Visual Identity'),(26,'Corporate Identity'),(27,'Print'),(28,'Campagne'),(29,'Exhibition Graphics'),(30,'Concept Design '),(31,'Pitch'),(32,'Key Visual'),(33,'Visuals'),(35,'Information Graphics'),(36,'Projection'),(37,'Self Initiated'),(38,'Graphic Design');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info`
--

DROP TABLE IF EXISTS `info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text CHARACTER SET utf8 NOT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info`
--

LOCK TABLES `info` WRITE;
/*!40000 ALTER TABLE `info` DISABLE KEYS */;
INSERT INTO `info` VALUES (1,'<p>Edgar Kandratian is an art director and graphic designer based in Berlin, whose work focuses on translating cultural and corporate narratives into visual identities and languages. His strong contextual and intuitive thinking, combined with his discerning sense of aesthetics results in subtly original designs, communication and creative concepts.</p><p><br></p><p>Studio ek places a high value on individual communication and on personalised collaborative working relationship with their clients and partners, thus ensuring a solid ground for productive exchange in the design process.&nbsp;</p><p><br></p><p>Kandratian worked for several years at chezweitz, a Berlin-based studio specialised in museal and urban scenography.</p><p><br></p><p>There, he assumed the combined role of art director/graphic designer and concept developer for scenographic designs. As such, he participated in exhibition projects for various cultural institutions throughout in Germany such as: Deutsches Historisches Museum, Klassik Stiftung Weimar, Pinakothek der Moderne, IBA Berlin, Deutsches Hygiene Museum etc.</p><p><br></p><p>At chezweitz, Kandratian was part of the winning Design Team which proposed the concept for the new permanent exhibition design of the Jewish Museum Berlin, as well as of the Bauhaus Museum in Dessau.</p>','2018-03-31 22:29:57'),(3,'<p>co-creating&nbsp;</p><p><br></p><p>With an educational background from Bauhaus Dessau, Kandratian embraces collaboration and interdisciplinarity as part of his creative processes. studio ek collaborates with a wide range of creative professionals from the fields of arts and design to develop complex visual and conceptual insights; such as architects, photographers, writers, illustrators, multimedia artists, programmers, and cultural scientists.</p>','2018-03-31 22:30:05'),(4,'<p>workshops</p><p><br></p><p>studio ek offers a range of workshops and project formats in collaborative design and conceptual art that are aimed at developing and exchanging knowledge, as well as at experiencing the mutual act of creation.</p>','2018-03-31 22:29:57'),(5,'<p>positions</p><p><br></p><p>We are open for any kind of intermedia collaborations with freelancers as well as other design studios and agencies and are looking forward to hear from you!</p><p><br></p><p>The Studio also offers a 3-6 Month durational internships to motivated and enthusiastic people to support our small team. (Please send your application with a selection of your works to)&nbsp;</p><p><br></p><p>However please note that the Studio currently doesn\'t accept applications.</p>','2018-03-31 22:29:57'),(6,'<p>credits</p><p><br></p><p>© Studio Edgar Kandratian, 2018</p><p>Web Development by Arev Arevyan</p><p>Photo by Johannes Bögle</p><p>Typeface: Godfrey</p>','2018-03-31 22:29:57'),(7,'<p>imprint&nbsp;</p><p><br></p><p>Haftungsausschluss:&nbsp;</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc</p><p>Die Inhalte dieser Seiten sind mit größter Sorgfalt erstellt. Der Autor übernimmt keine Gewähr für Aktualität, Richtigkeit und Vollständigkeit der auf dieser Web- site bereitgestellten Angaben. Die Seite enthält Links zu externen Webseiten Dritter, auf deren Inhalte keinerlie Einfluss besteht. Deshalb wird für diese Inhalte keine Gewähr übernommen. Für die Inhalte der verlinkten Seiten ist aus- schließlich der jeweilige Anbieter bzw. Betreiber der Seiten verantwortlich; alie verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsver- stöße überprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunk nicht erkenn- bar. Eine andauernde inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekannt- werden von Rechtsverletzungen werden derartige Links umgehend entfernt. Die Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb dieser Seite bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur zu privaten Zwecken gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber er- stellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere sind Inhalte Dritter als solche gekennzeichnet. Sollten Sie dennoch auf eine Urheber- rechtsverletzung aufmerksam werden, wird um Hinweis gebeten. Bei Bekannt- werden von Rechtsverletzungen werden derartige Inhalte umgehend entfernt. Die Nutzung der Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Der Nutzung der hier veröffentlichten Kontaktinformationen durch Dritte zur Übersendung von nicht bestellter Werbung und Informations- materialien wird hiermit widersprochen. rnde inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekannt- werden von Rechtsverletzungen werden derartige Links umgehend entfernt. Die Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb dieser Seite bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur zu privaten Zwecken gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber er- stellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere sind Inhalte Dritter als solche gekennzeichnet. Sollten Sie dennoch auf eine Urheber- rechtsverletzung aufmerksam werden, wird um Hinweis gebeten. Bei Bekannt- werden von Rechtsverletzungen werden derartige Inhalte umgehend entfernt. Die Nutzung der Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Der Nutzung der hier veröffentlichten Kontaktinformationen durch Dritte zur Übersendung von nicht bestellter Werbung und Informations- materialien wird hiermit widersprochen.</p>','2018-03-31 22:29:57'),(8,'<p>services</p><p><br></p><p>Creative &amp; Artistic Direction</p><p>Visual Identity</p><p>Visual Communication</p><p>Concept Design (Graphic Design,&nbsp;Webdesign, Scenography)</p><p>Design Consultancy</p>','2018-03-31 22:29:57'),(9,'<p>contact</p><p><br></p><p>10553 Berlin, Germany</p><p>sayhello@edgarkandratian.com</p><p>+ 49 157775477</p><p><br></p><p><a href=\"https://mail.google.com/mail/u/0/#inbox\" target=\"_blank\">Instagram </a></p><p><a href=\"https://www.facebook.com/ed.edgar.52\" target=\"_blank\">Facebook</a></p><p><a href=\"https://www.facebook.com/\" target=\"_blank\">Behance</a></p><p>Tumblr</p>','2018-03-31 22:29:57'),(10,'<p>collaborations&nbsp;</p><p><br></p><p>TUMO&nbsp;</p><p>anschlaege</p><p>chezweitz</p><p>raumlabor</p><p>complizen</p><p>Stiftung Freizeit</p><p>schnellebuntebilder</p><p>Kami Blusch</p><p>Triada Studio</p><p>Zona Dynamic</p><p>Christopher Bauder</p><p>Steffen Schuhmann</p><p>Sebastian Zimmerhackl</p><p>Gerald Wagner</p><p>Nikolai Gamasin</p><p>Ronny Traufeller</p><p>Vincent Chomaz</p><p>Eliza Goldox</p><p>Kata Adamek</p><p>Rachel Marsden</p><p>Karl Frederik Scholz</p><p>Anna James Design</p><p>Maria Svensson</p><p>Rachel Hill</p><p>Joseph Tong</p><p>Beth DIllon</p><p>Tâté Tâtâ</p><p>Christian Treffler</p><p>Simon Junge</p>','2018-03-31 22:29:57'),(12,'<p>clientele</p><p><br></p>',NULL);
/*!40000 ALTER TABLE `info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_color_image`
--

DROP TABLE IF EXISTS `info_color_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `info_color_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(30) DEFAULT NULL,
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_color_image`
--

LOCK TABLES `info_color_image` WRITE;
/*!40000 ALTER TABLE `info_color_image` DISABLE KEYS */;
INSERT INTO `info_color_image` VALUES (1,'#ffffff','ME1new.jpg');
/*!40000 ALTER TABLE `info_color_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inner_page`
--

DROP TABLE IF EXISTS `inner_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inner_page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `page_id` int(11) DEFAULT NULL,
  `image` text,
  `position_top` int(11) DEFAULT NULL,
  `position_left` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `img_order` int(11) DEFAULT NULL,
  `status` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `page_id` (`page_id`),
  CONSTRAINT `inner_page_ibfk_1` FOREIGN KEY (`page_id`) REFERENCES `page` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=408 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inner_page`
--

LOCK TABLES `inner_page` WRITE;
/*!40000 ALTER TABLE `inner_page` DISABLE KEYS */;
INSERT INTO `inner_page` VALUES (338,7,'SLK_test6.jpg',203,0,38,44,'2018-05-28',1,'active'),(340,7,'SLK_test8.jpg',186,61,38,26,'2018-05-28',3,'active'),(342,7,'SLK_test10.jpg',594,13,38,23,'2018-05-28',4,'active'),(343,7,'SLK_test11.jpg',248,48,41,26,'2018-05-28',2,'active'),(344,7,'SLK_test12.jpg',357,53,46,25,'2018-05-28',5,'active'),(346,7,'SLK_test14.jpg',170,14,39,23,'2018-05-28',6,'active'),(347,7,'SLK_test15.jpg',502,44,42,26,'2018-05-28',7,'active'),(348,7,'SLK_test16.jpg',70,49,50,34,'2018-05-28',8,'active'),(349,7,'SLK_test17.jpg',97,5,46,27,'2018-05-28',10,'active'),(350,7,'SLK_test18.jpg',302,56,32,17,'2018-05-28',11,'active'),(351,7,'SLK_test19.jpg',284,13,40,25,'2018-05-28',9,'active'),(352,7,'SLK_test20.jpg',331,10,47,31,'2018-05-28',12,'active'),(353,49,'HIGH_test1.jpg',0,0,20,20,'2018-03-22',1,'active'),(354,49,'HIGH_test2.jpg',0,0,20,20,'2018-03-22',2,'active'),(355,49,'HIGH_test3.jpg',0,0,20,20,'2018-03-22',3,'active'),(356,49,'HIGH_test4.jpg',0,0,20,20,'2018-03-22',4,'active'),(357,49,'HIGH_test5.jpg',0,0,20,20,'2018-03-22',5,'active'),(358,49,'HIGH_test6.jpg',0,0,20,20,'2018-03-22',6,'active'),(359,49,'HIGH_test7.jpg',0,0,20,20,'2018-03-22',7,'active'),(360,49,'HIGH_test8.jpg',0,0,20,20,'2018-03-22',8,'active'),(361,49,'HIGH_test9.jpg',0,0,20,20,'2018-03-22',9,'active'),(362,49,'HIGH_test10.jpg',0,0,20,20,'2018-03-22',10,'active'),(363,49,'HIGH_test11.jpg',0,0,20,20,'2018-03-22',11,'active'),(364,49,'HIGH_test12.jpg',0,0,20,20,'2018-03-22',12,'active'),(365,49,'HIGH_test13.jpg',0,0,20,20,'2018-03-22',13,'active'),(366,49,'HIGH_test14.jpg',0,0,20,20,'2018-03-22',14,'active'),(367,49,'HIGH_test15.jpg',0,0,20,20,'2018-03-22',15,'active'),(368,49,'HIGH_test16.jpg',4,49,35,23,'2018-03-22',16,'active'),(369,49,'HIGH_test17.jpg',22,4,34,51,'2018-03-22',17,'active'),(370,49,'HIGH_test18.jpg',11,36,32,21,'2018-03-22',18,'active'),(371,49,'HIGH_test19.jpg',23,63,33,22,'2018-03-22',19,'active'),(372,50,'WIN_test1.jpg',0,0,20,20,'2018-05-12',1,'active'),(373,50,'WIN_test2.jpg',0,0,20,20,'2018-05-12',2,'active'),(374,50,'WIN_test3.jpg',0,0,20,20,'2018-05-12',3,'active'),(375,50,'WIN_test4.jpg',0,0,20,20,'2018-05-12',4,'active'),(376,50,'WIN_test5.jpg',0,0,20,20,'2018-05-12',5,'active'),(377,50,'WIN_test6.jpg',0,0,20,20,'2018-05-12',6,'active'),(378,50,'WIN_test7.jpg',0,0,20,20,'2018-05-12',7,'active'),(379,50,'WIN_test8.jpg',0,0,20,20,'2018-05-12',8,'active'),(380,50,'WIN_test9.jpg',38,6,27,20,'2018-05-12',9,'active'),(381,50,'WIN_test10.jpg',24,27,32,21,'2018-05-12',10,'active'),(382,50,'WIN_test11.jpg',6,22,20,14,'2018-05-12',11,'active'),(383,50,'WIN_test12.jpg',55,21,41,27,'2018-05-12',12,'active'),(384,50,'WIN_test13.jpg',8,51,48,32,'2018-05-12',13,'active'),(385,50,'WIN_test14.jpg',27,50,21,16,'2018-05-12',14,'active'),(392,7,'EdgarKandratian-Geld-3.jpg',22,24,61,39,'2018-05-28',13,'active'),(394,7,'EdgarKandratian-Geld-5.jpg',441,3,41,41,'2018-05-28',14,'active'),(396,59,'1.jpg',134,53,33,19,'2018-05-28',3,'active'),(397,59,'2.jpg',104,5,59,33,'2018-05-28',2,'active'),(398,59,'3.jpg',6,11,70,39,'2018-05-28',1,'active'),(400,59,'6.jpg',180,35,51,28,'2018-05-28',4,'active'),(402,7,'charlottengrad_prÃ¤sentation 10.jpg',2,1,45,32,'2018-05-28',15,'active'),(403,59,'1.jpg',51,3,63,36,'2018-05-28',5,'active'),(405,59,NULL,75,55,44,25,'2018-05-28',6,'active'),(407,59,NULL,153,4,46,26,'2018-05-28',7,'active');
/*!40000 ALTER TABLE `inner_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page`
--

DROP TABLE IF EXISTS `page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `top_left_text` text NOT NULL,
  `top_right_text` text NOT NULL,
  `bottom_left_text` text NOT NULL,
  `bottom_right_text` text NOT NULL,
  `image_small` text NOT NULL,
  `image_small_size` int(11) DEFAULT NULL,
  `image_medium` text NOT NULL,
  `image_medium_size` int(11) DEFAULT NULL,
  `image_large` text NOT NULL,
  `image_large_size` int(11) NOT NULL,
  `image_extra_large` text,
  `image_extra_large_size` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `category` text,
  `year` year(4) DEFAULT NULL,
  `clinet` text,
  `text_color` varchar(7) NOT NULL,
  `inner_bg_color` varchar(7) NOT NULL,
  `inner_text_color` varchar(7) NOT NULL,
  `inner_text` text,
  `project_order` int(11) DEFAULT NULL,
  `status` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page`
--

LOCK TABLES `page` WRITE;
/*!40000 ALTER TABLE `page` DISABLE KEYS */;
INSERT INTO `page` VALUES (7,'studio edgar kandratian','information','stadtland kirche','registry','slk-homepage.jpg',NULL,'slk-homepage.jpg',NULL,'slk-homepage.jpg',0,'',NULL,'2018-05-28','Visual Identity,Corporate Identity,Print,Exhibition Graphics,Concept Design ,Key Visual',2017,' IBA Thüringen','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',5,'active'),(49,'studio edgar kandratian','information','highlighting','registry','high-homepage-xl.jpg',NULL,'high-homepage-xl.jpg',NULL,'high-homepage-xl.jpg',0,'',NULL,'2018-05-20','Visual Identity,Visuals',2013,'Stiftung Bauhaus Dessau','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',7,'active'),(50,'studio edgar kandratian','information','winckelmann. moderne antike','registry','win_homepage.jpg',NULL,'win_homepage.jpg',NULL,'hmsx_homepage_webnew.jpg',112,'',NULL,'2018-06-01','Visual Identity,Print,Exhibition Graphics,Key Visual',2017,'Klassik Stiftung Weimar','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',4,'active'),(59,'studio edgar kandratian','information','berlin transit','registry','homepage-charlottengrad-xl.jpg',NULL,'homepage-charlottengrad-xl.jpg',NULL,'homepage-charlottengrad-xl.jpg',0,'',NULL,'2018-05-30','Visual Identity,Concept Design ,Pitch',2013,'Jewish Museum Berlin','#ffffff','#ffe599','','<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',3,'active'),(60,'studio edgar kandratian','information','an error occurred ','registry','error_homepage-xl.jpg',NULL,'error_homepage-xl.jpg',NULL,'error_homepage-xl.jpg',0,'',NULL,'2018-05-28','Visuals,Self Initiated',2018,'Self Initiated','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',6,'active'),(61,'studio edgar kandratian','information','color blindness ','registry','farben-homepage02.jpg',NULL,'farben-homepage02.jpg',NULL,'farben-homepage02.jpg',0,'',NULL,'2018-05-20','Information Graphics',2013,'Hochschule Anhalt','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',8,'active'),(62,'studio edgar kandratian','information','forum wissen','registry','fw_homepage.jpg',NULL,'fw_homepage.jpg',NULL,'fw_homepage.jpg',174,'',NULL,'2018-06-01','Visual Identity,Corporate Identity,Campagne,Concept Design ,Pitch,Key Visual',2016,'Georg-August-Universität Göttingen','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',9,'active'),(63,'studio edgar kandratian','information','geld – die ausstellung','registry','geld-homepage-xl.jpg',NULL,'geld-homepage-xl.jpg',NULL,'geld-homepage-xl.jpg',0,'',NULL,'2018-05-30','Visual Identity,Print,Exhibition Graphics,Key Visual',2015,'Stl. Museum für Archäologie Chemnitz','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.aaaaaaaaaaaaa',10,'active'),(64,'studio edgar kandratian','information','hmsx_en','registry','hmsx-homepage-xl.jpg',NULL,'hmsx-homepage-xl.jpg',NULL,'hmsx-homepage-xl.jpg',0,'',NULL,'2018-05-20','Visual Identity,Corporate Identity,Print,Campagne,Exhibition Graphics,Key Visual',2015,'Deutsches Historisches Museum','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',11,'active'),(65,'studio edgar kandratian','information','mies & the inheritance of modernism','registry','mies-homepage.jpg',NULL,'mies-homepage.jpg',NULL,'mies-homepage.jpg',0,'',NULL,'2018-05-20','Corporate Identity,Print,Key Visual',2016,'SCHUNCK*','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',12,'active'),(66,'studio edgar kandratian','information','modelle des selbst','registry','modelle-homepage.jpg',NULL,'modelle-homepage.jpg',NULL,'modelle-homepage.jpg',0,'',NULL,'2018-05-20','Print,Information Graphics',2013,'Hochschule Anhalt','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',13,'active'),(67,'studio edgar kandratian','information','panipanama','registry','panipan-homepage-xl.jpg',NULL,'panipan-homepage-xl.jpg',NULL,'panipan-homepage-xl.jpg',0,'',NULL,'2018-05-20','Visual Identity,Print',2014,'Polnisches Institut Leipzig','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',14,'active'),(68,'studio edgar kandratian','information','what we hear ¿','registry','wwh-homepage.jpg',NULL,'wwh-homepage.jpg',NULL,'wwh-homepage.jpg',0,'',NULL,'2018-05-20','Visual Identity,Key Visual,Graphic Design',2018,'TUMO','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',15,'active'),(70,'studio edgar kandratian','information','pets friends forever','registry','tiere-homepage-xl.jpg',NULL,'tiere-homepage-xl.jpg',NULL,'tiere-homepage-xl.jpg',0,'',NULL,'2018-05-20','Visual Identity,Exhibition Graphics,Concept Design ,Key Visual',2017,'Deutsches Hygiene Museum Dresden','#ffffff','#ffffff','','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',16,'active'),(79,'studio edgar kandratian','information','mumumumugfdgfdg','registry','alvaroCervantes.jpg',49,'18010501_1184980054964314_8085116298064772758_n.jpg',65,'chris1.jpg',139,NULL,NULL,'2018-06-01','Visual Identity',2010,'aaaa','#ff9900','#666666','#4a86e8','<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',1,'active'),(83,'studio edgar kandratian','information','dwsdsd','registry','sam4.jpg',262,'sam3.jpg',165,'sam5.jpg',187,NULL,NULL,'2018-05-30','Exhibition Graphics,Concept Design ',2018,'dsdsdsd','#ffffff','#ff9900','#ff00ff','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',2,'active');
/*!40000 ALTER TABLE `page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider`
--

DROP TABLE IF EXISTS `slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inner_page_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inner_page_id` (`inner_page_id`),
  CONSTRAINT `slider_ibfk_2` FOREIGN KEY (`inner_page_id`) REFERENCES `inner_page` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider`
--

LOCK TABLES `slider` WRITE;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` VALUES (2,405);
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider_image`
--

DROP TABLE IF EXISTS `slider_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slider_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slider_id` int(11) NOT NULL,
  `image` text NOT NULL,
  `position_top` int(11) DEFAULT NULL,
  `position_left` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `img_order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `slider_id` (`slider_id`),
  CONSTRAINT `slider_image_ibfk_1` FOREIGN KEY (`slider_id`) REFERENCES `slider` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider_image`
--

LOCK TABLES `slider_image` WRITE;
/*!40000 ALTER TABLE `slider_image` DISABLE KEYS */;
INSERT INTO `slider_image` VALUES (5,2,'2.jpg',0,0,20,20,'2018-05-24','active',4),(6,2,'3.jpg',0,0,20,20,'2018-05-24','active',5),(7,2,'4.jpg',0,0,20,20,'2018-05-24','active',3);
/*!40000 ALTER TABLE `slider_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `password` varchar(50) NOT NULL,
  `secret_word` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'editor','183b9692522fdc7bb2422ba4b8fd0e5c','ab0522deced9efa0f06d78346db09d45');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inner_page_id` int(11) DEFAULT NULL,
  `video_url` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `inner_page_id` (`inner_page_id`),
  CONSTRAINT `video_ibfk_1` FOREIGN KEY (`inner_page_id`) REFERENCES `inner_page` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (2,407,'https://www.youtube.com/embed/iywaBOMvYLI');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-02 12:54:03
