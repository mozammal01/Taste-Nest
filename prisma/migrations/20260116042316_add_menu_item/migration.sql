/*
  Warnings:

  - You are about to drop the `MenuItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MenuItem";

-- CreateTable
CREATE TABLE "menu_item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT,
    "category" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "image" TEXT,
    "discount" TEXT,
    "freeDelivery" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "menu_item_pkey" PRIMARY KEY ("id")
);
