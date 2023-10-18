/*
  Warnings:

  - Added the required column `inggris` to the `mapel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mapel` ADD COLUMN `inggris` INTEGER NOT NULL;
