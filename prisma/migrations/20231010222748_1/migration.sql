/*
  Warnings:

  - You are about to drop the column `siswaid` on the `jurusan` table. All the data in the column will be lost.
  - Added the required column `Jurusanid` to the `siswa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `jurusan` DROP FOREIGN KEY `jurusan_siswaid_fkey`;

-- AlterTable
ALTER TABLE `jurusan` DROP COLUMN `siswaid`;

-- AlterTable
ALTER TABLE `siswa` ADD COLUMN `Jurusanid` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `siswa` ADD CONSTRAINT `siswa_Jurusanid_fkey` FOREIGN KEY (`Jurusanid`) REFERENCES `jurusan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
