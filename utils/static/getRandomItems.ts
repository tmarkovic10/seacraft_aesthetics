import { Services } from "@/config/services";

export const getRandomItems = (
  items: Services[],
  excludeId: number,
  count: number = 2
): Services[] => {
  const filteredItems = items.filter((item) => item.id !== excludeId);

  const shuffledItems = filteredItems.sort(() => 0.5 - Math.random());

  return shuffledItems.slice(0, count);
};
