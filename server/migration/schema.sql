CREATE TABLE IF NOT EXISTS `kondo_app`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `subject` TEXT NOT NULL,
  `content` TEXT NOT NULL,
  `is_pinned` TINYINT NOT NULL,
  `status` ENUM('draft', 'published') NOT NULL,
  `member_id` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
