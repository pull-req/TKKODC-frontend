const getClickedPosition = (e) => {
  // Get rect
  const rect = e.target.getBoundingClientRect();

  // Get real position
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  return {x, y}
}

export default getClickedPosition;