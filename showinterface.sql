/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : showinterface

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-11-14 18:37:50
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
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1', 'Lio', 'qwe123', '1', 'root', '刘宁');
INSERT INTO `login` VALUES ('2', 'Anna', 'qwe123', '1', 'wife', '三妹');

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

-- ----------------------------
-- Records of showinterfacetable
-- ----------------------------
INSERT INTO `showinterfacetable` VALUES ('1', 'bus_modify', 'qwe/asd', '123test', '2015-11-11 22:27:06', '2015-11-11 22:27:10', '备注', 'lio', 'lio');
INSERT INTO `showinterfacetable` VALUES ('2', 'bus_create', 'asd/qwe', '123test2', '2015-11-11 22:27:57', '2015-11-11 22:28:01', '备注2', 'anna', 'anna');
INSERT INTO `showinterfacetable` VALUES ('13', 'bus_del', 'php/del_bus.php', '123123123', '2015-11-12 09:28:59', '2015-11-12 09:28:59', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('14', 'bus_fix', 'dawdwad', 'adwadwa', '2015-11-13 08:37:42', '2015-11-13 08:37:42', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('15', 'bus_lio', 'qwe12312', 'daad', '2015-11-13 09:14:17', '2015-11-13 09:14:17', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('16', 'test', 'awd', 'daww', '2015-11-13 09:52:25', '2015-11-13 09:52:25', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('17', 'test', 'awd', 'daww', '2015-11-13 09:52:29', '2015-11-13 09:52:29', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('18', 'test', 'awd', 'daww', '2015-11-13 09:52:33', '2015-11-13 09:52:33', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('19', 'test', 'awd', 'daww', '2015-11-13 09:52:35', '2015-11-13 09:52:35', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('20', 'test', 'awd', 'daww', '2015-11-13 09:52:37', '2015-11-13 09:52:37', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('21', 'test', 'awd', 'daww', '2015-11-13 09:52:39', '2015-11-13 09:52:39', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('22', 'test', 'awd', 'daww', '2015-11-13 09:52:40', '2015-11-13 09:52:40', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('23', 'test', 'awd', 'daww', '2015-11-13 09:52:42', '2015-11-13 09:52:42', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('24', 'test', 'awd', 'daww', '2015-11-13 09:52:46', '2015-11-13 09:52:46', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('25', 'test', 'awd', 'daww', '2015-11-13 09:52:48', '2015-11-13 09:52:48', '备注默认', 'Lio', 'Lio');
INSERT INTO `showinterfacetable` VALUES ('26', 'test', 'awd', 'daww', '2015-11-13 09:52:52', '2015-11-13 09:52:52', '备注默认', 'Lio', 'Lio');
