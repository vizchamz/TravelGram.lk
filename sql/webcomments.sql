Create Database `webcomments`;

CREATE TABLE `comments` (
  `ID` int(4) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Gender` varchar(8) DEFAULT NULL,
  `Age` int(3) NOT NULL,
  `Country` varchar(10) DEFAULT NULL,
  `Comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `comments`
  ADD UNIQUE KEY `ID` (`ID`);


