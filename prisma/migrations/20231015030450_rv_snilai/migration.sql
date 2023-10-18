/*
  Warnings:

  - You are about to drop the column `nama` on the `mapel` table. All the data in the column will be lost.
  - You are about to drop the column `nilai` on the `mapel` table. All the data in the column will be lost.
  - Added the required column `fisika` to the `mapel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `indonesia` to the `mapel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ipa` to the `mapel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ips` to the `mapel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kimia` to the `mapel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matematika` to the `mapel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mapel` DROP COLUMN `nama`,
    DROP COLUMN `nilai`,
    ADD COLUMN `fisika` INTEGER NOT NULL,
    ADD COLUMN `indonesia` INTEGER NOT NULL,
    ADD COLUMN `ipa` INTEGER NOT NULL,
    ADD COLUMN `ips` INTEGER NOT NULL,
    ADD COLUMN `kimia` INTEGER NOT NULL,
    ADD COLUMN `matematika` INTEGER NOT NULL;
