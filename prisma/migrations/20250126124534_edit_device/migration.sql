/*
  Warnings:

  - You are about to drop the column `serial` on the `Device` table. All the data in the column will be lost.
  - You are about to drop the column `deviceSerial` on the `RepairRecord` table. All the data in the column will be lost.
  - Added the required column `family` to the `Device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deviceFamily` to the `RepairRecord` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Device_serial_key";

-- AlterTable
ALTER TABLE "Device" DROP COLUMN "serial",
ADD COLUMN     "family" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "RepairRecord" DROP COLUMN "deviceSerial",
ADD COLUMN     "deviceFamily" TEXT NOT NULL;
