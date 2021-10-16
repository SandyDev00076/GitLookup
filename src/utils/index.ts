export function cJoin(...args: (string | undefined)[]) {
  let finalClass = "";
  args.forEach((arg) => {
    if (arg !== undefined) finalClass += `${arg} `;
  });
  return finalClass.trim();
}

export function fixLink(link: string) {
  if (!link.includes("https://") && !link.includes("http://"))
    return `http://${link}`;
  return link;
}
