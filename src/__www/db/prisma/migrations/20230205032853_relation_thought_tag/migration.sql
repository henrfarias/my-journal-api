-- AddForeignKey
ALTER TABLE `Thought` ADD CONSTRAINT `Thought_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `Tag`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
