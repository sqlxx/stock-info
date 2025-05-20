/*
  Warnings:

  - You are about to drop the column `mame` on the `Stock` table. All the data in the column will be lost.
  - Added the required column `name` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Stock` DROP COLUMN `mame`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
