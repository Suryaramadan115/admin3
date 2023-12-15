-- CreateTable
CREATE TABLE `siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nisn` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `kelas` INTEGER NOT NULL,

    UNIQUE INDEX `siswa_nisn_key`(`nisn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jurusan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namajurusan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alamat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kampung` VARCHAR(191) NOT NULL,
    `desa` VARCHAR(191) NOT NULL,
    `kecamatan` VARCHAR(191) NOT NULL,
    `kabupaten` VARCHAR(191) NOT NULL,
    `post` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mapel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ipa` INTEGER NOT NULL,
    `ips` INTEGER NOT NULL,
    `matematika` INTEGER NOT NULL,
    `indonesia` INTEGER NOT NULL,
    `kimia` INTEGER NOT NULL,
    `fisika` INTEGER NOT NULL,
    `inggris` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

    UNIQUE INDEX `nilaisiswa_siswaid_key`(`siswaid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
