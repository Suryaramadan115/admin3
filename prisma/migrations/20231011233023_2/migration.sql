/*
  Warnings:

  - You are about to alter the column `nisn` on the `siswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `kelas` on the `siswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `siswa` MODIFY `nisn` INTEGER NOT NULL,
    MODIFY `kelas` INTEGER NOT NULL;
