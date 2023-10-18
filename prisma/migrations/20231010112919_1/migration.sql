/*
  Warnings:

  - Added the required column `nama` to the `mapel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `alamat` DROP FOREIGN KEY `alamat_Siswaid_fkey`;

-- DropForeignKey
ALTER TABLE `jurusan` DROP FOREIGN KEY `jurusan_siswaid_fkey`;

-- DropForeignKey
ALTER TABLE `mapel` DROP FOREIGN KEY `mapel_siswaid_fkey`;

-- AlterTable
ALTER TABLE `alamat` MODIFY `Siswaid` INTEGER NULL;

-- AlterTable
ALTER TABLE `jurusan` MODIFY `siswaid` INTEGER NULL;

-- AlterTable
ALTER TABLE `mapel` ADD COLUMN `nama` VARCHAR(191) NOT NULL,
    MODIFY `siswaid` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `jurusan` ADD CONSTRAINT `jurusan_siswaid_fkey` FOREIGN KEY (`siswaid`) REFERENCES `siswa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alamat` ADD CONSTRAINT `alamat_Siswaid_fkey` FOREIGN KEY (`Siswaid`) REFERENCES `siswa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mapel` ADD CONSTRAINT `mapel_siswaid_fkey` FOREIGN KEY (`siswaid`) REFERENCES `siswa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
