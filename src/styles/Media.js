const tab = () => {
  return `@media (max-width: 768px)`;
};

const sp = () => {
  return `@media (max-width: 375px)`;
};
const custom = px => {
  return `@media (max-width: ${px}px)`;
};
export const Medias = {
  tab,
  sp,
  custom
};
