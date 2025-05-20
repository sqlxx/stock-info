-- CreateTable
CREATE TABLE `StockBasic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `symbol` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NULL,
    `industry` VARCHAR(191) NULL,
    `market` VARCHAR(191) NULL,
    `exchange` VARCHAR(191) NOT NULL,
    `listStatus` VARCHAR(191) NULL,
    `listDate` DATETIME(3) NULL,
    `delistDate` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `StockBasic_symbol_key`(`symbol`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
