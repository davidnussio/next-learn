-- CreateTable
CREATE TABLE `Todo` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `completed` BOOLEAN NOT NULL DEFAULT false,
    `authorId` VARCHAR(191) NOT NULL,

    INDEX `Todo_authorId_idx`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
