USE `kondo_app`;
####
CREATE TABLE IF NOT EXISTS `kondo_app`.`posts` (
  `id` VARCHAR (36) NOT NULL,
  `subject` TEXT NOT NULL,
  `content` TEXT NOT NULL,
  `is_pinned` TINYINT NOT NULL,
  `status` ENUM('draft', 'published') NOT NULL,
  `member_id` VARCHAR (36) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
####
CREATE TABLE IF NOT EXISTS `kondo_app`.`members` (
  `id` VARCHAR (36) NOT NULL,
  `name` VARCHAR (50) NOT NULL,
  `password` VARCHAR (140) NOT NULL,
  `email` VARCHAR (50) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
