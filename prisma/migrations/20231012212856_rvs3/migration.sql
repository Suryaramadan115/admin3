-- DropForeignKey
ALTER TABLE `datasiswa` DROP FOREIGN KEY `datasiswa_alamatid_fkey`;

-- DropForeignKey
ALTER TABLE `datasiswa` DROP FOREIGN KEY `datasiswa_jurusanid_fkey`;

-- DropForeignKey
ALTER TABLE `datasiswa` DROP FOREIGN KEY `datasiswa_siswaid_fkey`;

-- DropForeignKey
ALTER TABLE `nilaisiswa` DROP FOREIGN KEY `nilaisiswa_mapelid_fkey`;

-- DropForeignKey
ALTER TABLE `nilaisiswa` DROP FOREIGN KEY `nilaisiswa_siswaid_fkey`;

-- AddForeignKey
ALTER TABLE `datasiswa` ADD CONSTRAINT `datasiswa_siswaid_fkey` FOREIGN KEY (`siswaid`) REFERENCES `siswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datasiswa` ADD CONSTRAINT `datasiswa_alamatid_fkey` FOREIGN KEY (`alamatid`) REFERENCES `alamat`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datasiswa` ADD CONSTRAINT `datasiswa_jurusanid_fkey` FOREIGN KEY (`jurusanid`) REFERENCES `jurusan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nilaisiswa` ADD CONSTRAINT `nilaisiswa_siswaid_fkey` FOREIGN KEY (`siswaid`) REFERENCES `siswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nilaisiswa` ADD CONSTRAINT `nilaisiswa_mapelid_fkey` FOREIGN KEY (`mapelid`) REFERENCES `mapel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
