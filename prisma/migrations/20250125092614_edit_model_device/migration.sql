/*
  Warnings:

  - You are about to drop the column `serialnumber` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Device` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Device` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[serial]` on the table `Device` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `importDate` to the `Device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serial` to the `Device` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Device_serialnumber_key";

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "serialnumber",
DROP COLUMN "type",
ADD COLUMN     "importDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "serial" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Device_name_key" ON "Device"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Device_serial_key" ON "Device"("serial");
