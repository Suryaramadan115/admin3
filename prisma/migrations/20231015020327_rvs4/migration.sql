/*
  Warnings:

  - You are about to drop the column `nilai` on the `nilaisiswa` table. All the data in the column will be lost.
  - Added the required column `nilai` to the `mapel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mapel` ADD COLUMN `nilai` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `nilaisiswa` DROP COLUMN `nilai`;
