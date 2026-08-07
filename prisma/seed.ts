import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { SARAPAN, MAKAN_SIANG, MAKAN_MALAM, SNACK, type Dish, type MealType } from "./menu-data";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

const TOTAL_DAYS = 90;

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Builds a length-N sequence from a dish pool by concatenating reshuffled
// cycles of the pool, so every dish appears roughly evenly and no dish
// repeats until the rest of the pool has been served.
function buildRotation(pool: Dish[], length: number): Dish[] {
  const sequence: Dish[] = [];
  while (sequence.length < length) {
    const cycle = shuffle(pool);
    const previousLast = sequence[sequence.length - 1];
    if (previousLast && cycle[0].name === previousLast.name) {
      const swapWith = 1 + Math.floor(Math.random() * (cycle.length - 1));
      [cycle[0], cycle[swapWith]] = [cycle[swapWith], cycle[0]];
    }
    sequence.push(...cycle);
  }
  return sequence.slice(0, length);
}

async function main() {
  console.log("Menghapus data menu lama...");
  await db.menuItem.deleteMany();

  const rotations: Record<MealType, Dish[]> = {
    SARAPAN: buildRotation(SARAPAN, TOTAL_DAYS),
    MAKAN_SIANG: buildRotation(MAKAN_SIANG, TOTAL_DAYS),
    MAKAN_MALAM: buildRotation(MAKAN_MALAM, TOTAL_DAYS),
    SNACK: buildRotation(SNACK, TOTAL_DAYS),
  };

  const rows = [];
  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const weekNumber = Math.ceil(day / 7);
    for (const mealType of Object.keys(rotations) as MealType[]) {
      const dish = rotations[mealType][day - 1];
      rows.push({
        dayNumber: day,
        weekNumber,
        mealType,
        name: dish.name,
        description: dish.description,
        category: dish.category,
        calories: dish.calories,
      });
    }
  }

  console.log(`Menyimpan ${rows.length} menu (90 hari x 4 waktu makan)...`);
  await db.menuItem.createMany({ data: rows });

  console.log("Seed menu selesai.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
