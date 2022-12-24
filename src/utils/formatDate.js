export default function formatDate(oldDateStr) {
  const month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const prevDate = new Date(oldDateStr);
  const today = new Date();

  const { abs, floor } = Math;

  const deltaYears = today.getFullYear() - prevDate.getFullYear();
  const deltaMonths =
    abs(today.getMonth() - prevDate.getMonth() + 1) + deltaYears * 12;
  const deltaDays =
    abs(today.getDate() - prevDate.getDate()) + deltaMonths * 30;

  if (deltaDays <= 6) return `${deltaDays} days ago`;
  else if (deltaDays > 6 && deltaDays <= 13) return `1 week ago`;
  else if (deltaDays > 13 && deltaDays <= 30)
    return `${floor(deltaDays / 7)} weeks ago`;
  else if (deltaMonths <= 11)
    return `${prevDate.getDate()} ${month[prevDate.getMonth()]}`;
  else
    return `${prevDate.getDate()} ${
      month[prevDate.getMonth()]
    } '${prevDate.getFullYear()}`;
}
