/*
  Warnings:

  - A unique constraint covering the columns `[siswaid]` on the table `nilaisiswa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `nilaisiswa_siswaid_key` ON `nilaisiswa`(`siswaid`);
