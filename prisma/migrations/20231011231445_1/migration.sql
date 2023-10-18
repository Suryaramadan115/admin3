/*
  Warnings:

  - You are about to drop the column `nama` on the `jurusan` table. All the data in the column will be lost.
  - Added the required column `namajurusan` to the `jurusan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `nilaisiswa` DROP FOREIGN KEY `nilaisiswa_siswaid_fkey`;

-- AlterTable
ALTER TABLE `jurusan` DROP COLUMN `nama`,
    ADD COLUMN `namajurusan` ENUM('multimedia', 'butikbusana', 'perhotelan') NOT NULL;

-- AlterTable
ALTER TABLE `nilaisiswa` MODIFY `siswaid` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `nilaisiswa` ADD CONSTRAINT `nilaisiswa_siswaid_fkey` FOREIGN KEY (`siswaid`) REFERENCES `siswa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
