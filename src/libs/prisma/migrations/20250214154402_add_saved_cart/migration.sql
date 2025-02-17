/*
  Warnings:

  - A unique constraint covering the columns `[cartId]` on the table `SavedCart` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `SavedCart_cartId_key` ON `SavedCart`(`cartId`);
