-- CreateTable
CREATE TABLE "BrowseActivity" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BrowseActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BrowseActivity" ADD CONSTRAINT "BrowseActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
