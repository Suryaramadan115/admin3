/*
  Warnings:

  - You are about to drop the column `nilai` on the `mapel` table. All the data in the column will be lost.
  - You are about to drop the column `Jurusanid` on the `siswa` table. All the data in the column will be lost.
  - You are about to drop the column `orangtua` on the `siswa` table. All the data in the column will be lost.
  - You are about to drop the `_jurusantomapel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_siswaalamat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_jurusantomapel` DROP FOREIGN KEY `_JurusanToMapel_A_fkey`;

-- DropForeignKey
ALTER TABLE `_jurusantomapel` DROP FOREIGN KEY `_JurusanToMapel_B_fkey`;

-- DropForeignKey
ALTER TABLE `_siswaalamat` DROP FOREIGN KEY `_siswaalamat_A_fkey`;

-- DropForeignKey
ALTER TABLE `_siswaalamat` DROP FOREIGN KEY `_siswaalamat_B_fkey`;

-- DropForeignKey
ALTER TABLE `siswa` DROP FOREIGN KEY `siswa_Jurusanid_fkey`;

-- AlterTable
ALTER TABLE `mapel` DROP COLUMN `nilai`;

-- AlterTable
ALTER TABLE `siswa` DROP COLUMN `Jurusanid`,
    DROP COLUMN `orangtua`;

-- DropTable
DROP TABLE `_jurusantomapel`;

-- DropTable
DROP TABLE `_siswaalamat`;

-- CreateTable
CREATE TABLE `datasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `siswaid` INTEGER NOT NULL,
    `alamatid` INTEGER NOT NULL,
    `jurusanid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nilaisiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `siswaid` INTEGER NOT NULL,
    `mapelid` INTEGER NOT NULL,
    `nilai` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `datasiswa` ADD CONSTRAINT `datasiswa_siswaid_fkey` FOREIGN KEY (`siswaid`) REFERENCES `siswa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datasiswa` ADD CONSTRAINT `datasiswa_alamatid_fkey` FOREIGN KEY (`alamatid`) REFERENCES `alamat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datasiswa` ADD CONSTRAINT `datasiswa_jurusanid_fkey` FOREIGN KEY (`jurusanid`) REFERENCES `jurusan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nilaisiswa` ADD CONSTRAINT `nilaisiswa_siswaid_fkey` FOREIGN KEY (`siswaid`) REFERENCES `siswa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nilaisiswa` ADD CONSTRAINT `nilaisiswa_mapelid_fkey` FOREIGN KEY (`mapelid`) REFERENCES `mapel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
