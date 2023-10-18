/*
  Warnings:

  - You are about to alter the column `namajurusan` on the `jurusan` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `jurusan` MODIFY `namajurusan` VARCHAR(191) NOT NULL;
