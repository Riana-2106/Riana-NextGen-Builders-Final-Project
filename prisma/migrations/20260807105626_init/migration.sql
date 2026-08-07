-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('BARU', 'DIHUBUNGI', 'AKTIF', 'SELESAI', 'DIBATALKAN');

-- CreateEnum
CREATE TYPE "MealType" AS ENUM ('SARAPAN', 'MAKAN_SIANG', 'MAKAN_MALAM', 'SNACK');

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT,
    "packageName" TEXT NOT NULL,
    "goal" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "status" "RegistrationStatus" NOT NULL DEFAULT 'BARU',

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dayNumber" INTEGER NOT NULL,
    "weekNumber" INTEGER NOT NULL,
    "mealType" "MealType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE INDEX "Customer_createdAt_idx" ON "Customer"("createdAt");

-- CreateIndex
CREATE INDEX "Customer_status_idx" ON "Customer"("status");

-- CreateIndex
CREATE INDEX "MenuItem_dayNumber_idx" ON "MenuItem"("dayNumber");

-- CreateIndex
CREATE INDEX "MenuItem_weekNumber_idx" ON "MenuItem"("weekNumber");

-- CreateIndex
CREATE UNIQUE INDEX "MenuItem_dayNumber_mealType_key" ON "MenuItem"("dayNumber", "mealType");
