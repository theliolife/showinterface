/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : showinterface

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-11-14 18:23:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `power` tinyint(10) DEFAULT NULL,
  `extra` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `cn_name` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for showinterfacetable
-- ----------------------------
DROP TABLE IF EXISTS `showinterfacetable`;
CREATE TABLE `showinterfacetable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `function_name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `path` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `interface_detail` varchar(400) CHARACTER SET utf8 DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `modify_time` datetime DEFAULT NULL,
  `extra` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `create_person` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  `modify_person` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
