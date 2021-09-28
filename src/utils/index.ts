export function cJoin(...args: (string | undefined)[]) {
  let finalClass = "";
  args.forEach((arg) => {
    if (arg !== undefined) finalClass += `${arg} `;
  });
  return finalClass.trim();
}
