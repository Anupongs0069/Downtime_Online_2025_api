/*
  Warnings:

  - You are about to drop the column `amount` on the `RepairRecord` table. All the data in the column will be lost.
  - You are about to drop the column `customerPhone` on the `RepairRecord` table. All the data in the column will be lost.
  - You are about to drop the column `deviceBarcode` on the `RepairRecord` table. All the data in the column will be lost.
  - You are about to drop the column `expireDate` on the `RepairRecord` table. All the data in the column will be lost.
  - You are about to drop the column `payDate` on the `RepairRecord` table. All the data in the column will be lost.
  - Added the required column `deviceProduct` to the `RepairRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RepairRecord" DROP COLUMN "amount",
DROP COLUMN "customerPhone",
DROP COLUMN "deviceBarcode",
DROP COLUMN "expireDate",
DROP COLUMN "payDate",
ADD COLUMN     "deviceProduct" TEXT NOT NULL;
