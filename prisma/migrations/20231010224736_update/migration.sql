/*
  Warnings:

  - You are about to drop the column `Siswaid` on the `alamat` table. All the data in the column will be lost.
  - You are about to alter the column `nama` on the `jurusan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to drop the column `siswaid` on the `mapel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `alamat` DROP FOREIGN KEY `alamat_Siswaid_fkey`;

-- DropForeignKey
ALTER TABLE `mapel` DROP FOREIGN KEY `mapel_siswaid_fkey`;

-- AlterTable
ALTER TABLE `alamat` DROP COLUMN `Siswaid`;

-- AlterTable
ALTER TABLE `jurusan` MODIFY `nama` ENUM('multimedia', 'butikbusana', 'perhotelan') NOT NULL;

-- AlterTable
ALTER TABLE `mapel` DROP COLUMN `siswaid`;

-- CreateTable
CREATE TABLE `_JurusanToMapel` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_JurusanToMapel_AB_unique`(`A`, `B`),
    INDEX `_JurusanToMapel_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_siswaalamat` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_siswaalamat_AB_unique`(`A`, `B`),
    INDEX `_siswaalamat_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_JurusanToMapel` ADD CONSTRAINT `_JurusanToMapel_A_fkey` FOREIGN KEY (`A`) REFERENCES `jurusan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JurusanToMapel` ADD CONSTRAINT `_JurusanToMapel_B_fkey` FOREIGN KEY (`B`) REFERENCES `mapel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_siswaalamat` ADD CONSTRAINT `_siswaalamat_A_fkey` FOREIGN KEY (`A`) REFERENCES `alamat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_siswaalamat` ADD CONSTRAINT `_siswaalamat_B_fkey` FOREIGN KEY (`B`) REFERENCES `siswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
